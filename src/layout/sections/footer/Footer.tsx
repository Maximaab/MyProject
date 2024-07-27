import styled from "styled-components";
import { TopFooter } from "./footercomponents/TopFooter";
import { BottomFooter } from "./footercomponents/BottomFooter";

import { Container } from "../../../components/Container";
import Sofa from "./../../../assets/images/sofa.webp";
import { Thema } from "../../../styles/Thema";

export const Footer = () => {
  return (
    <FooterSection id="paymentanddelivery">
      <SofaImg src={Sofa}></SofaImg>
      <Container>
        <TopFooter />
      </Container>
        <BottomFooter />
        <Copiright>674 Gonzales Drive. Washington, PA 15301</Copiright>
    </FooterSection>
  );
};

const FooterSection = styled.section`
  position: relative;
  overflow: hidden;
  background: linear-gradient(to right, rgba(10, 10, 10, 1.5), transparent);
`;

const SofaImg = styled.img`
  position: absolute;
  width: 100%;
  object-fit: cover;
  z-index: -1;
  bottom: -200px;
  margin: 20px;
`;
const Copiright = styled.div`
background-color: ${Thema.colors.primeryBg};
color: rgba(255, 255, 255, 0.9);

padding: 25px;
font-size: 12px;
display: flex;
align-items: center;
justify-content: center;
`;
