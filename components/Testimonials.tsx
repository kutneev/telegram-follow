const testimonials = [
  {
    name: "Анна",
    role: "Telegram-канал про карьеру",
    text: "Начала с теста 500 рублей. Хотелось затестить. Качество и скорость понравилась. Немного послежу и закажу ещё."
  },
  {
    name: "Дмитрий",
    role: "Авторский канал",
    text: "Заказал и продолжал писать в канал. Новые подписчики реагировали на мой контент. В телеграме сейчас сложно привлекать, поэтому пробую разное и пока этот способ норм."
  },
  {
    name: "Мария",
    role: "Образовательный проект",
    text: "Заказала, но поняла, что у меня нет закрепа и непонятно про что канал. Пришлось быстро править. Было бы хорошо предупреждать об этом. А так, всё супер, спасибо!"
  }
];

export function Testimonials() {
  return (
    <section className="section-pad">
      <div className="container-shell">
        <div className="section-heading">
          <p className="section-kicker">Опыт клиентов</p>
          <h2 className="section-title">Отзывы</h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="testimonial-card">
              <blockquote>{testimonial.text}</blockquote>
              <div className="testimonial-author">
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
