"use client";

const steps = [
  {
    number: "01",
    title: "Choose a competition",
    description:
      "Browse live competitions and pick the one you want a shot at.",
  },
  {
    number: "02",
    title: "Enter or purchase",
    description:
      "Buy an entry or use a free entry route in just a couple of clicks.",
  },
  {
    number: "03",
    title: "Wait for the draw",
    description:
      "Every entry is logged and the draw date is fixed and published upfront.",
  },
  {
    number: "04",
    title: "Winner announced",
    description:
      "The winner is drawn live and contacted directly to arrange the prize.",
  },
];

export default function EntryHowItWorks() {
  return (
    <section
      id="entry-how-it-works"
      className="py-20 sm:py-28 border-t border-[#ECE6DE] bg-[#FEF9F5]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="flex flex-col gap-4 max-w-2xl items-start text-left">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#FA5A45]">
            How it works
          </span>

          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#12172A]">
            From entering to winning in four simple steps.
          </h2>

          <p className="text-base sm:text-lg text-[#5B6472] leading-relaxed">
            A simple and transparent process designed to make every competition
            easy to understand.
          </p>
        </div>


        {/* Steps Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <article
              key={step.title}
              className="
                rounded-2xl 
                border border-[#ECE6DE] 
                bg-white 
                p-6 
                shadow-sm 
                transition-all 
                duration-300 
                hover:shadow-md 
                hover:-translate-y-1
                animate-fadeInUp
              "
              style={{
                animationDelay: `${i * 120}ms`,
              }}
            >

              <div
                className="
                  flex h-11 w-11 
                  items-center justify-center 
                  rounded-full 
                  bg-[#12172A] 
                  text-sm 
                  font-semibold 
                  text-white
                "
              >
                {step.number}
              </div>


              <h3 className="mt-5 text-lg font-semibold text-[#12172A]">
                {step.title}
              </h3>


              <p className="mt-3 text-sm leading-relaxed text-[#5B6472]">
                {step.description}
              </p>


              {i !== steps.length - 1 && (
                <div
                  className="
                    hidden lg:block
                    absolute
                  "
                />
              )}

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}