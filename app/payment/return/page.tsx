import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Ваш заказ — Подписчики Телеграм",
  robots: { index: false, follow: false },
  referrer: "no-referrer"
};

export default function PaymentReturn() {
  return (
    <main className="payment-return-page">
      <link rel="stylesheet" href="/payment-return.css" />
      <div className="payment-return-shell">
        <a className="payment-return-brand" href="/">Подписчики Телеграм</a>
        <section className="payment-return-card" data-payment-return="" data-prefix="TG" data-clarity-mask="true">
          <div role="status" aria-live="polite">
            <h1 data-heading="">Проверяем ваш заказ</h1>
            <p data-message="">Если вы уже оплатили заказ, повторно платить не нужно.</p>
          </div>
          <p data-reference="" />
          <dl className="payment-return-summary" data-summary="" hidden>
            <div><dt>Номер заказа</dt><dd data-order-id="" /></div>
            <div><dt>Пакет</dt><dd data-plan="" /></div>
            <div><dt data-amount-label="">Сумма заказа</dt><dd data-amount="" /></div>
          </dl>
          <button type="button" data-refresh="" hidden>Проверить статус</button>
          <p data-unpaid-support="">По вопросам оплаты: <a href="mailto:realbuzzmanager@yandex.ru">realbuzzmanager@yandex.ru</a>.</p>
          <p data-paid-support="" hidden>Есть вопросы по заказу? <a href="https://t.me/Savkin_1337" rel="noopener noreferrer" target="_blank">Напишите нам в Telegram</a>.</p>
          <a className="payment-return-home" href="/">На главную</a>
          <noscript><p>Для автоматической проверки включите JavaScript. Если вы уже оплатили заказ, повторно платить не нужно.</p></noscript>
        </section>
      </div>
      <Script src="/payment-return.js" strategy="afterInteractive" />
    </main>
  );
}
