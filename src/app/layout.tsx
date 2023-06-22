"use client";

import { useState } from "react";
import LightMode from "./components/lightmode/lightmode";
import Navbar from "./components/navbar/navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AkuViitanen",
  description: "Personal website of Aku Viitanen",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lightMode, setLightmode] = useState(true);

  return (
    <html lang="en" className={lightMode ? "" : "dark"}>
      <body
        className={`${inter.className} bg-slate-50 dark:bg-slate-950 text-slate-950 dark:text-slate-50`}
      >
        <Navbar />
        <LightMode active={lightMode} setLightmode={setLightmode} />
        {children}
      </body>
    </html>
  );
}
