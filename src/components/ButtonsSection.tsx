import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import styled from "styled-components";


type ButtonPropsType = {
colorArrow?:string
backgroundColor?:string | undefined
border?:string
}

export const ButtonsSection = (props:ButtonPropsType) => {
  return (
    <Button>
      <ArrowDivOne backgroundColor={props.backgroundColor} border={props.border}>
        <ArrowBackIosIcon sx={{ color: props.colorArrow }} />
      </ArrowDivOne>
      <ArrowDivTwo backgroundColor={props.backgroundColor} border={props.border}>
        <ArrowForwardIosIcon sx={{ color: props.colorArrow }} />
      </ArrowDivTwo>
    </Button>
  );
};

const Button = styled.div`
  padding-top: 20px;

  gap: 20px;
  display: flex;
  align-items: center;
`;
const ArrowDivOne = styled.button<ButtonPropsType>`
  background-color: ${props => props.backgroundColor};
  height: 45px;
  width: 45px;
  border:${props => props.border}
`;
const ArrowDivTwo = styled.button<ButtonPropsType>`
  background-color: ${props => props.backgroundColor};
  height: 45px;
  width: 45px;
  border:${props => props.border}
`;