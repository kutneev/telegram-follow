const items = [
  {
    accent: "01",
    title: "Только живые люди",
    text: "Мы не добавляем ботов и не используем автоматическую накрутку. Пользователь сам решает, подписываться на канал или нет."
  },
  {
    accent: "02",
    title: "Проверка перед запуском",
    text: "Перед стартом смотрим оформление, описание и последние посты, чтобы оценить готовность канала к рассылке."
  },
  {
    accent: "03",
    title: "Рассылка-приглашение",
    text: "Мы показываем приглашение подписаться на ваш канал по большой базе пользователей."
  },
  {
    accent: "04",
    title: "Постепенный прирост",
    text: "Подписчики приходят естественно. Скорость зависит от темы канала, попадания в аудиторию и качества контента."
  }
];

export function TrustBadges() {
  return (
    <section className="border-y border-slate-200/80 bg-white/92 py-14">
      <div className="container-shell grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <article key={item.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-card">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase text-slate-400">{item.accent}</span>
              <span className="h-px w-12 bg-telegram-200" />
            </div>
            <h2 className="text-xl font-semibold text-ink">{item.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
