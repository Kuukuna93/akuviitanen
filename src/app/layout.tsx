import LightMode from "./components/lightmode/lightmode";
import Navbar from "./components/navbar/navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { cookies } from "next/dist/client/components/headers";
import { Theme } from "./types";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AkuViitanen",
  description: "Personal website of Aku Viitanen",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = cookies().get("theme");

  return (
    <html lang="en" className={theme?.value}>
      <body
        className={`${inter.className} bg-slate-50 dark:bg-slate-950 text-slate-950 dark:text-slate-50`}
      >
        <header className="flex flex-row justify-center">
          <Navbar />
          <LightMode
            theme={theme?.value === "dark" ? Theme.dark : Theme.light}
          />
        </header>
        {children}
      </body>
    </html>
  );
}
