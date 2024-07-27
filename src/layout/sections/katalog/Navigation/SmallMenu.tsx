import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useState } from "react";
import styled from "styled-components";

type MenuType = {
  title: string;
  OpenMenu: boolean;
};

export const SmallMenu = ({ title, OpenMenu }: MenuType) => {
  

  const handleClick = () => {
    
  };
 

  return (
    <SMenu isOpenSmallMenu={OpenMenu}>
      {title}
      <Button onClick={handleClick}>
         <ChevronRightIcon />  
      </Button>
    </SMenu>
  );
};
const Button = styled.button<{}>`
  height: 26px;
  display: flex;

  color: #9c9c9c;
  &:hover{
    color: #28553F;
    cursor: pointer;
  }

`;

const SMenu = styled.span<{ isOpenSmallMenu: boolean }>`
  display: ${(props) => (props.isOpenSmallMenu ? "none" : "flex")};
  justify-content: flex-end;
  flex-direction: row-reverse;
  
  width: 260px;
  padding: 5px 25px 0px 20px;
  position: relative;
  color: #9c9c9c;

  top: 10px;

  font-size: 16px;
  font-style: italic;

  &:hover{
    color: #28553F;
    cursor: pointer;
  }

  &:last-child {
    padding-bottom: 20px;
  }

  &:last-child::before {
    content: "";
    position: absolute;
    top: 30px;
    right: 65px;
    height: 1px;
    width: 150px;
    background-color: #e5e5e5;
    
  }
`;
