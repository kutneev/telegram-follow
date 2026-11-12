import { FormEvent, useRef, useState } from "react";
import type { PricingPlan } from "@/data/content";
import { CheckIcon } from "./Icons";

type LeadFormProps = {
  plans: PricingPlan[];
  selectedPlan: PricingPlan | null;
  onSelectPlan: (plan: PricingPlan) => void;
};

const telegramPattern = /^(https?:\/\/)?t\.me\/[a-zA-Z0-9_]{5,}\/?$|^@[a-zA-Z0-9_]{5,}$/;
const leadEndpoint =
  "https://script.google.com/macros/s/AKfycby2bRUuVzYXiMHYHQPX20AZ6v0iKcQHUeRY4ejFoo-LzDhIGlk34IUS9SBRBnPNbH_k/exec";

export function LeadForm({ plans, selectedPlan, onSelectPlan }: LeadFormProps) {
  const [contact, setContact] = useState("");
  const [channel, setChannel] = useState("");
  const [errors, setErrors] = useState<{ contact?: string; channel?: string }>({});
  const [isSent, setIsSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const planPicker = useRef<HTMLDetailsElement>(null);
  const planSummary = useRef<HTMLElement>(null);
  const contactInput = useRef<HTMLInputElement>(null);
  const channelInput = useRef<HTMLInputElement>(null);

  const selectedPlanLabel = selectedPlan
    ? `${selectedPlan.name} — ${selectedPlan.subscribers} за ${selectedPlan.price}`
    : "";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSent || isSubmitting) return;
    setSubmitError("");

    const nextErrors: { contact?: string; channel?: string } = {};
    if (!contact.trim()) {
      nextErrors.contact = "Укажите ваши контакты.";
    }
    if (!telegramPattern.test(channel.trim())) {
      nextErrors.channel = "Укажите ссылку вида https://t.me/channel, t.me/channel или @channelname.";
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      (nextErrors.contact ? contactInput : channelInput).current?.focus();
      return;
    }

    setIsSubmitting(true);
    try {
      await fetch(leadEndpoint, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({
          email: contact.trim(),
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
            Укажите ваши контакты и ссылку на Telegram-канал. Отвечаем в дневное время в течение нескольких часов. Оплатить заказ можно после того, как мы свяжемся с вами.
          </p>
        </div>

        <form className="lead-card ym-disable-submit" onSubmit={handleSubmit} noValidate>
          <input type="hidden" name="plan" value={selectedPlanLabel} />
          {isSent ? (
            <div className="lead-success" role="status" tabIndex={-1}>
              <span className="success-icon"><CheckIcon /></span>
              <p>Заявка отправлена. Отвечаем в дневное время в течение нескольких часов. Свяжемся с вами по указанному контакту. Оплатить заказ можно после того, как мы свяжемся с вами.</p>
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
                  <label htmlFor="contact">Ваши контакты</label>
                  <input
                    ref={contactInput}
                    id="contact"
                    name="email"
                    type="text"
                    autoComplete="off"
                    inputMode="text"
                    autoCapitalize="none"
                    spellCheck={false}
                    enterKeyHint="next"
                    value={contact}
                    onChange={(event) => setContact(event.target.value)}
                    className="form-input ym-disable-keys"
                    placeholder="Ваш @username в Telegram"
                    disabled={isSubmitting}
                    aria-invalid={Boolean(errors.contact)}
                    aria-describedby={errors.contact ? "contact-error" : undefined}
                  />
                  {errors.contact ? <p id="contact-error" className="field-error">{errors.contact}</p> : null}
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
                    className="form-input ym-disable-keys"
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
          <p className="mt-4 text-sm leading-6 text-slate-600">Данные заявки нужны для связи и обсуждения заказа. <a className="underline" href="/privacy/">Политика обработки данных</a>. Условия заказа описаны в <a className="underline" href="/offer/">оферте</a>.</p>
        </form>
      </div>
    </section>
  );
}
