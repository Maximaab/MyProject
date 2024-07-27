
import styled from "styled-components";
import { Thema } from "../../../../styles/Thema";
import { To, useNavigate } from "react-router-dom";


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

export const KatalogMenuHeader = () => {
  const navigation = useNavigate();
  console.log(navigation)
  
  return (
    <StyledMenu>
      <ul>
        {itemMenu.map((item, index) => {
          return (
            <NavLink key={index}>
              <Backdiv onClick={() => navigation(-1)}>{item.name}</Backdiv>
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
const Backdiv = styled.div`
    cursor: pointer;
`