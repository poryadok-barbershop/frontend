/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */
import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import Head from "next/head";

import { YandexMetrika } from "@/components";

import "./globals.scss";

const geistMono = Geist_Mono({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Порядок | барбершоп",
  // description: "Барбершоп Порядок - профессиональные услуги барберов",
  // icons: {
  //   icon: [
  //     { url: "/favicon.ico", sizes: "any" },
  //     { url: "/favicon.jpg", type: "image/jpeg", sizes: "32x32" }
  //   ],
  //   apple: { url: "/favicon.jpg", sizes: "180x180" }
  // },
  // openGraph: {
  //   title: "Порядок | барбершоп",
  //   description: "Профессиональный барбершоп Порядок",
  //   images: [
  //     {
  //       url: "/big-image.jpg",
  //       width: 1200,
  //       height: 630,
  //       alt: "Барбершоп Порядок"
  //     }
  //   ],
  //   type: "website",
  //   siteName: "Порядок | барбершоп"
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Порядок | барбершоп",
  //   description: "Профессиональный барбершоп Порядок",
  //   images: ["/big-image.jpg"]
  // }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <Head>
        <link rel="canonical" href="https://poryadok-barbershop.com" />
        <link rel="icon" href="/favicon.jpg" />
        <link rel="icon" type="image/jpeg" sizes="32x32" href="/favicon.jpg"/>
        <link rel="apple-touch-icon" href="/favicon.jpg"/>

        <meta name="theme-color" content="#292929" />
        <meta name="description" content="Здесь вы найдете свой «порядок» — стиль, уверенность и качество в каждой детали" />

        <meta property="og:image" content="https://poryadok-barbershop.com/big-image.jpg" />
        <meta property="og:image:width" content="1400" />
        <meta property="og:image:height" content="600" />
        <meta property="og:title" content="Порядок | барбершоп" />
        <meta property="og:description" content="Здесь вы найдете свой «порядок» — стиль, уверенность и качество в каждой детали" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Порядок | барбершоп" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BarberShop",
        "name": "Название Вашего Барбершопа",
        "image": "https://poryadok-barbershop.com/favicon.jpg",
        "description": "«Порядок» — это команда опытных барберов, создающих уникальный мужской стиль. Мы предлагаем профессиональные стрижки и уход, учитывая вашу индивидуальность. Ценим ваше время и предлагаем доступный ценник. Здесь вы найдете свой «порядок» — стиль, уверенность и качество в каждой детали.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Улица Декабристов, дом 11",
          "addressLocality": "Санкт-Петербург",
          "postalCode": "190000",
          "addressCountry": "RU"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "59.928505",
          "longitude": "30.303992"
        },
        "openingHours": "Mo-Fr 10:00-22:00",
        "telephone": "+79112690672",
        "priceRange": "₽₽₽",
        "url": "https://poryadok-barbershop.com"
      })
          }}
        />
      </Head>
      <body className={`${geistMono.className}`}>
        {children}
        <YandexMetrika />
      </body>
    </html>
  );
}