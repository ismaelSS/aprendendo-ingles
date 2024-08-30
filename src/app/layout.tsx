import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PersonHeader from "@/components/PersonHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "aprenda inglês comigo.",
  description:
    "esse é um conjunto de ferramentas criadas com o objetivo de colocar facilitar meu aprendizado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <PersonHeader />
        {children}
      </body>
    </html>
  );
}
