export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/90 py-8">
      <div className="container-shell flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-ink">Подписчики Телеграм</p>
          <p className="mt-2 max-w-md text-sm leading-6 text-slate-600">
            Живые подписчики в Telegram-канал через рассылку-приглашение.
          </p>
          <a className="mt-3 inline-block text-sm font-medium text-telegram-700" href="mailto:hello@example.com">
            hello@example.com
          </a>
        </div>
        <nav className="flex flex-wrap gap-5 text-sm font-medium text-slate-600">
          <a className="hover:text-telegram-700" href="#how-it-works">
            Как работает
          </a>
          <a className="hover:text-telegram-700" href="#pricing">
            Тарифы
          </a>
          <a className="hover:text-telegram-700" href="#faq">
            FAQ
          </a>
          <a className="hover:text-telegram-700" href="#lead-form">
            Заявка
          </a>
        </nav>
      </div>
    </footer>
  );
}
