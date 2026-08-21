"use client";

export interface Winner {
  name: string;
  avatarInitials: string;
  prize: string;
  wonOn: string;
  quote: string;
}

const defaultWinners: Winner[] = [
  {
    name: "Amelia R.",
    avatarInitials: "AR",
    prize: "Everyday Hoodie bundle + £500 store credit",
    wonOn: "12 Jul 2026",
    quote:
      "I genuinely didn't expect the call. The prize arrived within a week and the whole process felt completely legit.",
  },
  {
    name: "James O.",
    avatarInitials: "JO",
    prize: "Full Sellio store setup, 12 months free",
    wonOn: "28 Jun 2026",
    quote:
      "Entering took two minutes and the draw was streamed live. Couldn't believe it when my name came up.",
  },
  {
    name: "Priya K.",
    avatarInitials: "PK",
    prize: "£1,000 cash prize",
    wonOn: "03 Jun 2026",
    quote:
      "Clear rules, fast payout, no chasing anyone for my winnings. Already entered the next one.",
  },
];

export default function WinnersShowcase({
  winners = defaultWinners,
}: {
  winners?: Winner[];
}) {
  return (
    <section className="py-20 sm:py-28 border-t border-[#ECE6DE] bg-[#FEF9F5]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-4 max-w-2xl items-start text-left">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#FA5A45]">
            Winners
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#12172A]">
            Real winners. Real prizes.
          </h2>
          <p className="text-base sm:text-lg text-[#5B6472] leading-relaxed">
            Every draw is run in the open. Here&apos;s a snapshot of people who&apos;ve won recently.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {winners.map((winner, i) => (
            <article
              key={winner.name}
              className="rounded-2xl border border-[#ECE6DE] bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md hover:-translate-y-1 animate-fadeInUp"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="flex items-center gap-3">
                <div
                  aria-hidden
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#12172A] text-sm font-semibold text-white"
                >
                  {winner.avatarInitials}
                </div>
                <div>
                  <p className="font-medium text-[#12172A]">{winner.name}</p>
                  <p className="text-xs text-[#5B6472]">Won on {winner.wonOn}</p>
                </div>
              </div>

              <p className="mt-4 text-sm font-medium text-[#FA5A45]">
                {winner.prize}
              </p>

              <p className="mt-3 text-sm leading-relaxed text-[#5B6472]">
                &ldquo;{winner.quote}&rdquo;
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}