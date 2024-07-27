
import styled from 'styled-components';
import svgImg from '../../assets/images/test.svg'
import { Thema } from '../../styles/Thema';

export const LogoComp = () => {
  return (
    
      <Logo href="/">
        <img  src={svgImg} />
      </Logo>
   
  );
};

const Logo = styled.a`
display: block;
@media ${Thema.media.tablet} {
    display: none ;
}`