import { CheckIcon, TelegramLogo } from "./Icons";

type HeroProps = {
  onPrimaryClick: () => void;
  onPricingClick: () => void;
};

const badges = ["От 35 ₽ за подписчика", "Тестовый запуск — 500 ₽", "Постепенный прирост"];
const dashboardBadges = ["Живые люди", "Без ботов", "Постепенный прирост"];
const metrics = [
  { value: "+10", label: "тест" },
  { value: "+50", label: "старт" },
  { value: "+100", label: "рост" }
];

export function Hero({ onPrimaryClick, onPricingClick }: HeroProps) {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="container-shell grid gap-10 pb-16 pt-12 lg:grid-cols-[0.94fr_1.06fr] lg:items-center lg:pb-20 lg:pt-16">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-telegram-100 bg-white px-4 py-2 text-sm font-semibold text-telegram-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-telegram-500" />
            Живые подписчики в Telegram
          </p>

          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.04] text-ink sm:text-5xl lg:text-6xl">
            Подписчики Телеграм для вашего канала
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Запускаем рассылку-приглашение по большой базе пользователей. Люди сами переходят в канал и подписываются, если им интересна тема.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button className="btn-primary text-base" type="button" onClick={onPrimaryClick}>
              Заказать подписчиков
            </button>
            <button className="btn-secondary text-base" type="button" onClick={onPricingClick}>
              Посмотреть тарифы
            </button>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            {badges.map((badge) => (
              <span key={badge} className="pill">
                {badge}
              </span>
            ))}
          </div>
        </div>

        <button
          className="ui-card-soft focus-ring group block w-full cursor-pointer p-2.5 text-left transition hover:-translate-y-1 hover:shadow-soft sm:p-3"
          type="button"
          onClick={onPricingClick}
          aria-label="Перейти к тарифам"
        >
          <div className="rounded-[1.35rem] border border-slate-200 bg-gradient-to-br from-white via-white to-telegram-50/60 p-4 sm:p-5">
            <div className="flex flex-col gap-4 border-b border-slate-200/80 pb-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="grid h-[58px] w-[58px] place-items-center rounded-2xl bg-white shadow-[0_16px_34px_rgba(16,32,51,0.14)] ring-1 ring-slate-200">
                  <TelegramLogo className="h-11 w-11" />
                </div>
                <div>
                  <p className="text-base font-semibold text-ink">Telegram-канал</p>
                  <p className="mt-1 text-sm text-slate-500">Профиль готов к рассылке-приглашению</p>
                </div>
              </div>
              <span className="inline-flex w-fit rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-100">
                Активно
              </span>
            </div>

            <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
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

              <div className="mt-6 flex h-16 items-end gap-2">
                {[34, 48, 42, 60, 74, 68, 82].map((height, index) => (
                  <div key={height + index} className="flex h-full flex-1 items-end rounded-t-lg bg-telegram-100/80">
                    <div className="w-full rounded-t-lg bg-telegram-500" style={{ height: `${height}%` }} />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div key={metric.value} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <p className="text-2xl font-semibold text-ink">{metric.value}</p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-400">{metric.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {dashboardBadges.map((badge) => (
                <div key={badge} className="flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-700 ring-1 ring-slate-200">
                  <CheckIcon className="h-4 w-4 text-telegram-600" />
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </button>
      </div>
    </section>
  );
}
