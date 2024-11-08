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

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

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
