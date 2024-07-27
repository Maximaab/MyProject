
import styled from 'styled-components';
import svgImg from '../../../../assets/Horizon logo 1.svg'
import { Thema } from '../../../../styles/Thema';

export const LogoMobile = () => {
  return (
    
      <Logo href="/">
        <img  src={svgImg} />
      </Logo>
   
  );
};

const Logo = styled.a`
  
 @media ${Thema.media.tablet} {
    display: block;
   }
`