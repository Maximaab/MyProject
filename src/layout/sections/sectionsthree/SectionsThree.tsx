import { LookAll } from "../lookall/LookAll";

import styled from "styled-components";

import { Thema } from "../../../styles/Thema";
import PhotoSink from "./../../../assets/images/PhotoSink.webp";

import { CaruselProductions } from "../../../components/MyCarousel/SectionThreeCarusel";
import { Container } from "../../../components/Container";
import { BlackContainerForSectionThree } from "../../../components/BlackContainerForSectionThree";

export const SectionsThree = () => {
  return (
    <StyledSections id="price">
      <BackSidePhoto src={PhotoSink}></BackSidePhoto>
      <ExtendedContainer>
        <LookAllWrapper>

        <LookAll
          align="flex-end"
          direction="row"
          justify="flex-end"
          paddingtop="30px"
          color="white"
          Keyboardcolor="white"
          beforeright="130px"
          beforetop="41px"
        />
        </LookAllWrapper>
        <div className="styledtwo">
          <CaruselProductions />
        </div>

        <ListSection className="myClass">
          <BlackContainerForSectionThree />
        </ListSection>
      </ExtendedContainer>
    </StyledSections>
  );
};

const StyledSections = styled.section`
  position: relative;

  min-height: 100vh;

  background-color: black;
  opacity: 0.9;
  
`;
const ExtendedContainer = styled(Container)`
  height: 1080px;
`;
const ListSection = styled.div`
  position: relative;
  z-index: 0;
 
`;
const LookAllWrapper = styled.div`
  padding: 0 120px 0 0;
`;
const BackSidePhoto = styled.img`
  position: absolute;

  z-index: -2;
  opacity: 0.3;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
