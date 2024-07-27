import styled from "styled-components";
// import { SectionTitle } from "../../../components/SectionTitle";
import photoOne from "./../../../assets/images/Phototabletop.webp";
import photoTwo from "./../../../assets/images/PhotoUnderWindow.webp";
import photoThree from "./../../../assets/images/PhotoSink.webp";
import photoFour from "./../../../assets/images/PhotoPanel.webp";
import { LookAll } from "../lookall/LookAll";
import { SectionTitle } from "../../../components/SectionTitle";
import { ButtonsSections } from "../../../components/ButtonUniversal";
import { Container } from "./../../../components/Container";
import BackSides from "./../../../assets/images/BackSide.webp";
import { Thema } from "../../../styles/Thema";

export const SectionTwo = () => {
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
            <LookAll color={"#282A30"} Keyboardcolor={"#282A30"} beforeright="180px"/>
          </HeaderSection>
          <PhotodivOne>
            <Phototabletop src={photoOne}></Phototabletop>
            <PhotoUnderWindow src={photoTwo}></PhotoUnderWindow>
          </PhotodivOne>
          <PhotodivTwo>
            <PhotoSink src={photoThree}></PhotoSink>
            <PhotoPanel src={photoFour}></PhotoPanel>
          </PhotodivTwo>
        </InContainerDiv>
      </Container>
    </StyledSections>
  );
};
const StyledSections = styled.section`
  position: relative;
  min-height: 100vh;
  padding-top: 100px;
  @media ${Thema.media.tablet} {
    display: none;
  }
`;
const InContainerDiv = styled.div`
  padding-left: 30px;
    padding-right: 140px;
`;
const BackSide = styled.img`
  position: absolute;
  z-index: -1;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const HeaderSection = styled.section`
  padding-top: 50px;
  padding-right: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-content: flex-start;
`;

const Phototabletop = styled.img`
  padding: 5px;
  width: 490px;
  height: 340px;
`;
const PhotoUnderWindow = styled.img`
  padding: 5px;
  width: 740px;
  height: 340px;
`;
const PhotoSink = styled.img`
  padding: 5px;
  width: 740px;
  height: 340px;
`;
const PhotoPanel = styled.img`
  padding: 5px;
  width: 490px;
  height: 340px;
`;
const PhotodivOne = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
const PhotodivTwo = styled.div`
  width: 100%;
`;
