import React from "react";
import styled from "styled-components";
import { LogoComp } from "../../components/logo/Logo";
import { Menu } from "./menu/Menu";
import { Phone } from "./phone number/Phone";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Thema } from "../../styles/Thema";


export const Header = () => {
  return (
    <StyledHeader>
      <CustomContainer>
        <FlexWrapper align={"center"} >
          <LogoComp />
          <ListAbout>
          <Phone />
          <Menu />
          </ListAbout>
        </FlexWrapper>
      </CustomContainer>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`

  padding: 0;
  position: fixed;
  top:0;
  left:0;
  right: 0;
  z-index: 99999;
  background-color: rgb(0 0 0 / 95%);
    
  @media ${Thema.media.tablet} {
        display: none;
    }  
`;
const ListAbout = styled.div`
  width: 100%;
  
`;
const CustomContainer = styled(Container)`
  opacity: 0.8;
  
`;