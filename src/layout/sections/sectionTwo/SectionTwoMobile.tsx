import styled from "styled-components";
// import { SectionTitle } from "../../../components/SectionTitle";
import photoOne from "./../../../assets/images/Phototabletop.webp";
import photoTwo from "./../../../assets/images/PhotoUnderWindow.webp";
import photoThree from "./../../../assets/images/PhotoSink.webp";
import photoFour from "./../../../assets/images/PhotoPanel.webp";
import { LookAll } from "../lookall/LookAll";
import { SectionTitle } from "../../../components/SectionTitle";

import { Container } from "../../../components/Container";
import BackSides from "./../../../assets/images/BackSide.webp";
import { Thema } from "../../../styles/Thema";
import { MenuKartochka } from "./MobileKartochka/MobileKartochka";

const MenuObj = [
  {
    photo: photoOne,
    title: "СТОЛЕШНИЦЫ",
  },
  {
    photo: photoTwo,
    title: "ПОДОКОННИКИ",
  },
  {
    photo: photoThree,
    title: "РАКОВИНЫ",
  },
  {
    photo: photoFour,
    title: "ПАНО",
  },
];

export const SectionTwoMobile = () => {
  return (
    <StyledSections id="katalog">
      <BackSide src={BackSides}></BackSide>
      <Container>
        <InContainerDiv>
          <HeaderSection>
            <SectionTitle
              SectionTitlePrimery="ИЗДЕЛИЯ ИЗ"
              SectionTitleGreen="НАТУРАЛЬНОГО КАМНЯ"
              align="flex-start"
              direction="column"
              colorline={`${Thema.colors.fontGreen}`}
            ></SectionTitle>
            <LookAll
              color={"#282A30"}
              Keyboardcolor={"#282A30"}
              beforeleft="300px"
              paddingleft="135px"
              paddingtop="40px"
            />
          </HeaderSection>
          {MenuObj.map((el) => {
            return <MenuKartochka photo={el.photo} title={el.title} />;
          })}
          {/* <MenuKartochka/> */}
        </InContainerDiv>
      </Container>
    </StyledSections>
  );
};
const StyledSections = styled.section`
  display: none;
  @media ${Thema.media.tablet} {
    display: block;
    position: relative;
    min-height: 100vh;
    padding-top: 100px;
  }
`;
const InContainerDiv = styled.div`
  display: none;

  @media ${Thema.media.tablet} {
    display: block;
    padding-top: 100px;
    padding-left: 20px;
    display: flex;
    flex-direction: column;
  }
`;
const BackSide = styled.img`
  position: absolute;
  z-index: -1;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const HeaderSection = styled.section`
  @media ${Thema.media.tablet} {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
`;
