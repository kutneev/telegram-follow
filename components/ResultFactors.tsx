import { CheckIcon } from "./Icons";

const factors = [
  "насколько тема канала интересна аудитории",
  "понятно ли оформлено описание канала",
  "есть ли в канале свежие посты",
  "насколько быстро человек понимает, зачем ему подписываться",
  "попадает ли предложение в интересы аудитории"
];

export function ResultFactors() {
  return (
    <>
      <section className="section-pad">
        <div className="container-shell grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-8">
          <div>
            <p className="section-kicker">Результат</p>
            <h2 className="section-title">Что влияет на скорость и результат</h2>
            <p className="section-copy">
              Мы работаем только с живыми людьми, поэтому подписчики не появляются мгновенно одной кнопкой.
            </p>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Если канал хорошо оформлен и тема понятна, подписчики приходят быстрее. Если канал пустой, неясный или давно не обновлялся, результат может быть медленнее.
            </p>
          </div>

          <div className="result-checklist">
            <p className="text-base font-semibold text-ink">На результат влияет</p>
            <ul>
              {factors.map((factor) => (
                <li key={factor}>
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-telegram-50 text-telegram-700">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  <span>{factor}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-shell">
          <article className="editorial-content">
            <h2 className="section-title">Живые подписчики в Телеграм без ботов</h2>
            <div className="mt-4 space-y-3 text-base leading-relaxed text-slate-600">
              <p>
                Подписчики в Телеграм нужны не только для красивой цифры в описании канала. Они помогают создать первое социальное доказательство, протестировать интерес к теме и запустить дальнейшее продвижение. Но важно не просто купить подписчиков в Телеграм, а понимать, как именно они появляются.
              </p>
              <p>
                Мы запускаем рассылку-приглашение по большой базе пользователей. Человек видит канал, переходит в Telegram и подписывается только если ему интересна тема. Поэтому скорость выполнения зависит от качества канала, понятности описания, свежести постов и попадания в интерес аудитории.
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
