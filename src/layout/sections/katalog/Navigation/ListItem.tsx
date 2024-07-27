import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { ListMenu } from "./ListMenu";
import { log } from "console";



const item = [
    {
      title: "Дикий камень",
    },
    {
      title: "Гранит",
    },
    {
      title: "Мрамор",
    },
    
  ];

type ListItemProps = {
  title: string;
};

export const ListItem = ({ title }: ListItemProps) => {
  const [isopenlist, setIsOpen] = useState(true);

  const handleClick = () => {
    setIsOpen(!isopenlist);
  };
  useEffect(() =>{ 
    if(isopenlist){
    setIsOpen(true);}
  }, [isopenlist]);

  return (<div>
    <ListNavigation isOpenlist={isopenlist}>
      {title}
      <Button onClick={handleClick} isopenlist={isopenlist}>
        {isopenlist ? <ChevronRightIcon /> : <ExpandMoreIcon />}
      </Button>
    </ListNavigation>
    
{item.map((el, index)=>{
    return <ListMenu key={index} title={el.title} OpenList={isopenlist}/>
})}
    
  </div>
  );
};

const ListNavigation = styled.span<{ isOpenlist: boolean }>`
  display: flex;
  justify-content: space-between;
  
  width: 260px;
  padding: 30px 25px 30px 20px;
  position: relative;
  color: ${(props) => (props.isOpenlist ? "#9c9c9c" : "#28553F")};

  font-size: medium;

  &::before {
    content: "";
    position: absolute;
    top: 70px;
    height: 1px;
    width: 205px;
    background-color: #e5e5e5;
  }
`;

const Button = styled.button<{ isopenlist: boolean }>`
  height: 26px;
  color: ${(props) => (props.isopenlist ? "#9c9c9c" : "#28553F")};
`;



