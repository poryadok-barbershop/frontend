"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LogoBlack } from "@/assets/icons";
import { MenuButton } from "../menu-button/MenuButton";
import { NAVLIST } from "./constants";
import st from "./Header.module.scss";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className={st.header}>
      <Link href="/">
        <LogoBlack className={st.logo} />
      </Link>
      <nav className={st.nav}>
        {NAVLIST.map(({ name, href }) => (
          <Link
            key={name}
            href={href}
          >
            {name}
          </Link>
        ))}
      </nav>
      <Link
        href="https://n1094654.yclients.com"
        className={st.button}
      >
        Записаться
      </Link>
      <MenuButton
        isOpen={isOpen}
        toggle={() => setIsOpen(!isOpen)}
        className={st.menu}
      />
      {isOpen && (
        <nav className={st.mobileNav}>
          <MenuButton
            isOpen={isOpen}
            toggle={() => setIsOpen(!isOpen)}
            className={`${st.menu} ${st.mobileMenu}`}
          />
          {NAVLIST.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              onClick={() => setIsOpen(false)}
            >
              {name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};
