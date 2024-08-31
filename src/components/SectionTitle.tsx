import styled from "styled-components";
import { Thema } from "../styles/Thema";
import { FlexWrapper } from "./FlexWrapper";

type SectionsPropsType = {
  // as:string;
  SectionTitlePrimery?: string;
  SectionTitleGreen?: string;
  align?: string;
  direction?: string;
  color?: string;
  colorline?: string;
};

export const SectionTitle = (props: SectionsPropsType) => {
  // const {align,colorline, as='h2' } =props
  return (
    <StyledTitle id="blog">
      <FlexWrapper align={props.align} direction={props.direction}>
        <UnderLineTitle color={props.colorline}></UnderLineTitle>
        <SectionTitlePrimery color={props.color}>
          {props.SectionTitlePrimery}
        </SectionTitlePrimery>
        <SectionTitleGreen>{props.SectionTitleGreen}</SectionTitleGreen>
      </FlexWrapper>
    </StyledTitle>
  );
};

const StyledTitle = styled.div``;

const SectionTitlePrimery = styled.h1<SectionsPropsType>`
  color: ${(props) => props.color};
  text-align: center;
  padding-top: 15px;
  @media ${Thema.media.tablet} {
    margin: 0 0 0 0;
  }
`;
const SectionTitleGreen = styled.h1`
  color: ${Thema.colors.fontGreen};
  text-align: center;
  padding-top: 10px;
  font-weight: 400;
  @media ${Thema.media.tablet} {
    padding: 0 0 0 0;
  }
`;
const UnderLineTitle = styled.span<SectionsPropsType>`
  height: 1px;
  width: 120px;
  background-color: ${(props) => props.color};
`;
