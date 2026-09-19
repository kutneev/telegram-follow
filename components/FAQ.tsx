import type { FaqItem } from "@/data/content";

type FAQProps = {
  items: FaqItem[];
};

export function FAQ({ items }: FAQProps) {
  return (
    <section id="faq" className="section-pad bg-white">
      <div className="container-shell">
        <div className="section-heading">
          <p className="section-kicker">FAQ</p>
          <h2 className="section-title">Вопросы и ответы</h2>
        </div>

        <div className="faq-list">
          {items.map((item) => (
            <details key={item.question} className="group">
              <summary className="focus-ring flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 py-3 text-base font-semibold text-ink transition hover:text-telegram-700">
                <span>{item.question}</span>
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-telegram-50 text-xl leading-none text-telegram-700 transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="pb-4 pr-8 text-sm leading-6 text-slate-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
