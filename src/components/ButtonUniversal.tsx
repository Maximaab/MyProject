import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import styled from "styled-components";


type ButtonPropsType = {
  left?: boolean;
  type?: "primary";
  arrowcolor?: "white" | "#B1B1B1";
  
};

export const ButtonsSections = (props: ButtonPropsType) => {
  return (
    <Button>
      <ButtonArrow type={props.type} left arrowcolor={props.arrowcolor}/>
      <ButtonArrow type={props.type} arrowcolor={props.arrowcolor}/>
    </Button>
  );
};

const Button = styled.div`
  padding-top: 20px;
  gap: 20px;
  display: flex;
  align-items: center;
`;

export const ButtonArrow = (props: ButtonPropsType) => {
  return (
    <>
      <ArrowDiv type={props.type} arrowcolor={props.arrowcolor}>
        {props.left ? <ArrowBackIosIcon sx={{ color: props.arrowcolor }} /> : <ArrowForwardIosIcon sx={{ color: props.arrowcolor }} />}
      </ArrowDiv>
    </>
  );
};



const ArrowDiv = styled.button<{ type?: "primary"; arrowcolor?: "white" | "#B1B1B1"}>`
  height: 45px;
  width: 45px;
  background-color: ${(props) => props.type === "primary" ? "green" : "none"};
  border: ${(props) => (props.type === "primary" ? "none" : "1px solid #B1B1B1")};
  border-radius:${(props)=>(props.type === "primary" ? "none" : "5px")};
`;
