import React from "react";
import Fade from "react-reveal/Fade";
import {
  ButtonGroup,
  Buttons,
  DownArrow,
  ItemText,
  LeftButton,
  RightButton,
  Wrap,
} from "./Section.style";

function Section({
  title,
  description,
  backgroundImg,
  leftBtnText,
  rightBtnText,
}) {
  return (
    <Wrap bgImg={backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </ButtonGroup>
        </Fade>
        <DownArrow src="/img/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
}

export default Section;
