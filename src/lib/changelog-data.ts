export type ChangelogTag =
  | "Feature"
  | "Improvement"
  | "Dashboard"
  | "Pricing"
  | "Platform"
  | "Academy";

export interface ChangelogEntry {
  date: string;
  tags: ChangelogTag[];
  title: string;
  description: string;
}

export interface ChangelogMonth {
  month: string;
  slug: string;
  entries: ChangelogEntry[];
}

export const changelog: ChangelogMonth[] = [
  {
    month: "August 2026",
    slug: "aug-2026",
    entries: [
      {
        date: "Aug 18, 2026",
        tags: ["Dashboard", "Feature"],
        title: "Sellio Insights: plain-English answers, not just numbers",
        description:
          "Your dashboard now surfaces what changed and why, not just what happened. Insights this week might flag a dip in mobile conversion, show that one product drove over a fifth of sales, or point out customers buying one item but not the obvious companion product. Every insight is written in plain English, no analytics degree required.",
      },
      {
        date: "Aug 11, 2026",
        tags: ["Feature", "Pricing"],
        title: "Google Merchant Centre and Meta Pixel setup added to Grow",
        description:
          "Stores on the Grow plan now get Google Merchant Centre and Meta Pixel configured as part of onboarding, alongside advanced analytics and priority support. This closes the gap between launching a store and actually being visible in Google Shopping and Meta's ad platforms.",
      },
      {
        date: "Aug 4, 2026",
        tags: ["Dashboard", "Improvement"],
        title: "Best sellers now show real product photography",
        description:
          "The best-selling products panel pulls in your actual product images instead of placeholder icons, so you can recognise what's driving revenue at a glance rather than cross-referencing SKUs.",
      },
    ],
  },

  {
    month: "July 2026",
    slug: "jul-2026",
    entries: [
      {
        date: "Jul 21, 2026",
        tags: ["Platform", "Feature"],
        title: "Sellio Dashboard now available as a standalone Shopify app",
        description:
          "Existing Shopify merchants who aren't full Sellio clients can now install the Sellio Dashboard directly from the Shopify App Store, on its own subscription. Managed Sellio stores get the same dashboard included as part of their monthly plan.",
      },
      {
        date: "Jul 14, 2026",
        tags: ["Academy", "Improvement"],
        title: "Training Academy: new SEO and email marketing guides",
        description:
          "Two new short-lesson tracks landed in the Academy: writing product descriptions and meta descriptions that help with search, and building an email flow that actually gets opened. Both are aimed at owners with no prior marketing background.",
      },
      {
        date: "Jul 7, 2026",
        tags: ["Pricing"],
        title: "Launch, Grow and Scale packages published",
        description:
          "Sellio's three plans are now live: Launch at £99/month for new brands, Grow at £149/month as the recommended default with Google and Meta setup included, and Scale for larger catalogues with custom dashboards and account support. Shopify's own subscription is billed separately in every case.",
      },
    ],
  },

  {
    month: "June 2026",
    slug: "jun-2026",
    entries: [
      {
        date: "Jun 23, 2026",
        tags: ["Feature", "Improvement"],
        title: "Core email automations included on every plan",
        description:
          "Welcome, abandoned cart and post-purchase email flows are now configured automatically for every new store at launch, rather than being an optional add-on. Early data across pilot stores shows email consistently generating a meaningful share of monthly revenue with zero extra setup from the owner.",
      },
      {
        date: "Jun 16, 2026",
        tags: ["Platform", "Improvement"],
        title: "Standard onboarding checklist to protect the launch window",
        description:
          "New customers now follow one onboarding checklist covering logo and brand notes, product images, descriptions, pricing and stock, shipping and returns, domain access, and Google/Meta/social logins. Collecting everything upfront keeps builds inside the 1–2 week target once assets are received.",
      },
      {
        date: "Jun 2, 2026",
        tags: ["Platform", "Feature"],
        title: "Master Shopify theme framework finalised",
        description:
          "Rather than building every store from a blank canvas, Sellio now launches every new client from one trialled and tested Shopify theme: proven homepage sections, high-converting product pages, standard collection structure, and built-in trust, reviews and FAQ sections. Branding and products are applied on top, per customer.",
      },
    ],
  },

  {
    month: "May 2026",
    slug: "may-2026",
    entries: [
      {
        date: "May 19, 2026",
        tags: ["Platform"],
        title: "First clickable prototype shared for concept validation",
        description:
          "An early clickable version of the Sellio marketing site and dashboard went out for internal review, covering the core proposition, package structure and dashboard direction ahead of any production engineering spend.",
      },
      {
        date: "May 12, 2026",
        tags: ["Academy", "Improvement"],
        title: "Support and documentation site launched",
        description:
          "Guides for day-to-day store management, SEO basics and email marketing are now published in one place, so customers have somewhere to go between support conversations.",
      },
      {
        date: "May 5, 2026",
        tags: ["Dashboard", "Feature"],
        title: "Sellio dashboard MVP: revenue, orders, conversion and AOV",
        description:
          "The first version of the Sellio dashboard shipped with the four numbers every store owner asks for first: revenue, orders, conversion rate and average order value, all in one view instead of scattered across Shopify's native reports.",
      },
    ],
  },
];