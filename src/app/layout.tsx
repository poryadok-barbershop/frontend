import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.scss";

const geistMono = Geist_Mono({
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Порядок | барбершоп",
  description: "Барбершоп Порядок",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistMono.className}`}>
        {children}
      </body>
    </html>
  );
}
