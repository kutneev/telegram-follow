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
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Подписчики Телеграм — живые подписчики в канал" }]
  },
  twitter: { card: "summary_large_image" },
  robots: {
    index: true,
    follow: true
  },
  verification: {
    yandex: "5f558a8f36aaed6b"
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/icon.svg", type: "image/svg+xml" }
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }]
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
        <Script id="analytics-consent" src="/analytics-consent.js" data-metrika="109558727" strategy="afterInteractive" />
      </body>
    </html>
  );
}

