import styled from "styled-components";
import { Thema } from "../../../../styles/Thema";

type ProductionsPropsType = {
  title?: string;
  description?: string;
  price?: number | string;
  photo?: string;
};

export const Productions = (props: ProductionsPropsType) => {
  return (

      
        <ProductionContainer>
          <Discount>Акции</Discount>
          <ProductionsPhoto src={props.photo}></ProductionsPhoto>
          <TitleProductions>{props.title}</TitleProductions>
          <Descriptions>{props.description}</Descriptions>
          <Price>
            <Prise>{props.price} </Prise>
            <SmallText>{props.price}</SmallText>
          </Price>
          <ButtonProductions>Подробнее</ButtonProductions>
        </ProductionContainer>
      
   
  );
};


const ProductionContainer = styled.div`
  position: relative;
  width: 220px;
  height: 220px;
  background-color: white;
  padding: 15px;
  
`;
const Discount = styled.div`
  position: absolute;
  right: 15px;
  background-color: aliceblue;
  padding: 5px;
`;
const ProductionsPhoto = styled.img`
  width: 100%;
  height: 200px;
  
`;
const Prise = styled.div`
  color: ${Thema.colors.fontGreen};
  padding-right: 80px;
  
`;

const TitleProductions = styled.div`
  color: ${Thema.colors.fontGreen};
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
 
 
`
const SmallText = styled.div`
  color: ${Thema.colors.accent}
`
const Descriptions = styled.div`
color: ${Thema.colors.primeryBg};
display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  
`

const Price = styled.div`
  display: flex;
  align-items: center;
  
`;
const ButtonProductions = styled.button`
  color: white;
  background-color: ${Thema.colors.fontGreen};
  padding: 5px 45px;
`;
