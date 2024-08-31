import styled from "styled-components";
import { Thema } from "../../../styles/Thema";
import { Link, To, useNavigate } from "react-router-dom";


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
  console.log(navigation);

  return (
    <StyledMenu>
      <ul>
        <NavLink>
          <Link to="#blog">БЛОГ</Link>
          </NavLink>
          <NavLink>
          <Link to="#katalog">КАТАЛОГ</Link>
          </NavLink>
          <NavLink>
          <Link to="#price">АКЦИИ</Link>
          </NavLink>
          <NavLink>
          <Link to="#cooperation">СОТРУДНИЧЕСТВО</Link>
          </NavLink>
          <NavLink>
          <Link to="#paymentanddelivery">ОПЛАТА И ДОСТАВКА</Link>
          </NavLink>
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
