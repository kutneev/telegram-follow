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
    <header className="site-header">
      <div className="container-shell header-inner">
        <a href="#top" className="header-title">
          Подписчики Телеграм
        </a>

        <nav className="header-nav" aria-label="Основная навигация">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <button className="btn-primary header-cta" type="button" onClick={onCtaClick}>
          <span className="sm:hidden">Заявка</span>
          <span className="hidden sm:inline">Оставить заявку</span>
        </button>
      </div>
    </header>
  );
}
