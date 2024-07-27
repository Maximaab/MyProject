import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled, { css } from "styled-components";
import { Thema } from "../../../../styles/Thema";
import { useState } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { text } from "stream/consumers";
type UlListsType = {
  TopLiName: string;
  BottomLiName: string;
  NumberOfCircle: number;
  withRowReverse?: boolean;
  alignItems?: boolean;
  justifyContent?: boolean;
  text:string;
  bordertextposition?: boolean
};

export const UlLists = (props: UlListsType) => {
  const { withRowReverse, alignItems, justifyContent, text, bordertextposition } = props;

  const [state, setState] = useState(false);

  const handleClick = () => {
    setState(!state);
  };
  return (
    <StyledUlList alignItems={alignItems} justifyContent={justifyContent}>
      <TopLiName>{props.TopLiName}</TopLiName>
      <BottomLiName>{props.BottomLiName}</BottomLiName>
      <UnderList withRowReverse={withRowReverse}>
        <button onClick={handleClick}>
          {state ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </button>
        <UnderLine isOpen={state} textspan={text} bordertextposition={bordertextposition}></UnderLine>
        <Сircle>{props.NumberOfCircle}</Сircle>
      </UnderList>
    </StyledUlList>
  );
};

const StyledUlList = styled.ul<{
  alignItems?: boolean;
  justifyContent?: boolean;
}>`
  display: flex;
  align-items: flex-start;
  padding-top: 40px;

  ${({ alignItems }) =>
    alignItems &&
    css`
      align-items: flex-end;
    `};
  justify-content: flex-start;

  ${({ justifyContent }) =>
    justifyContent &&
    css`
      justify-content: flex-end;
    `};
  flex-direction: column;
`;

const TopLiName = styled.li`
padding-left: 25px;
padding-right: 25px;
`;
const BottomLiName = styled.li`
padding-left: 25px;
padding-right: 25px;
`;

const UnderList = styled.div<{ withRowReverse?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  ${({ withRowReverse }) =>
    withRowReverse &&
    css`
      flex-direction: row-reverse;
      
    `};
`;

const UnderLine = styled.span<{isOpen:boolean,textspan:string,bordertextposition?: boolean }>`
  height: 5px;
  width: 320px;
  background-color: ${Thema.colors.fontGreen};
  position: relative;
  
  

  &::before {
    
    display: ${(props) => (props.isOpen ? "block" : "none")};
    content: ${(props) => `"${props.textspan}"`};
    position: absolute;
    top: 3px;

    width: 320px;
    left: 0px;
    border: 2px solid ${Thema.colors.fontGreen};
    border-radius: 1%;
    background-color: white;
    border-bottom: none;
    
    z-index: 1;
    text-align: ${(props)=>props.bordertextposition ? "left" : "right"};
    border-left: ${(props)=>props.bordertextposition ? "block" : "none"};
    border-right: ${(props)=>props.bordertextposition ? "none" : "block"};
    
  }

`;
const Сircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 0px;
  border-radius: 50%;
  box-sizing: border-box;
  background-color: ${Thema.colors.fontGreen};
  color: ${Thema.colors.secondaryBg};
  padding: 15px 15px;
`;
