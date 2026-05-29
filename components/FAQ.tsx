import type { FaqItem } from "@/data/content";

type FAQProps = {
  items: FaqItem[];
};

export function FAQ({ items }: FAQProps) {
  return (
    <section id="faq" className="bg-white py-16">
      <div className="container-shell">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase text-telegram-700">FAQ</p>
          <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">Вопросы и ответы</h2>
        </div>
        <div className="mx-auto mt-8 max-w-3xl space-y-3">
          {items.map((item) => (
            <details key={item.question} className="group rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-ink">
                <span>{item.question}</span>
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-telegram-50 text-telegram-700 transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
