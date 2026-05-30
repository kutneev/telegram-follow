import { FormEvent, useState } from "react";
import type { PricingPlan } from "@/data/content";
import { CheckIcon } from "./Icons";

type LeadFormProps = {
  plans: PricingPlan[];
  selectedPlan: PricingPlan | null;
  onSelectPlan: (plan: PricingPlan) => void;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const telegramPattern = /^(https?:\/\/)?t\.me\/[a-zA-Z0-9_]{5,}\/?$|^@[a-zA-Z0-9_]{5,}$/;
const leadEndpoint =
  "https://script.google.com/macros/s/AKfycby2bRUuVzYXiMHYHQPX20AZ6v0iKcQHUeRY4ejFoo-LzDhIGlk34IUS9SBRBnPNbH_k/exec";

export function LeadForm({ plans, selectedPlan, onSelectPlan }: LeadFormProps) {
  const [email, setEmail] = useState("");
  const [channel, setChannel] = useState("");
  const [errors, setErrors] = useState<{ email?: string; channel?: string }>({});
  const [isSent, setIsSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const selectedPlanLabel = selectedPlan
    ? `${selectedPlan.name} — ${selectedPlan.subscribers} за ${selectedPlan.price}`
    : "";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError("");

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

    setIsSubmitting(true);

    try {
      await fetch(leadEndpoint, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({
          email,
          channel: channel.trim(),
          plan: selectedPlanLabel,
          source: "telegram-follow"
        })
      });

      setIsSent(true);
    } catch {
      setSubmitError("Не удалось отправить заявку. Попробуйте ещё раз.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="lead-form" className="section-pad">
      <div className="container-shell">
        <div className="ui-card-soft grid gap-8 p-5 sm:p-7 lg:grid-cols-[0.92fr_1.08fr] lg:p-8">
          <div className="flex flex-col justify-between gap-8 rounded-[1.35rem] bg-ink p-6 text-white sm:p-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-telegram-100">Заявка</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">Оставить заявку</h2>
              <p className="mt-5 text-base leading-7 text-slate-200">
                Укажите email и ссылку на Telegram-канал. Мы посмотрим канал и свяжемся с вами после проверки.
              </p>
            </div>

            <div className="rounded-3xl bg-white/10 p-4 ring-1 ring-white/10">
              <p className="text-sm font-semibold text-white">
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
                      className={`focus-ring rounded-2xl border px-3 py-3 text-left transition ${
                        isSelected
                          ? "border-telegram-300 bg-telegram-500 text-white"
                          : "border-white/10 bg-white/10 text-slate-200 hover:border-telegram-200"
                      }`}
                    >
                      <span className="block text-sm font-semibold">{plan.name}</span>
                      <span className="mt-1 block text-xs opacity-80">{plan.subscribers}</span>
                      <span className="mt-1 block text-sm font-semibold">{plan.price}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <form className="rounded-[1.35rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-6" onSubmit={handleSubmit} noValidate>
            <input type="hidden" name="plan" value={selectedPlanLabel} />

            {isSent ? (
              <div className="mb-5 flex gap-3 rounded-2xl bg-emerald-50 p-4 text-sm font-semibold leading-6 text-emerald-700 ring-1 ring-emerald-100">
                <CheckIcon className="mt-0.5 h-5 w-5 shrink-0" />
                Заявка отправлена. Мы свяжемся с вами после проверки канала
              </div>
            ) : null}

            {submitError ? (
              <div className="mb-5 rounded-2xl bg-red-50 p-4 text-sm font-semibold leading-6 text-red-700 ring-1 ring-red-100">
                {submitError}
              </div>
            ) : null}

            <div className={isSent ? "pointer-events-none opacity-60" : ""}>
              <label className="block text-sm font-semibold text-ink" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="form-input"
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
                className="form-input"
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

              <button className="btn-primary mt-7 w-full py-4 text-base disabled:cursor-not-allowed disabled:opacity-60" type="submit" disabled={isSent || isSubmitting}>
                {isSubmitting ? "Отправляем..." : "Отправить заявку"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
