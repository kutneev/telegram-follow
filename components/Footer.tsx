const links = [
  { href: "#how-it-works", label: "Как работает" },
  { href: "#pricing", label: "Тарифы" },
  { href: "#faq", label: "FAQ" },
  { href: "#lead-form", label: "Заявка" }
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="container-shell flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-ink">Подписчики Телеграм</p>
          <p className="mt-2 max-w-md text-sm leading-6 text-slate-600">
            Живые подписчики в Telegram-канал через рассылку-приглашение.
          </p>
          <a className="mt-3 inline-block text-sm font-medium text-telegram-700 hover:text-telegram-800" href="mailto:hello@example.com">
            hello@example.com
          </a>
        </div>

        <nav className="flex flex-wrap gap-2 text-sm font-medium text-slate-600">
          {links.map((link) => (
            <a key={link.href} className="rounded-full px-3 py-2 transition hover:bg-slate-50 hover:text-telegram-700" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
