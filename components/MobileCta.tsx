import { useEffect, useState } from "react";
import type { PricingPlan } from "@/data/content";

type MobileCtaProps = {
  plan: PricingPlan;
  onSelectPlan: (plan: PricingPlan) => void;
};

export function MobileCta({ plan, onSelectPlan }: MobileCtaProps) {
  const [pastHeroActions, setPastHeroActions] = useState(false);
  const [nearForm, setNearForm] = useState(false);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const actions = document.getElementById("hero-actions");
    const form = document.getElementById("lead-form");
    if (!actions || !form) return;

    const heroObserver = new IntersectionObserver(([entry]) => {
      setPastHeroActions(entry.boundingClientRect.bottom <= 64);
    }, { rootMargin: "-64px 0px 0px" });
    const formObserver = new IntersectionObserver(([entry]) => {
      setNearForm(entry.boundingClientRect.top <= window.innerHeight + 120);
    }, { rootMargin: "0px 0px 120px" });
    heroObserver.observe(actions);
    formObserver.observe(form);

    let frame = 0;
    const checkEditing = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const inputFocused = document.activeElement?.matches("input, textarea, select");
        const viewport = window.visualViewport;
        const keyboardOpen = viewport ? window.innerHeight - viewport.height > 150 : false;
        setEditing(Boolean(inputFocused || keyboardOpen));
      });
    };
    document.addEventListener("focusin", checkEditing);
    document.addEventListener("focusout", checkEditing);
    window.visualViewport?.addEventListener("resize", checkEditing);

    return () => {
      heroObserver.disconnect();
      formObserver.disconnect();
      cancelAnimationFrame(frame);
      document.removeEventListener("focusin", checkEditing);
      document.removeEventListener("focusout", checkEditing);
      window.visualViewport?.removeEventListener("resize", checkEditing);
    };
  }, []);

  if (!pastHeroActions || nearForm || editing) return null;

  return (
    <aside className="mobile-cta" aria-label="Быстрая заявка">
      <div><strong>{plan.name} · {plan.price}</strong><span>{plan.subscribers}</span></div>
      <button className="btn-primary" type="button" onClick={() => onSelectPlan(plan)}>Оставить заявку</button>
    </aside>
  );
}
