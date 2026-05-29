import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://подписчики-телеграм.рф"),
  title: "Подписчики Телеграм — живые подписчики в канал от 35 ₽",
  description:
    "Приводим живых подписчиков в Telegram-канал через рассылку-приглашение. Без ботов. Тестовый запуск от 500 ₽.",
  alternates: {
    canonical: "https://подписчики-телеграм.рф/"
  },
  openGraph: {
    title: "Подписчики Телеграм — живые подписчики в канал от 35 ₽",
    description:
      "Приводим живых подписчиков в Telegram-канал через рассылку-приглашение. Без ботов.",
    url: "https://подписчики-телеграм.рф/",
    siteName: "Подписчики Телеграм",
    locale: "ru_RU",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
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
      <body>{children}</body>
    </html>
  );
}
