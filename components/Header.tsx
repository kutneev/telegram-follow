type HeaderProps = {
  onCtaClick: () => void;
};

export function Header({ onCtaClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/82 backdrop-blur-xl">
      <div className="container-shell flex h-16 items-center justify-between gap-4">
        <a href="#top" className="text-base font-semibold text-ink">
          Подписчики Телеграм
        </a>
        <nav className="hidden items-center rounded-full border border-slate-200 bg-white/78 px-4 py-2 text-sm font-medium text-slate-600 shadow-sm md:flex md:gap-6">
          <a className="transition hover:text-telegram-700" href="#how-it-works">
            Как работает
          </a>
          <a className="transition hover:text-telegram-700" href="#pricing">
            Тарифы
          </a>
          <a className="transition hover:text-telegram-700" href="#faq">
            FAQ
          </a>
        </nav>
        <button
          className="focus-ring rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white shadow-card transition hover:bg-telegram-700"
          type="button"
          onClick={onCtaClick}
        >
          Оставить заявку
        </button>
      </div>
    </header>
  );
}
