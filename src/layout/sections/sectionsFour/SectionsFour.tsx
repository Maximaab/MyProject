import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
// import { SectionTitle } from "../../../components/SectionTitle";
import duschewaya from "./../../../assets/images/Duschewaya.webp";
import kitchen from "./../../../assets/images/kitchen.webp";
import kitchentwo from "./../../../assets/images/KitchenTwo.webp";
import mirrorAndShower from "./../../../assets/images/MirrorAndShower.webp";
import mirrorAndShowerTwo from "./../../../assets/images/MirrorAndShowerTwo.webp";
import { Button } from "@mui/material";
import { ButtonsSections } from "../../../components/ButtonUniversal";
import { SectionTitle } from "../../../components/SectionTitle";
import { Thema } from "../../../styles/Thema";
import { Container } from "./../../../components/Container";
import { PhotoWrapper } from "./Components/PhotoWrapper";
import { SliderAliceCorusel } from "../../../components/SliderAliceCorusel";
import Line from "./../../../assets/images/Line 22.svg";

export const SectionsFour = () => {
  return (
    <StyledSections id="cooperation">
      <Container>
        <HeadersSection>
          <SectionTitle
            SectionTitlePrimery="ИДЕИ ДЛЯ"
            SectionTitleGreen="ВДОХНОВЕНИЯ"
            align="flex-start"
            direction="column"
            colorline={`${Thema.colors.fontGreen}`}
          ></SectionTitle>
          
        </HeadersSection>
        <FlexWrapper align={"center"}>
          <PhotoDiv>
            <Duschewaya src={duschewaya}></Duschewaya>
          </PhotoDiv>
          <div>
            <PhotoWrapper image={kitchen} />
            <PhotoWrapper image={kitchentwo} />
          </div>
          <div>
            <PhotoWrapper image={mirrorAndShower} />
            <PhotoWrapper image={mirrorAndShowerTwo} />
          </div>
        </FlexWrapper>
        
        <BottomButtonWrapper>
          <BottomButton>
            Смотреть еще больше фотографий {">"}

          </BottomButton>
        </BottomButtonWrapper>
      </Container>
    </StyledSections>
  );
};

const StyledSections = styled.section`
  background-color: #e5e5e5;
  min-height: 100vh;
`;
const HeadersSection = styled.section`
  padding-top: 50px;
  padding-right: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-content: flex-start;
`;

const PhotoDiv = styled.div`
  width: 100%;
  overflow: hidden;
`;

const Duschewaya = styled.img`
  width: 1010px;
  height: 100%;
  margin: 10px;
`;
const LineImg = styled.img`
  padding-left: 20px;
  color: aliceblue;
`;
const BottomButtonWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;
const BottomButton = styled.button`
  background-color: ${Thema.colors.fontGreen};
  width: 400px;
  height: 50px;
  margin-bottom: 100px;
  color: aliceblue;
`;
