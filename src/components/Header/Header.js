import React, {useState} from "react";
import {
  BurgerNav,
  CloseWrapper,
  Container,
  CustomClose,
  CustomMenu,
  Menu,
  RightMenu,
} from "./Header.styles";

function Header() {

  const [burgerOpen, setburgerOpen] = useState(false)

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
        <CustomMenu onClick={()=>setburgerOpen(true)} />
      </RightMenu>
      <BurgerNav show={burgerOpen}>
        <CloseWrapper>
          <CustomClose onClick={()=>setburgerOpen(false)} />
        </CloseWrapper>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-in</a>
        </li>
        <li>
          <a href="#">Cybertruck</a>
        </li>
        <li>
          <a href="#">Roadster</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;
