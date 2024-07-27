import React from "react";
import styled from "styled-components";
import { LogoComp } from "../../../../components/logo/Logo";
import { FlexWrapper } from "../../../../components/FlexWrapper";

import { Phone } from "../../../header/phone number/Phone";
import { Container } from "../../../../components/Container";
import { KatalogMenuHeader } from "./KatalogMenuHeader";




export const KatalogHeadback= () => {
  return (
    <StyledHeader>
      <CustomContainer>
        <FlexWrapper align={"center"} >
          <LogoComp />
          <ListAbout>
          <Phone />
          <KatalogMenuHeader />
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
    
    
`;
const ListAbout = styled.div`
  width: 100%;
  
`;
const CustomContainer = styled(Container)`
  opacity: 0.8;
  
`;