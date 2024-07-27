import styled from "styled-components";
import { Thema } from "../styles/Thema";

export const BlackContainer = () => {
  return (
    <BlackContainerdiv>
      <SectionsGrey>КАМЕНЬ С ДУШОЙ</SectionsGrey>
      <SectionsWhite>КАМЕННЫЕ ИЗДЕЛИЯ</SectionsWhite>
      <SectionsGreen>ДЛЯ ВАШЕГО ДОМА</SectionsGreen>
      <Buttons>
        <ButtonGreen>Рассчитать стоимость</ButtonGreen>
        <ButtonBlack>Связаться с нами</ButtonBlack>
      </Buttons>
    </BlackContainerdiv>
  );
};

const BlackContainerdiv = styled.div`
  position: absolute;

  bottom: 170px;
  left: -15px;
  @media ${Thema.media.tablet} {
    left: 0px;
  }

  background-color: ${Thema.colors.primeryBg};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 30px;
  padding-left: 50px;
  margin-left: 0;
  @media ${Thema.media.tablet} {
    background-color: rgba(255, 255, 255, 0);
    width: 440px;
  }
`;

const SectionsGreen = styled.h1`
  color: ${Thema.colors.fontGreen};

  font-weight: 400
`;
const SectionsWhite = styled.h1`
  padding-top: 10px;
  color: ${Thema.colors.secondaryBg};

  font-weight: 400
`;
const SectionsGrey = styled.span`
  color: ${Thema.colors.fontGrey};
position: relative;

&::before{
content: "";
position: absolute;
height: 1px;
width: 80px;
left: 160px;
    top: 12px;
background-color: ${Thema.colors.fontGrey};
}

  font-weight: 400
  
`;
const ButtonGreen = styled.button`
  background-color: ${Thema.colors.fontGreen};
  color: aliceblue;
  width: 270px;
  height: 60px;
`;
const ButtonBlack = styled.button`
  background-color: ${Thema.colors.accent};
  color: aliceblue;
  width: 270px;
  height: 60px;
`;

const Buttons = styled.div`
  padding-top: 20px;

  gap: 20px;
  display: flex;
  align-items: center;
  @media ${Thema.media.tablet} {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;
