"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LogoBlack } from "@/assets/icons";
import { MenuButton } from "../menu-button/MenuButton";
import { NAVLIST } from "./constants";
import { SmartLink } from '@/components/smart-link';
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
      <SmartLink
        className={st.logo_wrapper}
        href="/"
        title='В начало'
        replace
      >
        <LogoBlack className={st.logo} />
      </SmartLink>
      <nav 
        className={st.nav} 
        aria-label="Главное меню" 
        id="menu"
      >
        {NAVLIST.map(({ name, href }) => (
          <SmartLink
            key={name}
            href={href}
            replace
          >
            {name}
          </SmartLink>
        ))}
      </nav>
      <Link
        href="https://n1094654.yclients.com"
        className={st.button}
        target="_blank"
      >
        Записаться
      </Link>
      <MenuButton
        isOpen={isOpen}
        toggle={() => setIsOpen(!isOpen)}
        className={st.menu}
      />
      {isOpen && (
        <nav 
          className={st.mobileNav}
          aria-label="Мобильное меню"
          id="menu"
        >
          <MenuButton
            isOpen={isOpen}
            toggle={() => setIsOpen(!isOpen)}
            className={`${st.menu} ${st.mobileMenu}`}
          />
          {NAVLIST.map(({ name, href }) => (
            <SmartLink
              key={name}
              href={href}
              onClick={() => setIsOpen(false)}
              replace
            >
              {name}
            </SmartLink>
          ))}
        </nav>
      )}
    </header>
  );
};
