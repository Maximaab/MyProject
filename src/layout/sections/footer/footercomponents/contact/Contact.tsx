import styled from "styled-components";
import { Icon } from "../../../../../components/icon/Icon";

export const Contact = () => {
  return (
    <ContactStyled>
      <ListMenu>
        КОНТАКТЫ ДЛЯ СВЯЗИ
        <li>
          Телефон:
          <SmallText>(405) 555-0128</SmallText>
        </li>
        <li>
          Почта: <SmallText>hello@createx.com</SmallText>
        </li>
        <li>
          <SocialList>
            <SocialItem>
              <SocialLink href="">
                <Icon iconId={"facebooc"} hight="15" width="10"></Icon>
              </SocialLink>
            </SocialItem>
            <SocialItem>
              <SocialLink href="">
                <Icon iconId={"inst"} hight="15" width="15"></Icon>
              </SocialLink>
            </SocialItem>
            <SocialItem>
              <SocialLink href="">
                <Icon iconId={"Twitter"} hight="15" width="15"></Icon>
              </SocialLink>
            </SocialItem>
            <SocialItem>
              <SocialLink href="">
                <Icon iconId={"Youtube"} hight="15" width="15"></Icon>
              </SocialLink>
            </SocialItem>
            <SocialItem>
              <SocialLink href="">
                <Icon iconId={"pinterest"} hight="15" width="15"></Icon>
              </SocialLink>
            </SocialItem>
          </SocialList>
        </li>
      </ListMenu>
    </ContactStyled>
  );
};

const ContactStyled = styled.p``;
const SocialList = styled.ul`
  display: flex;
  flex-direction: row;
  padding: 0;
  padding-top: 20px;
  gap: 10px
`;
const SocialItem = styled.li`



`;
const SocialLink = styled.a`
display: flex;
align-items: center;
justify-content: center;

width: 30px;
height: 30px;
background-color: rgb(255, 255, 255,0.2);
border-radius: 10px;
`;

const ListMenu = styled.ul`
  color: white;
  display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap:10px;
`;
const SmallText = styled.span`
  
`;