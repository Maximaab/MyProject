import styled from "styled-components";
import { Thema } from "../../../../../styles/Thema";
import VasaImage from "../../../../../assets/images/Vasa.webp";
import { Icon } from "../../../../../components/icon/Icon";

const Info = [
    {
        title:"Kratki",
        description:"Каминная топка Kratki ZUZIA LPT",
        price:"16 490",
        photo:VasaImage,
        discount:"Акции"
    },
    
]

type ProductionsPropsType = {
  
};

export const Kartochka = (props: ProductionsPropsType) => {
    return (<KartochkaWrapper>
        {Info.map((el, index)=>{
            return <ProductionContainer key={index}>
              <Discount>{el.discount}</Discount>
              <ProductionsPhoto src={el.photo}></ProductionsPhoto>
              <TitleProductions>{el.title}</TitleProductions>
              <Descriptions>{el.description}</Descriptions>
              <AllPrise>
                <Prise>{el.price} </Prise><Icon iconId={"Price"} hight="14" width="14"viewBox="0 0 14 14"></Icon>
                <SmallText>{el.price}</SmallText> <Icon iconId={"SmallPrice"} hight="10" width="10" viewBox="0 0 10 10"></Icon>
              </AllPrise>
              <ButtonProductions>Подробнее</ButtonProductions>
            </ProductionContainer>
        })}
    </KartochkaWrapper>
        
      
      
   
  );
};

const KartochkaWrapper = styled.div`
   width: 280px;
`
const ProductionContainer = styled.div`
  position: relative;
  width: 280px;
  height: 450px;
  background-color: #FFFFFF;
  padding: 15px;
  border: 3px solid red;
  margin-top: 20px;
`;
const Discount = styled.div`
  position: absolute;
  
  padding: 7px 7px 7px 7px;
  right: 19px;
  top: 15px;
  background-color: #ffffff8d;
  
  
`;
const ProductionsPhoto = styled.img`
  padding: 0 0 0 0;
  width: 240px;
  height: 220px;
  
`;
const Prise = styled.div`
  color: ${Thema.colors.fontGreen};
  padding: 0px 7px 0 7px;
  font-weight: bold;
  font-size: 20px;
  
`;

const TitleProductions = styled.div`
  color: ${Thema.colors.fontGreen};
  font-weight: bold;
  font-size: 14px;
  padding: 25px 7px 0px 7px;
  
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;
const SmallText = styled.div`
  color: ${Thema.colors.fontGrey};
  font-weight: 400;
  font-size: 14px;
  padding: 0px 4px 0px 90px;
  text-decoration: line-through;
`;

const Descriptions = styled.div`
color: ${Thema.colors.primeryBg};
font-weight:500;
font-size: 16px;
padding: 5px 0 0 7px;
display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  
`;

const AllPrise = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0 10px 0px;
  
`;
const ButtonProductions = styled.button`
position: absolute ;
left: 17px;
color: white;
  background-color: ${Thema.colors.fontGreen};
  width: 240px;
  height: 40px;
  padding: 0px 0px 0px 0px;
`;
