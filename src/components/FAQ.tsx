const faqData = [
  {
    question: "What is Sellio?",
    answer:
      "Sellio is an ecommerce solution designed to help businesses create and grow their online presence.",
  },
  {
    question: "How does Sellio help my business?",
    answer:
      "Sellio provides the tools and features needed to manage your online selling experience.",
  },
  {
    question: "What features are included with Sellio?",
    answer:
      "Sellio includes ecommerce tools, business solutions and features designed for online growth.",
  },
  {
    question: "Can I use Sellio for my online business?",
    answer:
      "Yes, Sellio is built to support businesses looking to launch and improve their online store.",
  },
  {
    question: "Does Sellio provide support?",
    answer:
      "Yes, Sellio provides support to help you with your setup and ecommerce requirements.",
  },
  {
    question: "Is Sellio suitable for growing businesses?",
    answer:
      "Sellio provides flexible solutions that can support businesses as they grow.",
  },
  {
    question: "How do I get started with Sellio?",
    answer:
      "You can start by exploring Sellio solutions and choosing the right option for your business.",
  },
  {
    question: "Why choose Sellio?",
    answer:
      "Sellio helps simplify ecommerce with modern tools and solutions for businesses.",
  },
  {
    question: "Can I manage my ecommerce easily?",
    answer:
      "Sellio is designed with a simple experience to help manage your online operations.",
  },
];

export default function FAQ() {
  return (
    <section className="py-24 bg-[#FEF9F5]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
            FAQ
          </span>

          <h2 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-neutral-900">
            Frequently asked questions
          </h2>

          <p className="mt-5 text-lg text-neutral-600 leading-relaxed">
            Find answers to common questions about Sellio and our platform.
          </p>
        </div>


        {/* FAQ Cards */}
        <div className="grid gap-x-10 gap-y-12 md:grid-cols-3">

          {faqData.map((item, index) => (
            <div
              key={index}
              className="border-t border-neutral-200 pt-6"
            >

              <h3 className="text-lg font-semibold text-neutral-900">
                {item.question}
              </h3>

              <p className="mt-4 text-sm leading-7 text-neutral-600">
                {item.answer}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}