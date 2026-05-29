import { FormEvent, useState } from "react";
import type { PricingPlan } from "@/data/content";

type LeadFormProps = {
  plans: PricingPlan[];
  selectedPlan: PricingPlan | null;
  onSelectPlan: (plan: PricingPlan) => void;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const telegramPattern = /^(https?:\/\/)?t\.me\/[a-zA-Z0-9_]{5,}\/?$|^@[a-zA-Z0-9_]{5,}$/;

export function LeadForm({ plans, selectedPlan, onSelectPlan }: LeadFormProps) {
  const [email, setEmail] = useState("");
  const [channel, setChannel] = useState("");
  const [errors, setErrors] = useState<{ email?: string; channel?: string }>({});
  const [isSent, setIsSent] = useState(false);

  const selectedPlanLabel = selectedPlan
    ? `${selectedPlan.name} — ${selectedPlan.subscribers} за ${selectedPlan.price}`
    : "";

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: { email?: string; channel?: string } = {};
    if (!emailPattern.test(email)) {
      nextErrors.email = "Введите корректный email.";
    }
    if (!telegramPattern.test(channel.trim())) {
      nextErrors.channel = "Укажите ссылку вида https://t.me/channel, t.me/channel или @channelname.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setIsSent(true);
  };

  return (
    <section id="lead-form" className="container-shell py-16">
      <div className="premium-panel grid gap-10 rounded-lg p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
        <div>
          <p className="text-sm font-semibold uppercase text-telegram-700">Заявка</p>
          <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">Оставить заявку</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Укажите email и ссылку на Telegram-канал. Мы посмотрим канал и свяжемся с вами после проверки.
          </p>
          <div className="mt-6 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-sm font-semibold text-ink">
              {selectedPlan ? `Выбран тариф: ${selectedPlanLabel}` : "Выберите тариф"}
            </p>
            <div className="mt-3 grid gap-2 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {plans.map((plan) => {
                const isSelected = selectedPlan?.id === plan.id;
                return (
                  <button
                    key={plan.id}
                    type="button"
                    onClick={() => onSelectPlan(plan)}
                    className={`focus-ring rounded-lg border px-3 py-3 text-left transition ${
                      isSelected
                        ? "border-telegram-500 bg-telegram-50 text-telegram-700 ring-2 ring-telegram-100"
                        : "border-slate-200 bg-slate-50 text-slate-700 hover:border-telegram-200"
                    }`}
                  >
                    <span className="block text-sm font-semibold">{plan.name}</span>
                    <span className="mt-1 block text-xs">{plan.subscribers}</span>
                    <span className="mt-1 block text-sm font-semibold">{plan.price}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <form className="rounded-lg border border-slate-200 bg-slate-50/90 p-5 sm:p-6" onSubmit={handleSubmit} noValidate>
          <input type="hidden" name="plan" value={selectedPlanLabel} />
          {isSent ? (
            <div className="rounded-lg bg-white p-6 text-base font-semibold leading-7 text-emerald-700 ring-1 ring-emerald-100">
              Заявка отправлена. Мы свяжемся с вами после проверки канала
            </div>
          ) : null}

          <div className={isSent ? "pointer-events-none mt-5 opacity-60" : ""}>
            <label className="block text-sm font-semibold text-ink" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="focus-ring mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3.5 text-base text-ink shadow-sm"
              placeholder="you@example.com"
              disabled={isSent}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email ? (
              <p id="email-error" className="mt-2 text-sm text-red-600">
                {errors.email}
              </p>
            ) : null}

            <label className="mt-5 block text-sm font-semibold text-ink" htmlFor="channel">
              Ссылка на Telegram-канал
            </label>
            <input
              id="channel"
              name="channel"
              type="text"
              value={channel}
              onChange={(event) => setChannel(event.target.value)}
              className="focus-ring mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3.5 text-base text-ink shadow-sm"
              placeholder="https://t.me/channel"
              disabled={isSent}
              aria-invalid={Boolean(errors.channel)}
              aria-describedby={errors.channel ? "channel-error" : undefined}
            />
            {errors.channel ? (
              <p id="channel-error" className="mt-2 text-sm text-red-600">
                {errors.channel}
              </p>
            ) : null}

            <button
              className="focus-ring mt-7 w-full rounded-full bg-telegram-600 px-6 py-4 text-base font-semibold text-white shadow-card transition hover:bg-telegram-700 disabled:cursor-not-allowed disabled:opacity-60"
              type="submit"
              disabled={isSent}
            >
              Отправить заявку
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
