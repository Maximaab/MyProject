import styled from "styled-components";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { LogoComp } from "../../../../components/logo/Logo";
import { Contact } from "./contact/Contact";
import { Thema } from "../../../../styles/Thema";

export const BottomFooter = () => {
  return (
    <BottomFotterStyled>
      <FlexWrapper align={"center"} justify={"space-evenly"}>
        <LogoComp />
        <StyledListLinks>
          <ListMenu>
            МЕНЮ
            <LiList>Delivery & returns</LiList>
            <LiList>FAQ</LiList>
            <LiList>Contacts</LiList>
            <LiList>Blog</LiList>
          </ListMenu>
        </StyledListLinks>
        <StyledListLinks>
          <ListMenu>
            КАТАЛОГ
            <LiList>New arrivals</LiList>
            <LiList>Trending now</LiList>
            <LiList>Sales</LiList>
            <LiList>Brands</LiList>
          </ListMenu>
        </StyledListLinks>
        <Contact />
      </FlexWrapper>
    </BottomFotterStyled>
  );
};

const BottomFotterStyled = styled.div`
  background-color: ${Thema.colors.primeryBg};
  padding-top: 30px;
`;
const ListMenu = styled.ul`
  color: white;
  display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap:10px;
`;

const StyledListLinks = styled.div`
  direction: column;
`;
const LiList = styled.li`
  list-style: none;
  
`;
