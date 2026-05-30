import type { FaqItem } from "@/data/content";

type FAQProps = {
  items: FaqItem[];
};

export function FAQ({ items }: FAQProps) {
  return (
    <section id="faq" className="section-pad bg-white">
      <div className="container-shell">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-kicker">FAQ</p>
          <h2 className="section-title">Вопросы и ответы</h2>
        </div>

        <div className="mx-auto mt-9 max-w-3xl divide-y divide-slate-200 rounded-3xl border border-slate-200 bg-white shadow-[0_18px_50px_rgba(16,32,51,0.06)]">
          {items.map((item) => (
            <details key={item.question} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-5 text-base font-semibold text-ink transition hover:bg-slate-50 sm:px-6">
                <span>{item.question}</span>
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-telegram-50 text-xl leading-none text-telegram-700 transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="px-5 pb-5 text-sm leading-7 text-slate-600 sm:px-6">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
