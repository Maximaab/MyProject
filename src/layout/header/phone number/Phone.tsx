import styled from "styled-components";
import { Icon } from "./../../../components/icon/Icon";
import { FlexWrapper } from "../../../components/FlexWrapper";


export const Phone = () =>{
    return <FlexBox>
      <Icon iconId={"viber"} hight="20" width="20"></Icon>
      <Icon iconId={"phone"} hight="20" width="20"></Icon>
    <Number>+7 (499) 258-625-33</Number>
    <Icon iconId={"search"} hight="20" width="20"></Icon>
  </FlexBox>
}

const Number = styled.div`
  color: aliceblue;
`
const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 15px;
  margin: 0 15px 15px 0;
`
