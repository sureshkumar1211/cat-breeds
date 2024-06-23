"use client";
import React from "react";
import Logo from "./ui/Logo";
import Button, { ButtonVariants } from "./ui/Button";

const Header = () => {
  const onClickContactUsHandler = () => {};
  return (
    <header className="flex items-center bg-white px-5 py-3 md:px-10 md:py-5 justify-between shadow-md sticky top-0 z-50">
      <Logo />
      <Button
        onClickHandler={onClickContactUsHandler}
        variant={ButtonVariants.PRIMARY}
        disabled={false}
      >
        Contact us
      </Button>
    </header>
  );
};

export default Header;
