import type { Metadata } from "next";
import Script from "next/script";
import type { ReactNode } from "react";
import "./globals.css";

const siteUrl = "https://xn----8sbicgasaatoponcziw4g.xn--p1ai";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Подписчики Телеграм — живые подписчики в канал от 35 ₽",
  description:
    "Приводим живых подписчиков в Telegram-канал через рассылку-приглашение. Без ботов. Тестовый запуск от 500 ₽.",
  alternates: {
    canonical: `${siteUrl}/`
  },
  openGraph: {
    title: "Подписчики Телеграм — живые подписчики в канал от 35 ₽",
    description:
      "Приводим живых подписчиков в Telegram-канал через рассылку-приглашение. Без ботов.",
    url: `${siteUrl}/`,
    siteName: "Подписчики Телеграм",
    locale: "ru_RU",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  },
  verification: {
    yandex: "5f558a8f36aaed6b"
  },
  icons: {
    icon: "/icon.svg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        {children}
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {
                if (document.scripts[j].src === r) { return; }
              }
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js?id=109558727', 'ym');

            ym(109558727, 'init', {
              ssr: true,
              webvisor: true,
              clickmap: true,
              ecommerce: 'dataLayer',
              accurateTrackBounce: true,
              trackLinks: true
            });
          `}
        </Script>
        <noscript>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://mc.yandex.ru/watch/109558727"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
      </body>
    </html>
  );
}
