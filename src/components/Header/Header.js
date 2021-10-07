import React, { useState } from "react";
import { selectCars } from "../../features/car/carSlice";
import { useSelector } from "react-redux";
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
  const [burgerOpen, setburgerOpen] = useState(false);
  const cars = useSelector(selectCars);

  return (
    <Container>
      <a href="/">
        <img src="/img/logo.svg" alt="" />
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => (
            <a key={index} href="/">
              {car}
            </a>
          ))}
      </Menu>
      <RightMenu>
        <a href="/">Shop</a>
        <a href="/">Tesla Account</a>
        <CustomMenu onClick={() => setburgerOpen(true)} />
      </RightMenu>
      <BurgerNav show={burgerOpen}>
        <CloseWrapper>
          <CustomClose onClick={() => setburgerOpen(false)} />
        </CloseWrapper>
        {cars &&
          cars.map((car, index) => (
            <li>
              <a key={index} href="/">
                {car}
              </a>
            </li>
          ))}
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
