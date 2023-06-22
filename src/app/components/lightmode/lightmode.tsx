"use client";

import Image from "next/image";
import lightMode from "./../../../../public/light_mode.svg";
import darkMode from "./../../../../public/dark_mode.svg";

interface LightmodeInputs {
  active: boolean;
  setLightmode: (active: boolean) => void;
}

export default function LightMode({ active, setLightmode }: LightmodeInputs) {
  return (
    <div onClick={() => setLightmode(!active)}>
      <Image src={active ? lightMode : darkMode} alt={""} />
    </div>
  );
}
