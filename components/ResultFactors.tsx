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
        <div className="container-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="section-kicker">Результат</p>
            <h2 className="section-title">Что влияет на скорость и результат</h2>
            <p className="section-copy">
              Мы работаем только с живыми людьми, поэтому подписчики не появляются мгновенно одной кнопкой.
            </p>
            <p className="mt-5 text-sm leading-6 text-slate-600">
              Если канал хорошо оформлен и тема понятна, подписчики приходят быстрее. Если канал пустой, неясный или давно не обновлялся, результат может быть медленнее.
            </p>
          </div>

          <div className="ui-card p-5 sm:p-6">
            <p className="text-base font-semibold text-ink">На результат влияет</p>
            <ul className="mt-5 grid gap-3">
              {factors.map((factor) => (
                <li key={factor} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-700 ring-1 ring-slate-100">
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
          <article className="ui-card mx-auto max-w-4xl p-6 sm:p-8 lg:p-10">
            <p className="section-kicker">SEO и суть услуги</p>
            <h2 className="section-title">Живые подписчики в Телеграм без ботов</h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
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
