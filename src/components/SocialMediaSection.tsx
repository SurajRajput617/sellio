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
        {/* Instagram outer rounded square */}
        <path d="M7.75 2h8.5C19.42 2 22 4.58 22 7.75v8.5C22 19.42 19.42 22 16.25 22h-8.5C4.58 22 2 19.42 2 16.25v-8.5C2 4.58 4.58 2 7.75 2zm0 2C5.68 4 4 5.68 4 7.75v8.5C4 18.32 5.68 20 7.75 20h8.5C18.32 20 20 18.32 20 16.25v-8.5C20 5.68 18.32 4 16.25 4h-8.5z" />

        {/* Instagram center circle */}
        <path d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />

        {/* Instagram top-right dot */}
        <circle cx="17.25" cy="6.75" r="1.2" />
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
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 sm:flex-row lg:px-8">
        {/* Text */}
        <div>
          <p className="text-sm font-semibold text-[#12172A]">
            Follow along for new drops and winner announcements.
          </p>

          <p className="text-sm text-[#5B6472]">
            We post every draw live across these channels.
          </p>
        </div>

        {/* Social Icons */}
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