import type { PricingPlan } from "@/data/content";

type PricingProps = {
  plans: PricingPlan[];
  selectedPlan: PricingPlan | null;
  onSelectPlan: (plan: PricingPlan) => void;
};

export function Pricing({ plans, selectedPlan, onSelectPlan }: PricingProps) {
  return (
    <section id="pricing" className="bg-white py-16">
      <div className="container-shell">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase text-telegram-700">Пакеты</p>
          <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">Тарифы</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Выберите пакет для теста или плавного роста Telegram-канала.
          </p>
        </div>

        <div className="mt-8 grid gap-3 lg:grid-cols-3">
          {plans.map((plan) => {
            const isSelected = selectedPlan?.id === plan.id;
            return (
              <article
                key={plan.id}
                className={`relative rounded-lg border bg-white p-5 shadow-card transition hover:-translate-y-1 ${
                  isSelected ? "border-telegram-500 ring-4 ring-telegram-100" : "border-slate-200"
                } ${plan.id === "start" ? "bg-gradient-to-b from-white to-telegram-50/60" : ""}`}
              >
                <div
                  className={`mb-4 h-1.5 w-14 rounded-full ${
                    plan.id === "start" ? "bg-telegram-600" : "bg-slate-200"
                  }`}
                />
                {plan.badge ? (
                  <span className={`absolute right-5 top-5 rounded-full px-3 py-1 text-xs font-semibold ring-1 ${
                    plan.id === "start" ? "bg-ink text-white ring-ink" : "bg-telegram-50 text-telegram-700 ring-telegram-100"
                  }`}>
                    {plan.badge}
                  </span>
                ) : null}
                <div className="flex items-end justify-between gap-4">
                  <h3 className="text-2xl font-semibold text-ink">{plan.name}</h3>
                  <p className="text-3xl font-semibold text-ink">{plan.price}</p>
                </div>
                <div className="mt-4 grid gap-2 text-sm font-medium text-slate-700 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  <p className="rounded-lg bg-slate-50 px-3 py-2 ring-1 ring-slate-100">{plan.subscribers}</p>
                  <p className="rounded-lg bg-slate-50 px-3 py-2 ring-1 ring-slate-100">{plan.period}</p>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-600">{plan.description}</p>
                <button
                  className={`focus-ring mt-4 w-full rounded-full px-5 py-3 text-sm font-semibold transition ${
                    plan.id === "start"
                      ? "bg-telegram-600 text-white shadow-[0_16px_38px_rgba(34,158,217,0.24)] hover:bg-telegram-700"
                      : "border border-slate-200 bg-white text-ink hover:border-telegram-200 hover:text-telegram-700"
                }`}
                  type="button"
                  onClick={() => onSelectPlan(plan)}
                >
                  {plan.buttonLabel}
                </button>
              </article>
            );
          })}
        </div>

        <p className="mx-auto mt-6 max-w-4xl rounded-lg border border-slate-200 bg-slate-50 px-5 py-4 text-center text-sm leading-6 text-slate-600">
          Срок выполнения зависит от тематики канала, качества контента и интереса аудитории. Мы не используем ботов и не добавляем людей принудительно, поэтому прирост идёт постепенно.
        </p>
      </div>
    </section>
  );
}
