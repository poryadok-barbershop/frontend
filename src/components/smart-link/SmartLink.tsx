"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AnchorHTMLAttributes, MouseEvent } from 'react';

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  replace?: boolean;
  href: string;
  onClick?: (e: MouseEvent) => void
}

export const SmartLink = ({ 
  href, 
  children,
  onClick,
  replace = false, 
  ...props 
}: Props) => {
  const router = useRouter();
  
  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    onClick?.(e);
    
    if (replace) {
      router.replace(href);
    } else {
      router.push(href);
    }
  };
  
  return (
    <Link 
      href={href} 
      onClick={handleClick} 
      {...props}
    >
      {children}
    </Link>
  );
};