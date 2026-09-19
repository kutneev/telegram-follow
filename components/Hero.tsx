import { CheckIcon, TelegramLogo } from "./Icons";

type HeroProps = {
  onPrimaryClick: () => void;
  onPricingClick: () => void;
};

const badges = ["От 35 ₽ за подписчика", "Тестовый запуск — 500 ₽", "Постепенный прирост"];
const dashboardBadges = ["Живые люди", "Без ботов", "Постепенный прирост"];
const metrics = [
  { value: "+10", label: "тест" },
  { value: "+50", label: "старт" },
  { value: "+100", label: "рост" }
];

export function Hero({ onPrimaryClick, onPricingClick }: HeroProps) {
  return (
    <section id="top" className="hero-section">
      <div className="container-shell hero-grid">
        <div className="hero-copy">
          <p className="hero-eyebrow"><span />Живые подписчики в Telegram</p>
          <h1>Подписчики Телеграм для вашего канала</h1>
          <p className="hero-description">
            Запускаем рассылку-приглашение по большой базе пользователей. Люди сами переходят в канал и подписываются, если им интересна тема.
          </p>
          <div id="hero-actions" className="hero-actions">
            <button className="btn-primary" type="button" onClick={onPrimaryClick}>
              Заказать подписчиков
            </button>
            <button className="text-action" type="button" onClick={onPricingClick}>
              Посмотреть тарифы <span aria-hidden="true">↓</span>
            </button>
          </div>
          <ul className="hero-conditions" aria-label="Условия запуска">
            {badges.map((badge) => <li key={badge}>{badge}</li>)}
          </ul>
        </div>

        <button className="hero-dashboard focus-ring" type="button" onClick={onPricingClick} aria-label="Перейти к тарифам">
          <div className="dashboard-header">
            <TelegramLogo className="dashboard-logo" />
            <div className="min-w-0">
              <p className="dashboard-title">Telegram-канал</p>
              <p className="dashboard-subtitle">Профиль готов к рассылке-приглашению</p>
            </div>
            <span className="dashboard-status">Активно</span>
          </div>
          <div className="dashboard-activity">
            <p className="dashboard-caption"><span />Рассылка-приглашение запущена</p>
            <p className="dashboard-description">Показываем канал пользователям из большой базы.</p>
            <div className="dashboard-progress-label"><span>Прогресс выполнения</span><strong>68%</strong></div>
            <div className="dashboard-progress"><span /></div>
            <div className="dashboard-chart" aria-hidden="true">
              {[24, 36, 32, 49, 63, 60, 76, 88, 100].map((height, index) => (
                <div key={index} style={{ height: `${height}%` }} />
              ))}
            </div>
          </div>
          <div className="dashboard-metrics">
            {metrics.map((metric) => (
              <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>
            ))}
          </div>
          <div className="dashboard-benefits">
            {dashboardBadges.map((badge) => (
              <span key={badge}><CheckIcon />{badge}</span>
            ))}
          </div>
        </button>
      </div>
    </section>
  );
}
