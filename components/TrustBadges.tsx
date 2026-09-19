import { SendIcon, ShieldIcon, TrendIcon, UsersIcon } from "./Icons";

const items = [
  {
    title: "Только живые люди",
    text: "Мы не добавляем ботов и не используем автоматическую накрутку. Пользователь сам решает, подписываться на канал или нет.",
    icon: UsersIcon
  },
  {
    title: "Проверка перед запуском",
    text: "Перед стартом смотрим оформление, описание и последние посты, чтобы оценить готовность канала к рассылке.",
    icon: ShieldIcon
  },
  {
    title: "Рассылка-приглашение",
    text: "Мы показываем приглашение подписаться на ваш канал по большой базе пользователей.",
    icon: SendIcon
  },
  {
    title: "Постепенный прирост",
    text: "Подписчики приходят естественно. Скорость зависит от темы канала, попадания в аудиторию и качества контента.",
    icon: TrendIcon
  }
];

export function TrustBadges() {
  return (
    <section className="section-pad bg-white">
      <div className="container-shell">
        <div className="benefits-grid">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="benefit-item">
                <div className="icon-tile">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
