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

        <ol className="steps-list">
          {steps.map((step, index) => (
            <li key={step.title} className="step-item">
              <span className="step-number" aria-hidden="true">{index + 1}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
