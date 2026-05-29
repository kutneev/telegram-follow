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
      <section className="container-shell py-16">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase text-telegram-700">Результат</p>
            <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">Что влияет на скорость и результат</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Мы работаем только с живыми людьми, поэтому подписчики не появляются мгновенно одной кнопкой.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-7 shadow-card">
            <p className="font-semibold text-ink">На результат влияет:</p>
            <ul className="mt-5 grid gap-3">
              {factors.map((factor) => (
                <li key={factor} className="flex gap-3 rounded-lg bg-slate-50 p-4 text-sm leading-6 text-slate-700 ring-1 ring-slate-100">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-telegram-500" />
                  <span>{factor}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-6 text-slate-600">
              Если канал хорошо оформлен и тема понятна, подписчики приходят быстрее. Если канал пустой, неясный или давно не обновлялся, результат может быть медленнее.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200/80 bg-gradient-to-b from-white via-telegram-50/60 to-white py-16">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase text-telegram-700">SEO и суть услуги</p>
            <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">Живые подписчики в Телеграм без ботов</h2>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-7 shadow-card">
            <p className="text-base leading-8 text-slate-600">
              Подписчики в Телеграм нужны не только для красивой цифры в описании канала. Они помогают создать первое социальное доказательство, протестировать интерес к теме и запустить дальнейшее продвижение. Но важно не просто купить подписчиков в Телеграм, а понимать, как именно они появляются.
            </p>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Мы запускаем рассылку-приглашение по большой базе пользователей. Человек видит канал, переходит в Telegram и подписывается только если ему интересна тема. Поэтому скорость выполнения зависит от качества канала, понятности описания, свежести постов и попадания в интерес аудитории.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
