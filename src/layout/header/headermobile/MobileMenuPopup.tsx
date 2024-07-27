import styled, { css } from "styled-components";
import { Thema } from "../../../styles/Thema";
import { To, useNavigate } from "react-router-dom";
import { log } from "console";
import { MobileMenu } from "./componentmobile/MobileMenu";


type PropsType = {
isOpen:boolean  
}


export const itemMenu = [
  {
    title: "Blog",
    href: "blog",
    name: "БЛОГ",
  },
  {
    title: "Katalog",
    href: "katalog",
    name: "КАТАЛОГ",
  },
  {
    title: "Price",
    href: "price",
    name: "АКЦИИ",
  },
  {
    title: "Cooperation",
    href: "cooperation",
    name: "СОТРУДНИЧЕСТВО",
  },
  {
    title: "PaymentAndDelivery",
    href: "paymentanddelivery",
    name: "ОПЛАТА И ДОСТАВКА",
  },
];

export const MobileMenuPopup = ({isOpen}:PropsType) => {
  const navigation = useNavigate();
  console.log(navigation)
  
  return (
    <StyledMenu isOpen={isOpen}>
      <ul>
        {itemMenu.map((item, index) => {
          return ( <MobileMenu name={item.name} href={`#${item.href}`} index={index}/>
            
          );
        })}
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav<{isOpen:boolean}>`
  position: relative;
  background-color: ${Thema.colors.primeryBg};
  display: none;
  padding-top: 50px;

  

  @media ${Thema.media.tablet}{
    display: block;
    ul {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      padding: 15px 15px;
      height: 428px;
      
    }
    ${props => props.isOpen && css<{isOpen:boolean}>`
    display: none;
  `}
  }
`;
const NavLink = styled.li`

&::before {
    content:"";
    position: absolute;
    height: 2px;
    width: 330px;
    left: 2px;
    bottom: 360px;
    background-color: red;
    z-index: 9999999;

  }

  &:hover {
    background-color: black;
    text-decoration: underline;
  }
  
`;

