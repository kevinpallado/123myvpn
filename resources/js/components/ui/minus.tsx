import { cn } from "@/utils"
import React from 'react';

const Minus = ({
    className,
    onClick,
    children,
    ...props
  }: React.ButtonHTMLAttributes<HTMLButtonElement> & {
    onClick?: () => void;
    children?: React.ReactNode;
  }) => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (onClick) {
        onClick();
      } else {
        console.error('onClick handler not provided for Minus component');
      }
    };
  
    return (
      <button
        className={cn("text-[30px] cursor-pointer", className)}
        onClick={handleClick}
        {...props}
      >
        {children}
      </button>
    );
  };

export { Minus }