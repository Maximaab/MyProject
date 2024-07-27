import styled from "styled-components";
import { Thema } from "../../../../styles/Thema";

export const TopFooter = () => {
  return (
    <TopFooterStyled>
      <TotTitle>ОСТАЛИСЬ ВОПРОСЫ?</TotTitle>
      <BottomTitle>СВЯЖИТЕСЬ С НАМИ, МЫ ВАМ ПОМОЖЕМ!</BottomTitle>
      <TextSmall>
        Заполняйте форму и мы свяжимся с вами в ближайшее время
      </TextSmall>
      <TextForm>
        <Input type="text" placeholder={"Ваше имя"} />
        <Input type="text" placeholder={"Ваш телефон"} />
        <ButtonSend type={"submit"}>Отправить</ButtonSend>
      </TextForm>
      <CheckboxOk>
        <input type="checkbox" />
        <Agree>Согласен на обработку персональных данных</Agree>
      </CheckboxOk>
    </TopFooterStyled>
  );
};

const TopFooterStyled = styled.div`
  padding-top: 100px;
`;
const TotTitle = styled.div`
  color: aliceblue;
  padding: 10px;
`;
const BottomTitle = styled.div`
  color: aliceblue;
  padding: 10px;
`;
const TextSmall = styled.span`
  color: aliceblue;
  padding: 10px;
`;
const ButtonSend = styled.button`
  color: black;
  background-color: white;
  border-width: 1px;
  font-weight: bold;
  padding: 7px 65px;
    font-size: 14px;
`;
const TextForm = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;
  padding: 5px 10px;
`;
const Input = styled.input`
  padding: 5px 15px;
  border-radius: 0;
  border-width: 1px;
  border-color: white;
  background-color: ${Thema.colors.primeryBg};
  color: white;
  
  &:focus {
    outline: none; /* Убирает границу при активации (фокусировке) */
  }
  &::placeholder {
    color: white;
    font-size: 14px;
  }
  `;

  const CheckboxOk = styled.div`
    display: flex;
    gap:10px;
    padding: 10px;
  `;
  const Agree = styled.span`
    color: white;
    font-size: 12px;
    font-weight: 1px;
  `;