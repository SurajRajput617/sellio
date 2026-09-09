import Link from "next/link";

const columns = [
  {
    title: "Overview",
    links: [
      { label: "Buy Your Domain", href: "/getting-started/buy-domain" },
      { label: "Add Your Domain to Sellio", href: "/getting-started/add-domain" },
      { label: "Creating Your Company", href: "/getting-started/create-company" },
      { label: "Adding Your Terms", href: "/getting-started/terms" },
      { label: "Payment Gateway", href: "/getting-started/payment-gateway" },
    ],
  },
  {
    title: "CUSTOMIZE YOUR SITE",
    links: [
      { label: "Add Your Logo", href: "/customize-your-site/add-logo" },
      { label: "Choose Site Colours", href: "/customize-your-site/site-colours" },
      { label: "Set Up Your Homepage", href: "/customize-your-site/homepage-setup" },
    ],
  },
  {
    title: "ESSENTIAL SETTINGS",
    links: [
      { label: "Connect Your Social Accounts", href: "/essential-settings/connect-social-accounts" },
      { label: "Email Setup", href: "/essential-settings/email-setup" },
      // { label: "Wallet & Withdrawals", href: "/essential-settings/wallet-withdrawals" },
      // { label: "Add Terms & Conditions", href: "/essential-settings/terms-conditions" },
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
