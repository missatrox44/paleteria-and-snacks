import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";

const acme = localFont({
  src: "./fonts/Acme-Regular.ttf",
  variable: "--font-acme",
});

const pacifico = localFont({
  src: "./fonts/Pacifico-Regular.ttf",
  variable: "--font-pacifico",
});

const afacad = localFont({
  src: "./fonts/Afacad-Regular.ttf",
  variable: "--font-afacad",
});

export const metadata: Metadata = {
  title: "KD's Paleteria & Snacks",
  description: "Mexican inspired ice cream flavors and snacks in Odessa, TX.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${acme.variable} ${pacifico.variable} ${afacad.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
