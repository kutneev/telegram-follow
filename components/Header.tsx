type HeaderProps = {
  onCtaClick: () => void;
};

const navItems = [
  { href: "#how-it-works", label: "Как работает" },
  { href: "#pricing", label: "Тарифы" },
  { href: "#faq", label: "FAQ" }
];

export function Header({ onCtaClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <div className="container-shell flex h-16 items-center justify-between gap-4">
        <a href="#top" className="shrink-0 text-base font-semibold text-ink">
          Подписчики Телеграм
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-slate-200 bg-white p-1 text-sm font-medium text-slate-600 shadow-sm md:flex">
          {navItems.map((item) => (
            <a key={item.href} className="rounded-full px-4 py-2 transition hover:bg-slate-50 hover:text-telegram-700" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <button className="btn-primary px-5 py-2.5" type="button" onClick={onCtaClick}>
          Оставить заявку
        </button>
      </div>
    </header>
  );
}
