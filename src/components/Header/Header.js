import React from "react";
import { Container, CustomMenu, Menu, RightMenu } from "./Header.styles";

function Header() {
  return (
    <Container>
      <a href="/">
        <img src="/img/logo.svg" alt="" />
      </a>
      <Menu>
        <a href="/">Model S</a>
        <a href="/">Model 3</a>
        <a href="/">Model X</a>
        <a href="/">Model Y</a>
      </Menu>
      <RightMenu>
        <a href="/">Shop</a>
        <a href="/">Tesla Account</a>
      </RightMenu>
      <CustomMenu></CustomMenu>
    </Container>
  );
}

export default Header;
