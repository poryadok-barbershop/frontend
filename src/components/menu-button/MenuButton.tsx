import type { FC, HTMLAttributes } from "react";

import { MenuIcon, XMarkIcon } from "@/assets/icons";

import st from './MenuButton.module.scss';

type Props = HTMLAttributes<HTMLButtonElement> & {
  isOpen: boolean;
  toggle: () => void;
};

export const MenuButton: FC<Props> = ({ isOpen, toggle, className }) => (
  <button
    type="button"
    aria-label={isOpen ? "Открыть меню" : "Закрыть меню"}
    aria-expanded={isOpen}
    aria-controls="menu"
    title={isOpen ? "Открыть меню" : "Закрыть меню"}
    className={`${st.button} ${className}`}
    onClick={toggle}
  >
    {isOpen ? <XMarkIcon /> : <MenuIcon />}
  </button>
);
