const steps = [
  {
    title: "Вы оставляете заявку",
    text: "Указываете email и ссылку на Telegram-канал. Больше ничего заполнять не нужно."
  },
  {
    title: "Мы смотрим канал",
    text: "Проверяем тематику, оформление, описание и последние посты, чтобы понять, насколько канал готов к запуску."
  },
  {
    title: "Запускаем рассылку-приглашение",
    text: "Показываем ваш канал по большой базе пользователей."
  },
  {
    title: "Люди подписываются сами",
    text: "Мы не добавляем подписчиков автоматически. Человек сам решает, интересен ему канал или нет."
  },
  {
    title: "Вы получаете результат",
    text: "Подписчики приходят постепенно. Скорость зависит от попадания в аудиторию и качества контента."
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-pad">
      <div className="container-shell">
        <div className="max-w-2xl">
          <p className="section-kicker">Процесс</p>
          <h2 className="section-title">Как это работает</h2>
        </div>

        <div className="mt-9 grid auto-rows-fr gap-4 lg:grid-cols-5">
          {steps.map((step, index) => (
            <article key={step.title} className="ui-card relative h-full p-6">
              <div className="mb-5 flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-ink text-sm font-semibold text-white">{index + 1}</span>
                <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">шаг</span>
              </div>
              <h3 className="text-lg font-semibold leading-snug text-ink">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
