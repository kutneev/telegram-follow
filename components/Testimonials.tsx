const testimonials = [
  {
    name: "Анна",
    role: "Telegram-канал про карьеру",
    text: "Оставила ссылку, выбрала тестовый пакет и получила понятный результат без лишней настройки. Формат оказался спокойным и прозрачным."
  },
  {
    name: "Дмитрий",
    role: "Авторский канал",
    text: "Для меня было важно, чтобы подписчики приходили постепенно, а не резким скачком. Такой формат выглядит спокойнее и естественнее."
  },
  {
    name: "Мария",
    role: "Образовательный проект",
    text: "Перед запуском стало понятно, что многое зависит от самого канала: описания, последних постов и понятной пользы для читателя. Это помогло лучше подготовить канал."
  }
];

export function Testimonials() {
  return (
    <section className="section-pad">
      <div className="container-shell">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-kicker">Отзывы</p>
          <h2 className="section-title">Что отмечают клиенты</h2>
        </div>

        {/* Placeholder testimonials. Replace with real reviews before production launch. */}
        <div className="mt-9 grid auto-rows-fr gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="ui-card flex h-full flex-col p-6">
              <div className="text-4xl font-semibold leading-none text-telegram-200">“</div>
              <p className="mt-4 flex-1 text-base leading-7 text-slate-700">{testimonial.text}</p>
              <div className="mt-6 border-t border-slate-100 pt-5">
                <p className="font-semibold text-ink">{testimonial.name}</p>
                <p className="mt-1 text-sm text-slate-500">{testimonial.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
