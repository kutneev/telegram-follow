import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Публичная оферта — Подписчики Телеграм",
  description: "Условия заказа, оплаты и оказания услуг по привлечению подписчиков. Самозанятый Савкин Александр Игоревич, Уфа.",
  alternates: { canonical: "https://xn----8sbicgasaatoponcziw4g.xn--p1ai/offer/" }
};

export default function LegalPage() {
  return (
    <div className="container-shell max-w-3xl py-8 md:py-12">
      <Link href="/" aria-label="Подписчики Телеграм — на главную"><Image src="/brand/logo.svg" alt="Подписчики Телеграм" width={260} height={72} /></Link>
      <main>
        <h1 className="mt-6 text-3xl font-semibold leading-tight md:text-4xl">Публичная оферта</h1>
        <p className="mt-3 text-sm text-slate-500">Редакция от 12 ноября 2026 года</p>
        <section className="mt-7">
          <h2 className="text-xl font-semibold">Исполнитель и стороны договора</h2>
          <p className="mt-3 leading-7 text-slate-600">Самозанятый Савкин Александр Игоревич, ИНН 027404221032, город Уфа, предлагает заключить договор оказания услуг на условиях этой оферты. Заказчик — лицо, согласовавшее заказ с исполнителем и оплатившее его.</p>
          <p className="mt-3 leading-7 text-slate-600">Контактная почта исполнителя — <a className="underline underline-offset-2 break-words" href="mailto:realbuzzmanager@yandex.ru">realbuzzmanager@yandex.ru</a>. Для общения также доступен <a className="underline underline-offset-2 break-words" href="https://t.me/Savkin_1337">Telegram @Savkin_1337</a>.</p>
        </section>
        <section className="mt-7">
          <h2 className="text-xl font-semibold">Предмет договора</h2>
          <p className="mt-3 leading-7 text-slate-600">Исполнитель оказывает услуги по привлечению живых подписчиков через приглашения на площадку, указанную в заказе. Площадка, ссылка, объём, стоимость и срок выполнения определяются выбранным пакетом и согласованными до оплаты деталями заказа.</p>
          <p className="mt-3 leading-7 text-slate-600">На сайте «Подписчики Телеграм» представлены услуги для Telegram-каналов. На Realbuzz представлены услуги для Telegram, MAX, ВКонтакте и Instagram.</p>
        </section>
        <section className="mt-7">
          <h2 className="text-xl font-semibold">Порядок оформления заказа</h2>
          <p className="mt-3 leading-7 text-slate-600">Заказчик выбирает пакет и направляет контакт для связи и ссылку на канал, сообщество или аккаунт через форму сайта либо по контактам исполнителя. Отвечаем в дневное время в течение нескольких часов.</p>
          <p className="mt-3 leading-7 text-slate-600">До оплаты стороны согласовывают в переписке площадку и ссылку, пакет, цену, дату запуска и срок выполнения. Если предлагаются индивидуальные условия, они также согласовываются до оплаты.</p>
          <p className="mt-3 leading-7 text-slate-600">Отправка заявки сама по себе не обязывает заказчика оплачивать услуги. Договор заключается после согласования заказа и поступления оплаты. Оплата согласованного заказа означает принятие условий этой оферты.</p>
        </section>
        <section className="mt-7">
          <h2 className="text-xl font-semibold">Цена и оплата</h2>
          <p className="mt-3 leading-7 text-slate-600">Стандартные пакеты — 10 подписчиков за 500 ₽, 50 подписчиков за 2 000 ₽ и 100 подписчиков за 3 500 ₽. Цена указывается в рублях. Индивидуальная цена требует отдельного согласования до оплаты.</p>
          <p className="mt-3 leading-7 text-slate-600">Оплатить заказ можно после того, как мы свяжемся с вами. Способ и реквизиты оплаты сообщаем при согласовании заказа. Исполнитель предоставляет чек в порядке, предусмотренном для плательщиков налога на профессиональный доход.</p>
        </section>
        <section className="mt-7">
          <h2 className="text-xl font-semibold">Оказание услуги и сроки</h2>
          <p className="mt-3 leading-7 text-slate-600">Сроки стандартных пакетов — до 3 дней для 10 подписчиков, до 1 недели для 50 подписчиков и до 2 недель для 100 подписчиков. Дата запуска и срок конкретного заказа фиксируются в переписке до оплаты.</p>
          <p className="mt-3 leading-7 text-slate-600">Исполнитель выполняет согласованный заказ и сообщает о результате по предоставленному контакту. Заказчик предоставляет корректные контактные данные и ссылку на площадку, а также сообщает об их изменении. Изменение согласованного срока требует согласия заказчика.</p>
        </section>
        <section className="mt-7">
          <h2 className="text-xl font-semibold">Отмена и возврат</h2>
          <p className="mt-3 leading-7 text-slate-600">При отмене оплаченного заказа до запуска работы возвращаем всю сумму оплаты.</p>
          <p className="mt-3 leading-7 text-slate-600">При отмене по инициативе заказчика после частичного выполнения возвращаем оплату за невыполненную часть. Сумма рассчитывается по цене выбранного пакета, без пересчёта выполненной части по более дорогому тарифу. Например, если из пакета на 100 подписчиков за 3 500 ₽ выполнено 20, возвращаем 2 800 ₽.</p>
          <p className="mt-3 leading-7 text-slate-600">Если исполнитель нарушил согласованный срок, заказчик может согласовать новый срок либо отменить заказ с полным возвратом оплаты.</p>
          <p className="mt-3 leading-7 text-slate-600">Для отмены и возврата напишите на <a className="underline underline-offset-2 break-words" href="mailto:realbuzzmanager@yandex.ru">realbuzzmanager@yandex.ru</a>, укажите дату оплаты, площадку, пакет и ваше требование. Номер заказа или подтверждение оплаты можно приложить при наличии. Возврат проводится тем же способом, которым был оплачен заказ, если иной порядок не согласован с заказчиком и допускается правилами платёжного сервиса. Обращения и возвраты обрабатываются в сроки, установленные законодательством РФ.</p>
        </section>
        <section className="mt-7">
          <h2 className="text-xl font-semibold">Обращения и права заказчика</h2>
          <p className="mt-3 leading-7 text-slate-600">По вопросам выполнения заказа и претензиям можно обратиться на <a className="underline underline-offset-2 break-words" href="mailto:realbuzzmanager@yandex.ru">realbuzzmanager@yandex.ru</a>. Эти условия не ограничивают предусмотренные законодательством РФ права заказчика, включая требования при нарушении сроков или недостатках услуги.</p>
          <p className="mt-3 leading-7 text-slate-600">Применяется законодательство РФ. Новая редакция оферты применяется к заказам, оплаченным после её публикации. Условия уже заключённого договора изменяются по соглашению сторон или на предусмотренных законом основаниях.</p>
        </section>
        <section className="mt-7">
          <h2 className="text-xl font-semibold">Персональные данные</h2>
          <p className="mt-3 leading-7 text-slate-600">Порядок обработки данных, направленных при обращении и заказе, описан в политике обработки персональных данных. Согласие на необязательную аналитику сайта запрашивается отдельно от принятия этой оферты.</p>
        </section>
      </main>
      <footer className="mt-10 space-y-3 border-t border-slate-200 pt-5 text-sm text-slate-600">
        <p><a className="underline" href="/offer/">Публичная оферта</a> · <a className="underline" href="/privacy/">Политика обработки данных</a> · <a className="underline" href="/returns/">Отмена и возврат</a></p>
        <p><a className="underline" href="#analytics-settings" data-analytics-settings="true">Настройки аналитики</a></p>
        <p><Link className="underline" href="/">Вернуться на главную</Link></p>
      </footer>
    </div>
  );
}
