import { useState } from "react";
import type { PricingPlan } from "@/data/content";
import { CheckIcon } from "./Icons";

type PricingProps = {
  plans: PricingPlan[];
  selectedPlan: PricingPlan | null;
  onSelectPlan: (plan: PricingPlan) => void;
};

export function Pricing({ plans, selectedPlan, onSelectPlan }: PricingProps) {
  const [expandedPlan, setExpandedPlan] = useState<string | null>(null);

  return (
    <section id="pricing" className="section-pad pricing-section">
      <div className="container-shell">
        <div className="section-heading">
          <p className="section-kicker">Пакеты</p>
          <h2 className="section-title">Тарифы</h2>
          <p className="section-copy">Выберите пакет для теста или плавного роста Telegram-канала.</p>
        </div>
        <div className="pricing-grid">
          {plans.map((plan) => {
            const isFeatured = plan.id === "start";
            const isExpanded = expandedPlan === plan.id;
            return (
              <article key={plan.id} className={`pricing-card ${isFeatured ? "pricing-card-featured" : ""} ${selectedPlan?.id === plan.id ? "pricing-card-selected" : ""}`}>
                <div className="pricing-card-heading">
                  <div className="pricing-name">
                    <h3>{plan.name}</h3>
                    {plan.badge ? <span className={`pricing-badge ${isFeatured ? "pricing-badge-featured" : ""}`}>{plan.badge}</span> : null}
                  </div>
                  <p>{plan.price}</p>
                </div>
                <div className="pricing-facts">
                  <span><CheckIcon />{plan.subscribers}</span>
                  <span>{plan.period}</span>
                </div>
                <p id={`plan-description-${plan.id}`} className={`pricing-description ${isExpanded ? "is-open" : ""}`}>{plan.description}</p>
                <div className="pricing-actions">
                  <button
                    className="pricing-details-toggle focus-ring"
                    type="button"
                    aria-label={isExpanded ? `Скрыть описание тарифа ${plan.name}` : `Подробнее о тарифе ${plan.name}`}
                    aria-expanded={isExpanded}
                    aria-controls={`plan-description-${plan.id}`}
                    onClick={() => setExpandedPlan(isExpanded ? null : plan.id)}
                  >
                    {isExpanded ? "Скрыть" : "Подробнее"}<span aria-hidden="true">{isExpanded ? "−" : "+"}</span>
                  </button>
                  <button className={`${isFeatured ? "btn-primary" : "btn-secondary"} pricing-button`} aria-label={plan.buttonLabel} type="button" onClick={() => onSelectPlan(plan)}>
                    <span className="pricing-button-short">Заказать</span>
                    <span className="pricing-button-full">{plan.buttonLabel}</span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>
        <p className="pricing-note">
          Срок выполнения зависит от тематики канала, качества контента и интереса аудитории. Мы не используем ботов и не добавляем людей принудительно, поэтому прирост идёт постепенно.
        </p>
      </div>
    </section>
  );
}
