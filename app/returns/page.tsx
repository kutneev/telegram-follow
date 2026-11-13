import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Условия оказания услуг и возврата — Подписчики Телеграм",
  description: "Условия оказания услуг, отмены заказа и возврата оплаты. Контакты самозанятого исполнителя.",
  alternates: { canonical: "https://xn----8sbicgasaatoponcziw4g.xn--p1ai/returns/" }
};

export default function ReturnTerms() {
  return (
    <div className="container-shell max-w-3xl py-8 md:py-12">
      <Link href="/" aria-label="Подписчики Телеграм — на главную">
        <Image src="/brand/logo.svg" alt="Подписчики Телеграм" width={260} height={72} />
      </Link>
      <main>
        <h1 className="mt-6 text-3xl font-semibold leading-tight md:text-4xl">Условия оказания услуг и возврата</h1>
        <p className="mt-3 text-sm text-slate-500">Редакция от 13 ноября 2026 года</p>
        <section className="mt-7">
          <h2 className="text-xl font-semibold">Кто оказывает услуги</h2>
          <p className="mt-3 leading-7 text-slate-600">Исполнитель — самозанятый Савкин Александр Игоревич, ИНН 027404221032, город Уфа.</p>
          <p className="mt-3 leading-7 text-slate-600">По вопросам заказа, отмены и возврата пишите на <a className="underline underline-offset-2 break-words" href="mailto:realbuzzmanager@yandex.ru">realbuzzmanager@yandex.ru</a>. Для связи также доступен <a className="underline underline-offset-2 break-words" href="https://t.me/Savkin_1337">Telegram @Savkin_1337</a>.</p>
        </section>
        <section className="mt-7">
          <h2 className="text-xl font-semibold">Оказание услуг и оплата</h2>
          <p className="mt-3 leading-7 text-slate-600">Привлекаем живых подписчиков через приглашения. Описание, объём, стоимость и срок выполнения указаны в выбранном пакете на странице услуги.</p>
          <p className="mt-3 leading-7 text-slate-600">После заявки мы свяжемся с вами и обсудим детали запуска. Днём отвечаем в течение нескольких часов. После сохранения заявки можно сразу оплатить выбранный пакет. Если есть вопросы, сначала свяжитесь с нами.</p>
        </section>
        <section className="mt-7">
          <h2 className="text-xl font-semibold">Отмена до запуска</h2>
          <p className="mt-3 leading-7 text-slate-600">Если вы отмените оплаченный заказ до запуска работы, вернём всю сумму оплаты.</p>
        </section>
        <section className="mt-7">
          <h2 className="text-xl font-semibold">Отмена после частичного выполнения</h2>
          <p className="mt-3 leading-7 text-slate-600">При отмене заказа по вашей инициативе после частичного выполнения возвращаем оплату за невыполненную часть. Расчёт ведём по цене выбранного пакета, без пересчёта выполненной части по более дорогому тарифу.</p>
          <p className="mt-3 leading-7 text-slate-600">Например, если из пакета на 100 подписчиков за 3 500 ₽ выполнено 20, сумма возврата составит 2 800 ₽.</p>
        </section>
        <section className="mt-7">
          <h2 className="text-xl font-semibold">Если мы нарушили срок</h2>
          <p className="mt-3 leading-7 text-slate-600">Если мы нарушили согласованный срок выполнения, вы можете согласовать с нами новый срок или отменить заказ с полным возвратом оплаты.</p>
        </section>
        <section className="mt-7">
          <h2 className="text-xl font-semibold">Как обратиться за возвратом</h2>
          <p className="mt-3 leading-7 text-slate-600">Напишите на <a className="underline underline-offset-2 break-words" href="mailto:realbuzzmanager@yandex.ru">realbuzzmanager@yandex.ru</a>. Укажите дату оплаты, площадку и заказанный пакет, а также опишите ситуацию и ваше требование. Если у вас есть номер заказа или подтверждение оплаты, приложите их к обращению.</p>
          <p className="mt-3 leading-7 text-slate-600">В ответе сообщим расчёт суммы и порядок возврата. Возврат проводится тем же способом, которым был оплачен заказ, если иной порядок не согласован с вами и допускается правилами платёжного сервиса. Обращения и возвраты обрабатываются в сроки, установленные законодательством РФ.</p>
        </section>
        <section className="mt-7">
          <h2 className="text-xl font-semibold">Права клиента</h2>
          <p className="mt-3 leading-7 text-slate-600">Эти условия не ограничивают права клиента, предусмотренные законодательством РФ. Требования, связанные с нарушением сроков или недостатками услуги, рассматриваются с учётом предусмотренных законом прав клиента.</p>
        </section>
      </main>
      <footer className="mt-10 border-t border-slate-200 pt-5 text-sm text-slate-600">
        <p><a className="underline" href="/offer/">Публичная оферта</a> · <a className="underline" href="/privacy/">Политика обработки данных</a></p>
        <p className="mt-3"><a className="underline" href="#analytics-settings" data-analytics-settings="true">Настройки аналитики</a></p>
        <p className="mt-3"><Link className="underline underline-offset-2" href="/">Вернуться на главную</Link></p>
      </footer>
    </div>
  );
}
