import React, { useState } from "react";
import styled, { css } from "styled-components";

import { Menu } from "./../menu/Menu";
import { Phone } from "./../phone number/Phone";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Thema } from "../../../styles/Thema";
import { LogoMobile } from "./componentmobile/LogoMobile";
import { Icon } from "../../../components/icon/Icon";
import { MobileMenuPopup } from "./MobileMenuPopup";

export const HeaderMobile = () => {
  const [state, setState] = useState(true);

  const onClickHandler = () => {
    setState(!state);
  };

  return (
    <StyledHeader>
      <CustomContainer>
        <FlexWrapper align={"center"} justify={"space-between"}>
          <LogoMobile />
          <FlexWrapper
            align={"center"}
            justify={"space-between"}
            width={"250px"}
            padding="0 0 0 10px"
          >
            <Icon
              iconId={"viber"}
              hight="28"
              width="28"
              viewBox="0 0 20 20"
            ></Icon>
            <Icon
              iconId={"phone"}
              hight="28"
              width="28"
              viewBox="0 0 20 20"
            ></Icon>
            <Number>+7 (499) 258-625-33</Number>
          </FlexWrapper>
        </FlexWrapper>
        <FlexWrapper
          align={"center"}
          justify={"flex-end"}
          padding={"10px 0 0 0"}
        >
          <Input type="text" placeholder={"Ваше имя"} isOpen={state} />
          <BurgerButton isOpen={state} onClick={onClickHandler}>
            <SpanWrapper isOpen={state}>
              <span></span>
            </SpanWrapper>
          </BurgerButton>
        </FlexWrapper>
        <MobileMenuPopup isOpen={state} />
      </CustomContainer>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  padding: 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
  min-height: 100px;
  background-color: rgb(0 0 0 / 95%);
`;
const CustomContainer = styled(Container)`
  opacity: 0.8;
  padding: 10px 30px 0 30px;
`;
const Number = styled.div`
  color: aliceblue;
  font-size: 16px;
  font-weight: 400;
`;
const IconWrapper = styled.div``;
const SpanWrapper = styled.div<{ isOpen: boolean }>`
  padding: 0px 0 0 20px;
  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      padding: 20px 0 0 20px;
    `}
`;
const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: relative;
  display: flex;
  width: 56px;
  height: 40px;
  z-index: 999999;
  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      width: 56px;
      height: 40px;
    `}
  span {
    display: block;
    position: absolute;
    bottom: 20px;
    width: 36px;
    height: 4px;
    border-radius: 10px;
    
    background-color: rgba(255, 255, 255, 0);
    ${(props) =>
      props.isOpen &&
      css<{ isOpen: boolean }>`
        background-color: ${Thema.colors.secondaryBg};
      `}

    &::before {
      content: "";
      display: block;
      width: 36px;
      height: 4px;
      background-color: ${Thema.colors.secondaryBg};
      position: absolute;
      border-radius: 10px;
      transform: rotate(-45deg) translate(0);
          border-radius: 10px;
      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          
          border-radius: 10px;
      transform: translateY(-10px);
        `}
    }
    &::after {
      content: "";
      display: block;
      width: 36px;
      height: 4px;
      background-color: ${Thema.colors.secondaryBg};
      position: absolute;
      border-radius: 10px;
      
      transform: rotate(45deg) translate(0);
          border-radius: 10px;
      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: translateY(10px);
          border-radius: 10px;
        `}
    }
  }
`;

const Input = styled.input<{ isOpen: boolean }>`
  padding: 5px 15px;
  border-radius: 0;
  border-width: 1px;
  border-color: white;
  background-color: ${Thema.colors.primeryBg};
  color: white;
  width: 325px;
  height: 40px;

  &:focus {
    outline: none; /* Убирает границу при активации (фокусировке) */
  }
  &::placeholder {
    color: white;
    font-size: 14px;
  }
  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      display: none;
    `}
`;
