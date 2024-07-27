
import styled from "styled-components";
import { ListItem } from "./ListItem";




type PropsType = {};

export const Navigation = ({}: PropsType) => {
  const item = [
    {
      title: "Вид камня",
    },
    {
      title: "Изделие",
    },
    {
      title: "Месторождение",
    },
    {
      title: "Цвет",
    },
  ];

  return (
    <Navigations>
      {item.map((el, index) => {
        return <ListItem key={index} title={el.title} />;
      })}
    </Navigations>
  );
};

const Navigations = styled.div`
  background-color: #f9f9f9;
  position: absolute;
  top: 150px;
  display: flex;
  flex-direction: column;
  width: 240px;
  
`;


