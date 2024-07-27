import styled from "styled-components";
import { Thema } from "../../../styles/Thema";
import { To, useNavigate } from "react-router-dom";
import { log } from "console";

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

export const Menu = () => {
  const navigation = useNavigate();
  console.log(navigation)
  
  return (
    <StyledMenu>
      <ul>
        {itemMenu.map((item, index) => {
          return (
            <NavLink key={index}>
              <a href={`#${item.href}`}>{item.name}</a>
            </NavLink>
          );
        })}
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  background-color: ${Thema.colors.primeryBg};

  ul {
    display: flex;
    justify-content: space-between;
    padding: 15px 15px;
  }
`;
const NavLink = styled.li`
  &:hover {
    background-color: black;
    text-decoration: underline;
  }
`;
{
  /* <span onClick={() => navigation(-1)}>{item.name}</span> */
}
