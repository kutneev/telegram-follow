import { FormEvent, useRef, useState } from "react";
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
  const planPicker = useRef<HTMLDetailsElement>(null);
  const planSummary = useRef<HTMLElement>(null);
  const emailInput = useRef<HTMLInputElement>(null);
  const channelInput = useRef<HTMLInputElement>(null);

  const selectedPlanLabel = selectedPlan
    ? `${selectedPlan.name} — ${selectedPlan.subscribers} за ${selectedPlan.price}`
    : "";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSent || isSubmitting) return;
    setSubmitError("");

    const nextErrors: { email?: string; channel?: string } = {};
    if (!emailPattern.test(email.trim())) {
      nextErrors.email = "Введите корректный email.";
    }
    if (!telegramPattern.test(channel.trim())) {
      nextErrors.channel = "Укажите ссылку вида https://t.me/channel, t.me/channel или @channelname.";
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      (nextErrors.email ? emailInput : channelInput).current?.focus();
      return;
    }

    setIsSubmitting(true);
    try {
      await fetch(leadEndpoint, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({
          email: email.trim(),
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

  const selectPlan = (plan: PricingPlan) => {
    onSelectPlan(plan);
    if (planPicker.current) planPicker.current.open = false;
    planSummary.current?.focus({ preventScroll: true });
  };

  return (
    <section id="lead-form" className="section-pad lead-section">
      <div className="container-shell lead-grid">
        <div className="lead-intro">
          <p className="section-kicker">Заявка</p>
          <h2 className="section-title">Оставить заявку</h2>
          <p className="section-copy">
            Укажите email и ссылку на Telegram-канал. Мы посмотрим канал и свяжемся с вами после проверки.
          </p>
        </div>

        <form className="lead-card" onSubmit={handleSubmit} noValidate>
          <input type="hidden" name="plan" value={selectedPlanLabel} />
          {isSent ? (
            <div className="lead-success" role="status" tabIndex={-1}>
              <span className="success-icon"><CheckIcon /></span>
              <p>Заявка отправлена. Мы свяжемся с вами после проверки канала</p>
            </div>
          ) : (
            <>
              <details className="plan-picker" ref={planPicker}>
                <summary ref={planSummary} className="focus-ring">
                  <span className="plan-summary-copy">
                    <span className="plan-summary-label">Выбранный тариф</span>
                    <strong>{selectedPlan ? `${selectedPlan.name} · ${selectedPlan.price}` : "Без выбора тарифа"}</strong>
                    {selectedPlan ? <span className="plan-summary-meta">{selectedPlan.subscribers} · {selectedPlan.period}</span> : null}
                  </span>
                  <span className="plan-change">{selectedPlan ? "Изменить" : "Выбрать"}<span aria-hidden="true">↓</span></span>
                </summary>
                <div className="plan-options" role="group" aria-label="Выберите тариф">
                  {plans.map((plan) => (
                    <button
                      key={plan.id}
                      type="button"
                      className="plan-option focus-ring"
                      aria-pressed={selectedPlan?.id === plan.id}
                      disabled={isSubmitting}
                      onClick={() => selectPlan(plan)}
                    >
                      <span className="plan-option-check"><CheckIcon /></span>
                      <span><strong>{plan.name}</strong><small>{plan.subscribers}</small></span>
                      <strong className="plan-option-price">{plan.price}</strong>
                    </button>
                  ))}
                </div>
              </details>

              <div className="lead-fields">
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    ref={emailInput}
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    inputMode="email"
                    autoCapitalize="none"
                    spellCheck={false}
                    enterKeyHint="next"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="form-input"
                    placeholder="you@example.com"
                    disabled={isSubmitting}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email ? <p id="email-error" className="field-error">{errors.email}</p> : null}
                </div>
                <div>
                  <label htmlFor="channel">Ссылка на Telegram-канал</label>
                  <input
                    ref={channelInput}
                    id="channel"
                    name="channel"
                    type="text"
                    autoComplete="off"
                    inputMode="url"
                    autoCapitalize="none"
                    spellCheck={false}
                    enterKeyHint="send"
                    value={channel}
                    onChange={(event) => setChannel(event.target.value)}
                    className="form-input"
                    placeholder="https://t.me/channel"
                    disabled={isSubmitting}
                    aria-invalid={Boolean(errors.channel)}
                    aria-describedby={errors.channel ? "channel-error" : undefined}
                  />
                  {errors.channel ? <p id="channel-error" className="field-error">{errors.channel}</p> : null}
                </div>
              </div>
              {submitError ? <p className="field-error" role="alert">{submitError}</p> : null}
              <button className="btn-primary lead-submit" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Отправляем..." : "Отправить заявку"}
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
