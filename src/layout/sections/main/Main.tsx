import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import BackGrounds from "../../../assets/images/BackgroundMain.png";
import { BlackContainer } from "../../../components/BlackContainer";
import "react-alice-carousel/lib/alice-carousel.css";
import { MyCarousel } from "../../../components/MyCarousel/MyCarouseSliderl";
import { Thema } from "../../../styles/Thema";

export const Main = () => {
  return (
    <Styledmain>
      <BackGround src={BackGrounds}></BackGround>
      <Container>
        <FlexWrapper
          align={"center"}
          justify={"space-between"}
          content={"flex-end"}
        >
          <CaruselWraper className="swiperone">
          <MyCarousel />
          </CaruselWraper>
          <ListSection>
            <BlackContainer />
          </ListSection>
        </FlexWrapper>
      </Container>
    </Styledmain>
  );
};

const Styledmain = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;

  @media ${Thema.media.tablet} {
    display: none;
  }
`;
const ListSection = styled.div`
  padding-left: 50px;
  position: absolute;
  bottom: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  z-index: +3;
`;

const CaruselWraper = styled.span`
  position: relative;

  &::before{
    content:"";
    position: absolute;
    height: 660px;
    width: 980px;
    left: 380px;
    top:100px;

    border: 1px solid ${Thema.colors.fontGreen};
  }
`;
const BackGround = styled.img`
  position: absolute;
  z-index: -1;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const PhotoWrapper = styled.div`
  position: absolute;
  right: 0px;
  height: min(600px, 100%);
  z-index: +1;
  overflow: hidden;
`;

const AliceCarouselWrapper = styled.div`
  height: 75px;
  width: 230px;
`;
