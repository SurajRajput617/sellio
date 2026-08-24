import Link from "next/link";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#how-it-works" },
      { label: "Dashboard", href: "#dashboard" },
      { label: "Pricing", href: "#pricing" },
      { label: "What's included", href: "#everything" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Academy", href: "#support" },
      { label: "Ecommerce guides", href: "#support" },
      { label: "SEO guides", href: "#support" },
      { label: "Support", href: "#support" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="container-xl py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2 font-display text-xl font-bold text-navy">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy text-coral">
                <span className="font-display text-sm font-bold">S</span>
              </span>
              Sellio
            </Link>
            <p className="mt-4 max-w-xs text-[15px] text-navy-mute">Sell online. Simply.</p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold uppercase tracking-wide text-navy-mute">{col.title}</h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-[15px] text-navy-mute transition-colors hover:text-navy">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <p className="text-sm text-navy-mute">© 2026 Sellio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
