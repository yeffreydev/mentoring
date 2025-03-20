import "./globals.css";
import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import { ClientBody } from "./ClientBody";
import clsx from "clsx";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "MENTORIA X - Generando Ingresos por Internet",
  description:
    "Descubre el método que te enseñará a generar tus primeros $10,000 USD sin invertir en publicidad.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={clsx(montserrat.variable, openSans.variable)}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
