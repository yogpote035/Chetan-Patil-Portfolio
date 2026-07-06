import { contact } from "../../data/socials.js";

export default function Footer() {
  const socials = [
    { label: "LinkedIn", href: contact.linkedin },
    { label: "Instagram", href: contact.instagram },
  ];

  return (
    <footer className="border-t border-white/20 px-6 py-7 sm:px-10">
      <div className="mx-auto flex max-w-[1360px] flex-col gap-5 text-sm tracking-[0.06em] text-white/90 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 chetan patil. all rights reserved.</p>
        <div className="flex gap-9">
          {socials.map((social) =>
            social.href ? (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-orange-300"
              >
                {social.label} ↗
              </a>
            ) : (
              <span key={social.label} className="text-white/90">
                {social.label} ↗
              </span>
            ),
          )}
        </div>
      </div>
    </footer>
  );
}
