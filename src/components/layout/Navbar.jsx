const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Project", href: "#projects" },
];

export default function Navbar() {
  return (
    <nav
      className="fixed left-1/2 top-4 z-50 -translate-x-1/2 border-b border-white/35 bg-black/45 px-5 py-2.5 backdrop-blur-md sm:px-7"
      aria-label="Primary navigation"
    >
      <ul className="flex items-center gap-9 text-[13px] text-white sm:gap-16">
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              className="rounded-sm transition hover:text-orange-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300"
              href={item.href}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
