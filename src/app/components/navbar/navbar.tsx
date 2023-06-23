"use client";

import { useState } from "react";
import NavItem from "./navItem";

export default function Navbar() {
  const navOptions = [
    { text: "Home", href: "/" },
    { text: "About", href: "/about" },
    { text: "Projects", href: "/projects" },
    { text: "Certificates", href: "/certificates" },
  ];

  const [active, setActive] = useState(false);
  const [activeId, setActiveId] = useState(-1);

  return (
    <nav className="flex">
      <div
        className={`${
          active ? "active" : ""
        } nav__menu-list flex flew-row content-center`}
      >
        {navOptions.map((menu, id) => (
          <div
            className={`flex ${
              id === activeId ? "bg-slate-700" : "bg-slate-800"
            } ${
              id === 0
                ? "rounded-l-full"
                : id === navOptions.length - 1
                ? "rounded-r-full"
                : ""
            }`}
            onClick={() => {
              setActiveId(id);
              setActive(false);
            }}
            key={menu.text}
          >
            <NavItem active={activeId === id} {...menu} />
          </div>
        ))}
      </div>
    </nav>
  );
}
