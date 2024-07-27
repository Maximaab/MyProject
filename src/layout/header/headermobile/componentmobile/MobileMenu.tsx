import { Props } from "react-alice-carousel";
import styled from "styled-components";


type PropsType = {
    name:string,
href:string,
index:number,
}

export const MobileMenu = ({name,href,index}:PropsType) =>{
    return <NavLink key={index}>
        <span>

    <a href={href}>{name}</a>
        </span>
  </NavLink>
}


const NavLink = styled.li`
position: relative;

font-size: 18px;
font-weight:400;
    
 &::before {
    content: "";
    position: absolute;
    height: 1px;
    width: 300px;
    left: 2px;
    bottom: -30px;
    background-color: #ffffff59;
    z-index: 9999999;

  } 
  &:last-child::before {
    content: none; /* Убираем псевдоэлемент ::before для последнего элемента */
  }


  &:hover {
    background-color: black;
    text-decoration: underline;
  }
  
`;

