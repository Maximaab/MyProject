import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Thema } from "../../../styles/Thema";
type LookAllType = {
  align?: string;
  direction?: string;
  justify?: string;
  color?: string;
  Keyboardcolor?: string
  paddingtop?: string;
  beforeright?: string;
  beforetop?: string;
  paddingleft?: string;
  beforeleft?:string;
};

export const LookAll = (props: LookAllType) => {
  return (
    <div>
      <FlexWrapper
        align={props.align}
        direction={props.direction}
        justify={props.justify}
      >
        <ArrowDiv paddingtop={props.paddingtop} paddingleft={props.paddingleft} Keyboardcolor={props.Keyboardcolor} beforeright={props.beforeright} beforetop={props.beforetop} beforeleft={props.beforeleft}>
          <LookAlldiv href="/MyProject/katalog">
            <ArrowA color={props.color}>СМОТРЕТЬ ВСЕ</ArrowA>
            <WrapperKeyboardArrowRightIcon>
              <KeyboardArrowRightIcon sx={{ color: props.Keyboardcolor }} />
            </WrapperKeyboardArrowRightIcon>
          </LookAlldiv>
        </ArrowDiv>
      </FlexWrapper>
    </div>
  );
};

const ArrowA = styled.div<LookAllType>`
  color: ${(props) => props.color};
  font-family: 'Raleway Medium', sans-serif;
`;

const LookAlldiv = styled.a`
  padding: 0 0px 0 0;
  display: flex;
  align-items: center;
`;

const ArrowDiv = styled.div<LookAllType>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: ${(props) => props.paddingtop};
  padding-left: ${(props) => props.paddingleft};

  &::before {
    content: "";
    position: absolute;
    display: block;
    width: 30px;
    height: 2px;
    background-color:${(props) => props.Keyboardcolor};

    right: ${(props) => props.beforeright};
    top: ${(props) => props.beforetop};
    @media ${Thema.media.tablet} {
      right: ${(props) => props.beforeright};
      left: ${(props) => props.beforeleft};
    }
  }
   
`;
const WrapperKeyboardArrowRightIcon = styled.div`
  display: flex;
  align-items: center;
  padding-left: 35px;
`;
