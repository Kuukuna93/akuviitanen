"use client";

import Image from "next/image";
import lightMode from "./../../../../public/light_mode.svg";
import darkMode from "./../../../../public/dark_mode.svg";
import { useState } from "react";
import { Theme } from "@/app/types";

interface LightmodeInputs {
  theme: Theme;
}

export default function LightMode({ theme }: LightmodeInputs) {
  const [_theme, setTheme] = useState<Theme>(theme);

  const toggleTheme = () => {
    const root = document.getElementsByTagName("html")[0];
    root.classList.toggle(Theme.dark);
    if (root.classList.contains(Theme.dark)) {
      setTheme(Theme.dark);
      document.cookie = `theme=${Theme.dark}`;
    } else {
      setTheme(Theme.light);
      document.cookie = `theme=${Theme.light}`;
    }
  };

  return (
    <div onClick={() => toggleTheme()} className="flex absolute right-5 top-5">
      <Image src={_theme === Theme.light ? lightMode : darkMode} alt={""} />
    </div>
  );
}
