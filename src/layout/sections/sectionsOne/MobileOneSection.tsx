import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Thema } from "../../../styles/Thema";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { UlLists } from "./sectionComponents/UlLists";


export const SectionsOneMobile = () => {
  return (
    <StyledSections id={"blog"}>
      <SectionTitle
        SectionTitlePrimery="НАШИ ПРЕЙМУЩЕСТВА - "
        SectionTitleGreen="ВАШ РЕЗУЛЬТАТ"
        align="center"
        direction="column"
        colorline={`${Thema.colors.fontGreen}`}
      ></SectionTitle>
      
      <FlexWrapper align="center" justify="space-between" direction="column">
        <div>
          <UlListLeft className="UlListLeft">
            <UlLists
              text="СОВРЕМЕННОЕ ОБОРУДОВАНИЕ ДЛЯ КАМНЕОБРАБОТЧИКОВ"
              TopLiName="НОВЕЙШЕЕ ИТАЛЬЯНСКОЕ"
              BottomLiName="ОБОРУДОВАНИЕ DONATONI"
              NumberOfCircle={0o1}
              bordertextposition
            ></UlLists>
            <UlLists
            text="В условиях нынешней экономики человек всё чаще задумывается о начале собственного бизнеса. И не удивительно, ведь это даёт свободу в разных аспектах его жизни, начиная от возможности свободно распоряжаться собственным временем и заканчивая свободой в принятии решений для улучшения своего финансового результата"
              TopLiName="СОБСТВЕННОЕ"
              BottomLiName="ПРОИЗВОДСТВО"
              NumberOfCircle={0o2}
              bordertextposition
            ></UlLists>
            <UlLists
            text="В зависимости от широты охвата товаров различают следующие виды ассортимента: простой, сложный, групповой, развернутый, сопутствующий, смешанный."
              TopLiName="ШИРОКИЙ"
              BottomLiName="АССОРТИМЕНТ"
              NumberOfCircle={0o3}
              bordertextposition
            ></UlLists>
          </UlListLeft>
        </div>
        
        <div>
          <UlListRight className="UlListRight">
            <UlLists
            text="Изделия из нержавейки - это растущая тенденция при выборе оборудования для закусочных, ресторанов, пабов, кафе и прочих заведений пищевой промышленности."
            justifyContent
            alignItems
            withRowReverse
              TopLiName="ИЗДЕЛИЯ"
              BottomLiName="ИЗ НАЛИЧИ"
              NumberOfCircle={0o4}
              
            ></UlLists>
            <UlLists
            text="Строительные и отделочные работы «под ключ» — это комплексная услуга. После ремонта заказчику передается квартира в полностью пригодном для проживания виде."
            justifyContent
            alignItems
            withRowReverse
              TopLiName="РАБОТАЕМ ПОД"
              BottomLiName="КЛЮЧ"
              NumberOfCircle={0o5}
              
            ></UlLists>
            <UlLists
            text="Всеми любимый способ взаимодействия с камнем — потрогать его. Крутите минерал в руках, гладьте его, сжимайте в ладони. Вам может захотеться приложить его к щеке или положить в район солнечного сплетения."
            justifyContent
            alignItems
            withRowReverse
              TopLiName="КОНСУЛЬТАЦИЯ ПО УХОДУ"
              BottomLiName="ЗА ИЗДЕЛИЕМ ИЗ КАМНЯ"
              NumberOfCircle={0o6}
              
            ></UlLists>
          </UlListRight>
        </div>
      </FlexWrapper>
    </StyledSections>
  );
};

const StyledSections = styled.section`
  display: none;
  
@media ${Thema.media.tablet} {
    display: block;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 140px;
    background-color: ${Thema.colors.secondaryBg};
  min-height: 100vh;
    li {
    color: ${Thema.colors.accent};
  }
}
`;



const UlListLeft = styled.div`
  &.UlListLeft {
        
  }
`;
const UlListRight = styled.div`
  &.UlListRight {
    
    
  }
`;