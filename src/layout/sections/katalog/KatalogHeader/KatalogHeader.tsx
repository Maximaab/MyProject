import styled from "styled-components";
import { Thema } from "../../../../styles/Thema";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
export const KatalogHeader = ()=>{
    return <div>
        <Title>
          <SectionWhite>ИЗДЕЛИЯ ИЗ</SectionWhite>
          <SectionGreen>НАТУРАЛЬНОГО КАМНЯ</SectionGreen>
        </Title>
        <WrapperMenu>
            <Katalog>
              <SpanGrey>Главная</SpanGrey>
        <ArrowRightIcon fontSize="small"></ArrowRightIcon>
              <SpanGreen>Каталог товаров</SpanGreen>
            </Katalog>
            <List>
              <DivWrapper>
              <SpanGrey>Сортировать:</SpanGrey>
              <SpanGreen>по актуальности</SpanGreen>
              </DivWrapper>
              <DivWrapper>
              <SpanGrey>Показывать:</SpanGrey>
              <SpanGreen>по 9</SpanGreen>
              </DivWrapper>
            </List>
        </WrapperMenu>
        <ShowMore></ShowMore>
        <Pagination></Pagination>
    </div>
}

const Title = styled.div`
  display: flex;
  align-items: center;
`
const SectionWhite = styled.h1`
color: ${Thema.colors.primeryBg};
position: relative;

&::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 120px;
    height: 1px;
    background-color: ${Thema.colors.primeryBg};
  }
;
`;
const SectionGreen = styled.h1`
color: ${Thema.colors.fontGreen};
padding-left: 15px;
`;
const WrapperMenu = styled.div`
display:flex;
justify-content: space-between;
border: 1px solid #E5E5E5;
border-left: none;
border-right: none;
padding: 10px 0 10px 0;
`;
const Katalog = styled.div``;

const List = styled.div`
display:flex;
justify-content: space-between;
`;
const DivWrapper = styled.div`
display:flex;
justify-content: space-between;
padding-left: 35px;
`;

const SpanGrey = styled.span`
  color: #9C9C9C;
`
const SpanGreen = styled.span`
color: #28553F;
  padding-left: 10px;
`


const ShowMore = styled.div``;

const Pagination = styled.div``;