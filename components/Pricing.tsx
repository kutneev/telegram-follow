import type { PricingPlan } from "@/data/content";
import { CheckIcon } from "./Icons";

type PricingProps = {
  plans: PricingPlan[];
  selectedPlan: PricingPlan | null;
  onSelectPlan: (plan: PricingPlan) => void;
};

export function Pricing({ plans, selectedPlan, onSelectPlan }: PricingProps) {
  return (
    <section id="pricing" className="section-pad bg-white">
      <div className="container-shell">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-kicker">Пакеты</p>
          <h2 className="section-title">Тарифы</h2>
          <p className="section-copy">Выберите пакет для теста или плавного роста Telegram-канала.</p>
        </div>

        <div className="mt-10 grid auto-rows-fr items-stretch gap-5 lg:grid-cols-3">
          {plans.map((plan) => {
            const isSelected = selectedPlan?.id === plan.id;
            const isFeatured = plan.id === "start";

            return (
              <article
                key={plan.id}
                className={`ui-card relative flex h-full flex-col p-5 transition hover:-translate-y-1 hover:shadow-soft sm:p-6 lg:min-h-[420px] ${
                  isFeatured ? "border-telegram-200 bg-gradient-to-b from-white to-telegram-50/70 shadow-soft" : ""
                } ${isSelected ? "ring-4 ring-telegram-100" : ""}`}
              >
                {plan.badge ? (
                  <span className={`absolute right-5 top-5 rounded-full px-3 py-1 text-xs font-semibold ${
                    isFeatured ? "bg-ink text-white" : "bg-telegram-50 text-telegram-700 ring-1 ring-telegram-100"
                  }`}>
                    {plan.badge}
                  </span>
                ) : null}

                <div className={`h-1.5 w-14 rounded-full ${isFeatured ? "bg-telegram-600" : "bg-slate-200"}`} />
                <div className="mt-6 rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-100">
                  <h3 className="text-2xl font-semibold text-ink">{plan.name}</h3>
                  <p className="mt-3 text-4xl font-semibold tracking-tight text-ink">{plan.price}</p>
                </div>

                <div className="mt-5 grid gap-2 text-sm font-medium text-slate-700">
                  {[plan.subscribers, plan.period].map((item) => (
                    <div key={item} className="flex items-center gap-2 rounded-2xl bg-slate-50 px-3 py-2 ring-1 ring-slate-100">
                      <CheckIcon className="h-4 w-4 text-telegram-600" />
                      {item}
                    </div>
                  ))}
                </div>

                <p className="mt-5 flex-1 text-sm leading-6 text-slate-600">{plan.description}</p>

                <button
                  className={`${isFeatured ? "btn-primary" : "btn-secondary"} mt-6 w-full py-3`}
                  type="button"
                  onClick={() => onSelectPlan(plan)}
                >
                  {plan.buttonLabel}
                </button>
              </article>
            );
          })}
        </div>

        <p className="mx-auto mt-6 max-w-4xl rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-center text-sm leading-6 text-slate-600">
          Срок выполнения зависит от тематики канала, качества контента и интереса аудитории. Мы не используем ботов и не добавляем людей принудительно, поэтому прирост идёт постепенно.
        </p>
      </div>
    </section>
  );
}
