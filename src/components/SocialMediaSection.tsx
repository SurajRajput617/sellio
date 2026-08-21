import { ReactNode } from "react";

interface SocialLink {
  name: string;
  href: string;
  icon: ReactNode;
}

const IconWrap = ({ children }: { children: ReactNode }) => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="currentColor"
    aria-hidden="true"
  >
    {children}
  </svg>
);

const socialLinks: SocialLink[] = [
  {
    name: "Instagram",
    href: "https://instagram.com/",
    icon: (
      <IconWrap>
        <path d="M12 2.2c3.2 0 3.6 0 4.8.07 1.2.06 2 .25 2.7.53a5.4 5.4 0 0 1 2 1.3 5.4 5.4 0 0 1 1.3 2c.28.7.47 1.5.53 2.7.06 1.2.07 1.6.07 4.8s0 3.6-.07 4.8c-.06 1.2-.25 2-.53 2.7a5.4 5.4 0 0 1-1.3 2 5.4 5.4 0 0 1-2 1.3c-.7.28-1.5.47-2.7.53-1.2.06-1.6.07-4.8.07s-3.6 0-4.8-.07c-1.2-.06-2-.25-2.7-.53a5.4 5.4 0 0 1-2-1.3 5.4 5.4 0 0 1-1.3-2c-.28-.7-.47-1.5-.53-2.7C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.8c.06-1.2.25-2 .53-2.7a5.4 5.4 0 0 1 1.3-2 5.4 5.4 0 0 1 2-1.3c.7-.28 1.5-.47 2.7-.53C8.4 2.2 8.8 2.2 12 2.2z" />
      </IconWrap>
    ),
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/",
    icon: (
      <IconWrap>
        <path d="M18.9 2H22l-7.6 8.7L23 22h-6.9l-5.4-6.5L4.4 22H1.3l8.1-9.3L1 2h7l4.9 5.9L18.9 2z" />
      </IconWrap>
    ),
  },
  {
    name: "Facebook",
    href: "https://facebook.com/",
    icon: (
      <IconWrap>
        <path d="M13.5 22v-8.4h2.8l.4-3.3h-3.2V8.1c0-.95.26-1.6 1.63-1.6H17V3.5c-.29-.04-1.3-.13-2.46-.13-2.44 0-4.1 1.49-4.1 4.22v2.35H7.6v3.3h2.84V22h3.06z" />
      </IconWrap>
    ),
  },
  {
    name: "TikTok",
    href: "https://tiktok.com/",
    icon: (
      <IconWrap>
        <path d="M16.6 2h-3.2v13.4a2.9 2.9 0 1 1-2.1-2.8v-3.3a6.2 6.2 0 1 0 5.3 6.1V8.9a7.9 7.9 0 0 0 4.6 1.5V7.2c-1.6 0-3-.6-4-1.6a5 5 0 0 1-.6-3.6z" />
      </IconWrap>
    ),
  },
];

export default function SocialMediaSection() {
  return (
    <section className="border-t border-[#ECE6DE] bg-[#FEF9F5] py-16">
      <div className="mx-auto flex max-w-7xl px-6 lg:px-8 flex-col items-center justify-between gap-6 px-6 sm:flex-row">

        <div>
          <p className="text-sm font-semibold text-[#12172A]">
            Follow along for new drops and winner announcements.
          </p>

          <p className="text-sm text-[#5B6472]">
            We post every draw live across these channels.
          </p>
        </div>


        <div className="flex items-center gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#ECE6DE] text-[#12172A] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#FA5A45] hover:bg-[#FA5A45] hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}