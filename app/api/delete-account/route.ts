import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email, reason } = body || {};

        if (!email || !reason) {
            return NextResponse.json(
                { error: "Missing required fields." },
                { status: 400 }
            );
        }

        const envUrl = process.env.NEXT_PUBLIC_BASE_URL || "";
        // Clean leading/trailing quotes and trailing slashes
        const cleanUrl = envUrl.trim().replace(/^['"]|['"]$/g, "").replace(/\/+$/, "");

        let apiUrl: string;
        if (cleanUrl.endsWith("/api/v1/users")) {
            apiUrl = `${cleanUrl}/web-delete-request`;
        } else {
            try {
                const parsedUrl = new URL(cleanUrl);
                apiUrl = `${parsedUrl.origin}/api/v1/users/web-delete-request`;
            } catch {
                const baseUrl = cleanUrl.replace(/\/api\/v1\/web\/delete-account\/?$/, "");
                apiUrl = `${baseUrl}/api/v1/users/web-delete-request`;
            }
        }

        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, reason }),
        });

        // Some APIs might return non-JSON responses on error
        let data;
        try {
            data = await response.json();
        } catch (e) {
            data = { error: "Failed to parse response from server" };
        }

        return NextResponse.json(data, { status: response.status });
    } catch (error: any) {
        console.error("DELETE_ACCOUNT_PROXY_ERROR:", error);
        return NextResponse.json(
            { error: error?.message || "Internal server error" },
            { status: 500 }
        );
    }
}
