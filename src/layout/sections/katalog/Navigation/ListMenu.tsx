import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { SmallMenu } from "./SmallMenu";

const item = [
    {
      title: "Мини",
    },
    {
      title: "Мраморные",
    },
    
    
  ];

type ListType = {
    title:string
    OpenList: boolean
}

export const ListMenu = ({title, OpenList}:ListType)=>{
    const [isOpenMenu, setIsOpen] = useState(true);

    const handleClick = () => {
      setIsOpen(!isOpenMenu);
    };
   useEffect(() =>{ 
      if(OpenList){
      setIsOpen(true);}
    }, [OpenList]);

    return<div>
        <ListsMenu isOpenList={OpenList} isOpenMenu={isOpenMenu}>
           {title}
          <Button onClick={handleClick} isOpenMenu={isOpenMenu}>
            {isOpenMenu ? <ChevronRightIcon /> : <ExpandMoreIcon />}
          </Button>
        </ListsMenu>
          {item.map((el, index)=>{
            return <SmallMenu key={index} title={el.title} OpenMenu={ isOpenMenu }/>
          })}
    </div> 
}

const Button = styled.button<{ isOpenMenu: boolean }>`
  height: 26px;
  color: ${(props) => (props.isOpenMenu ? "#9c9c9c" : "#28553F")};
`;

const ListsMenu = styled.span<{ isOpenList: boolean, isOpenMenu: boolean }>`
    display: ${(props) => (props.isOpenList ? 'none' : 'flex')};
  justify-content: space-between;
  
  width: 260px;
  padding: 15px 25px 15px 35px;
  position: relative;
  color: ${(props) => (props.isOpenMenu ? "#9c9c9c" : "#28553F")};

  font-size: 16px;

  &::before {
    content: "";
    position: absolute;
    top: 50px;
    height: 1px;
    width: 190px;
    background-color: #e5e5e5;
  }
`;

