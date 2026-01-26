const faqs = [
    {
        question: "How do I cancel my subscription?",
        answer: "You can cancel your subscription at any time through your account settings dashboard under the 'Billing' tab. Your access will remain active until the end of your current billing period.",
    },
    {
        question: "Is my data secure?",
        answer: "Yes, we use industry-standard encryption protocols (SSL/TLS) for all data transfers. We do not store your original text longer than necessary to process your request.",
    },
    {
        question: "Do you offer a free trial?",
        answer: "Absolutely! Every new user gets 10,000 free tokens to try out all our AI generators. No credit card required to start.",
    },
];

export default function FAQ() {
    return (
        <div className="mt-12 space-y-4">
            <h3 className="text-2xl font-bold text-[#131118] dark:text-white mb-6">
                Frequently Asked Questions
            </h3>
            <div className="space-y-3">
                {faqs.map((faq, index) => (
                    <details
                        key={index}
                        className="group bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm"
                    >
                        <summary className="flex items-center justify-between p-5 cursor-pointer list-none focus:outline-none">
                            <span className="font-semibold text-gray-900 dark:text-white">
                                {faq.question}
                            </span>
                            <span className="material-symbols-outlined transition-transform group-open:rotate-180 text-gray-400">
                                expand_more
                            </span>
                        </summary>
                        <div className="px-5 pb-5 text-gray-600 dark:text-gray-400 text-sm leading-relaxed border-t border-gray-50 dark:border-gray-800 pt-4">
                            {faq.answer}
                        </div>
                    </details>
                ))}
            </div>
        </div>
    );
}
