"use client";
import clsx from "clsx";
import React from "react";

export enum ButtonVariants {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface ButtonProps {
  children: React.ReactNode;
  onClickHandler: (e: React.MouseEvent) => void;
  variant: ButtonVariants;
  disabled: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClickHandler,
  variant,
  disabled,
}) => {
  const classVariants = {
    [ButtonVariants.PRIMARY]:
      "px-3 py-1 text-sm md:px-5 md:py-2 rounded-full border-2 border-[#4812cc] text-[#4812cc] md:text-base hover:bg-[#ede5ff] hover:transition-all",
    [ButtonVariants.SECONDARY]: clsx(
      "text-sm py-2 px-5 rounded-md cursor-pointer md:text-base hover:transition-all",
      !disabled && "bg-[#f046ff] text-white",
      disabled && "pointer-events-none bg-gray-400 text-black-300"
    ),
  };
  return (
    <button className={classVariants[variant]} onClick={onClickHandler}>
      {children}
    </button>
  );
};

export default Button;
