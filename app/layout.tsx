import type { Metadata } from "next";
import { IM_Fell_English } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const imFell = IM_Fell_English({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Josiah Riggins - Portfolio",
  description: "Welcome to my portfolio - developer, creator, builder.",
  icons: {
    icon: "/JR.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${imFell.className} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
