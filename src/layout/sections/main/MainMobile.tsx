import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import BackGrounds from "../../../assets/images/BackgroundMain.png";
import { BlackContainer } from "../../../components/BlackContainer";
import "react-alice-carousel/lib/alice-carousel.css";
import { MyCarousel } from "../../../components/MyCarousel/MyCarouseSliderl";
import { Thema } from "../../../styles/Thema";

export const MainMobile = () => {
  return (
    <Styledmain>
      <BackGround src={BackGrounds}></BackGround>
      <Container>
        <FlexWrapper
          align={"center"}
          justify={"space-between"}
          content={"flex-end"}
        >
          <ListSection>
            <BlackContainer />
          </ListSection>
        </FlexWrapper>
      </Container>
    </Styledmain>
  );
};

const Styledmain = styled.div`
  display: none;
  
  @media ${Thema.media.tablet} {
    display: block;
    position: relative;
  min-height: 100vh;
  display: flex;
  }
`;
const ListSection = styled.div`
  position: absolute;
  bottom: 20px;
  `;


const BackGround = styled.img`
  position: absolute;
  z-index: -1;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;




