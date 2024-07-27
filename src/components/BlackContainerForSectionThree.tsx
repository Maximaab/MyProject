import styled from "styled-components";
import { Thema } from "../styles/Thema";

export const BlackContainerForSectionThree = () => {
  return (
    <BlackContainerdiv>
      <SpanWhite></SpanWhite>
      <SectionsWhite>АКТУАЛЬНЫЕ АКЦИИ</SectionsWhite>
      <WrapperText>
        <ColorWhite>НА </ColorWhite>
        <SectionsGreen>НАШУ ПРОДУКЦИЮ</SectionsGreen>
      </WrapperText>
    <Text>Учитывая ключевые сценарии поведения, обучения кадров влечет за собой процесс внедрения и модернизации распределения</Text>
      <Buttons>
        <ButtonGreen>Рассчитать стоимость</ButtonGreen>
      </Buttons>
    </BlackContainerdiv>
  );
};

const BlackContainerdiv = styled.div`
  position: absolute;
    
  bottom: 370px;
  left: -15px;
  ;
  background-color: ${Thema.colors.primeryBg};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 30px;
  padding-left: 50px;
  margin-left: 0;
  width: 670px;
  height: 410px;
  &::before {
    content: "";
    position: absolute;
    left: 0px;
    width: 600px;
    height: 500px;
    border: 1px solid ${Thema.colors.fontGreen};
    z-index: -1;
    
  }
`;

const WrapperText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const SpanWhite = styled.span`
  background-color: ${Thema.colors.secondaryBg};
  height: 1px;
    width: 120px;

    
`;
const SectionsGreen = styled.h1`
  color: ${Thema.colors.fontGreen};
  padding-left: 10px;
  
  font-weight: 500
`;
const SectionsWhite = styled.h1`
  padding-top: 10px;
  color: ${Thema.colors.secondaryBg};

  font-weight: 500
`;
const ColorWhite = styled.h1`
  
  color: ${Thema.colors.secondaryBg};
`;
const Text = styled.h4`
text-align: left;
margin-top: 0;
  color: ${Thema.colors.fontGrey};
`;
const ButtonGreen = styled.button`
  background-color: ${Thema.colors.fontGreen};
  color: aliceblue;
  width: 270px;
  height: 60px;
`;


const Buttons = styled.div`
  padding-top: 20px;

  gap: 20px;
  display: flex;
  align-items: center;
`;
