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
    <nav className="flex justify-center">
      <div
        className={`${
          active ? "active" : ""
        } nav__menu-list flex flew-row content-center gap-5`}
      >
        {navOptions.map((menu, id) => (
          <div
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
