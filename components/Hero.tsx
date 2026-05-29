type HeroProps = {
  onPrimaryClick: () => void;
  onPricingClick: () => void;
};

const badges = [
  "От 35 ₽ за подписчика",
  "Тестовый запуск — 500 ₽",
  "До 100 подписчиков в пакете"
];

export function Hero({ onPrimaryClick, onPricingClick }: HeroProps) {
  return (
    <section id="top" className="container-shell grid gap-10 pb-14 pt-10 lg:grid-cols-[0.96fr_1.04fr] lg:items-center lg:pb-20 lg:pt-16">
      <div>
        <p className="mb-6 inline-flex rounded-full border border-telegram-100 bg-white/86 px-4 py-2 text-sm font-semibold text-telegram-700 shadow-sm">
          Живые подписчики в телеграм канал через рассылку-приглашение
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold leading-[1.02] text-ink sm:text-5xl lg:text-[64px]">
          Подписчики Телеграм для вашего канала
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
          Запускаем рассылку-приглашение по большой базе пользователей. Люди сами переходят в канал и подписываются, если им интересна тема.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <button
            className="focus-ring rounded-full bg-telegram-600 px-7 py-4 text-base font-semibold text-white shadow-[0_18px_45px_rgba(34,158,217,0.28)] transition hover:bg-telegram-700"
            type="button"
            onClick={onPrimaryClick}
          >
            Заказать подписчиков
          </button>
          <button
            className="focus-ring rounded-full border border-slate-200 bg-white px-7 py-4 text-base font-semibold text-ink shadow-sm transition hover:border-telegram-200 hover:text-telegram-700"
            type="button"
            onClick={onPricingClick}
          >
            Посмотреть тарифы
          </button>
        </div>
        <div className="mt-7 flex flex-wrap gap-3">
          {badges.map((badge) => (
            <span key={badge} className="rounded-full border border-slate-200/80 bg-white/82 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
              {badge}
            </span>
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="absolute -left-5 top-9 hidden w-36 rounded-lg border border-slate-200 bg-white p-4 shadow-card lg:block">
          <p className="text-xs font-semibold uppercase text-slate-400">Отклик</p>
          <p className="mt-2 text-2xl font-semibold text-ink">68%</p>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-100">
            <div className="h-full w-[68%] rounded-full bg-telegram-500" />
          </div>
        </div>
        <div className="premium-panel rounded-lg p-3">
          <div className="rounded-lg border border-slate-200/80 bg-gradient-to-br from-white via-white to-telegram-50/70 p-5">
            <div className="flex items-center justify-between gap-4 border-b border-slate-200/80 pb-5">
              <div className="flex items-center gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-lg bg-telegram-600 text-white shadow-card">
                  <svg
                    aria-hidden="true"
                    className="h-7 w-7"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.9 5.4 4.7 14.3c-1.6.6-1.5 1.8-.3 2.2l6 1.9 2.3 7.1c.3.9.7 1.1 1.4 1.1.6 0 .9-.3 1.2-.6l2.8-2.8 5.9 4.4c1.1.6 1.8.3 2.1-1l3.7-17.6c.4-1.6-.6-2.3-1.9-1.6Z"
                      fill="currentColor"
                    />
                    <path
                      d="m11.4 18 13.8-8.7c.7-.4 1.3-.2.8.3L14.8 19.7l-.5 4.5-2.9-6.2Z"
                      fill="#EAF7FF"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-ink">Telegram-канал</p>
                  <p className="text-sm text-slate-500">Профиль прошёл первичную проверку</p>
                </div>
              </div>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-100">
                Активно
              </span>
            </div>

            <div className="mt-6 rounded-lg border border-slate-200 bg-white p-5 shadow-card">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-telegram-700">Рассылка-приглашение запущена</p>
                  <p className="mt-2 text-sm leading-6 text-slate-500">Показываем канал пользователям из большой базы.</p>
                </div>
                <div className="h-3 w-3 rounded-full bg-emerald-500 shadow-[0_0_0_8px_rgba(16,185,129,0.12)]" />
              </div>
              <div className="mt-6">
                <div className="flex items-center justify-between text-sm font-medium text-slate-600">
                  <span>Прогресс выполнения</span>
                  <span>68%</span>
                </div>
                <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-telegram-500 to-emerald-400" />
                </div>
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {["+10 подписчиков", "+50 подписчиков", "+100 подписчиков"].map((metric) => (
                <div key={metric} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                  <p className="text-lg font-semibold text-ink">{metric}</p>
                  <p className="mt-1 text-xs font-medium text-slate-500">пакет роста</p>
                </div>
              ))}
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {["Живые люди", "Постепенный прирост"].map((label) => (
                <div key={label} className="rounded-lg bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 ring-1 ring-slate-100">
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
