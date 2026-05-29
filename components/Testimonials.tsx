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
    <section className="container-shell py-16">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase text-telegram-700">Отзывы</p>
        <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">Что отмечают клиенты</h2>
      </div>
      {/* Placeholder: заменить эти отзывы на реальные перед полноценным запуском. */}
      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article key={testimonial.name} className="rounded-lg border border-slate-200 bg-white p-7 shadow-sm">
            <div className="mb-6 text-3xl font-semibold text-telegram-200">“</div>
            <p className="text-base leading-7 text-slate-700">{testimonial.text}</p>
            <div className="mt-7 border-t border-slate-100 pt-5">
              <p className="font-semibold text-ink">{testimonial.name}</p>
              <p className="mt-1 text-sm text-slate-500">{testimonial.role}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
