import Image from "next/image";

export type SavedOrder = { requestId: string; amount: number; plan: string; provider?: "prodamus"; paymentUrl?: string; paymentStatus?: string };

export function PaymentDetails({ order }: { order: SavedOrder }) {
  return (
    <section className="order-payment" aria-label="Оплата заявки" data-clarity-mask="true">
      <h3>{order.paymentStatus === "Оплачено" ? "Заказ оплачен" : "Заявка сохранена — можно оплатить"}</h3>
      <dl className="order-summary">
        <div><dt>Номер заявки</dt><dd>{order.requestId}</dd></div>
        <div><dt>Пакет</dt><dd>{order.plan}</dd></div>
        <div><dt>К оплате</dt><dd className="order-amount">{order.amount.toLocaleString("ru-RU")} ₽</dd></div>
      </dl>
      {order.paymentStatus === "Оплачено" ? <p>Оплата получена.</p> : order.provider === "prodamus" ? (
        order.paymentUrl ? <>
          <p>Оплатите выбранный пакет. Сумма уже указана на странице оплаты.</p>
          <a className="payment-prodamus-button" href={order.paymentUrl}>Оплатить</a>
        </> : <p>Оплата временно недоступна. Попробуйте чуть позже или напишите на realbuzzmanager@yandex.ru.</p>
      ) : <>
      <p><span className="payment-instruction--desktop">Выберите банк, отсканируйте QR-код и введите сумму.</span><span className="payment-instruction--mobile">Выберите банк и введите сумму.</span></p>
      <div className="payment-banks">
        <article className="payment-bank">
          <h4>Сбер и Т-Банк</h4>
          <Image src="/payments/sber.png" width={600} height={600} alt="QR-код оплаты через Сбер" />
          <a href="https://www.sberbank.ru/ru/choise_bank?requisiteNumber=79174812644&amp;bankCode=100000000111" target="_blank" rel="noopener noreferrer">Оплатить</a>
          <small className="payment-help">Не открывается? Попробуйте Яндекс Браузер.</small>
          <small className="payment-help payment-help--desktop">QR-код можно сканировать в приложении банка.</small>
        </article>
        <article className="payment-bank">
          <h4>Альфа, Газпромбанк, ВТБ, МТС Банк, Совкомбанк</h4>
          <Image src="/payments/alfa.png" width={600} height={600} alt="QR-код оплаты через Альфа-Банк" />
          <a href="https://c2c.cbrpay.ru/BS1I000S80DJB659986O6F6FV53371EP" target="_blank" rel="noopener noreferrer">Оплатить</a>
        </article>
      </div>
      </>}
      {order.paymentStatus === "Оплачено" && <p className="payment-support">Есть вопросы по заказу? <a href="https://t.me/Savkin_1337" target="_blank" rel="noopener noreferrer">Напишите нам в Telegram</a>.</p>}
    </section>
  );
}
