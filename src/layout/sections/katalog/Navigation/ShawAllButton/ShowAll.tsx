import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import styled from 'styled-components';

export const ShowAllButton = () =>{
    return <>
    <ShowAll>
          <Button>ПОКАЗАТЬ ЕЩЁ</Button>
        </ShowAll>
        <WrapperKeyboardArrowRightIcon>
        <KeyboardArrowRightIcon fontSize="small" fontWeight="light"/>
        </WrapperKeyboardArrowRightIcon>
    </>
}

const ShowAll = styled.div`
  position: relative;
  color: #282A30;

  

  &::before {
    content: "";
    position: absolute;
    display: block;
    width: 30px;
    height: 2px;
    background-color:#282A30;;

    right: -36px;
    top: 15px;
  }
`
const WrapperKeyboardArrowRightIcon = styled.div`
display: flex;
align-items: center;
padding-left: 25px;

`
const Button = styled.button`
  font-size: 21px;
  font-weight: 350;

`;