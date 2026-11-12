import Image from "next/image";

const links = [
  { href: "#how-it-works", label: "Как работает" },
  { href: "#pricing", label: "Тарифы" },
  { href: "#faq", label: "FAQ" },
  { href: "#lead-form", label: "Заявка" }
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-7 md:py-8">
      <div className="container-shell flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <a href="#top" className="footer-brand"><Image src="/brand/logo.svg" alt="Подписчики Телеграм — на главную" width={520} height={144} className="site-brand-logo" /></a>
          <p className="mt-2 max-w-md text-sm leading-6 text-slate-600">
            Живые подписчики в Telegram-канал через рассылку-приглашение.
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Самозанятый Савкин Александр Игоревич<br />
            ИНН 027404221032
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            <a className="underline underline-offset-2" href="mailto:realbuzzmanager@yandex.ru">realbuzzmanager@yandex.ru</a><br />
            <a className="underline underline-offset-2" href="https://t.me/Savkin_1337">Telegram @Savkin_1337</a>
          </p>
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

