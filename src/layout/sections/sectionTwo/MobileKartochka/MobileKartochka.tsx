import styled from "styled-components"
import photoOne from "./../../../../assets/images/Phototabletop.webp"

type PropsType = {
    photo: string,
    title: string,
} 

export const MenuKartochka = ({photo, title}:PropsType) =>{
    return <SectionStyled>
        <BackPhoto src={photo}></BackPhoto>
        <BlackContainer>{title}</BlackContainer>
    </SectionStyled>
}

const BackPhoto = styled.img`
position: relative; 
width: 320px;
height: 220px;
z-index: 1;
display: flex;
flex-direction: column;
`

const SectionStyled = styled.div`
padding-top: 30px;
position: relative;
padding-bottom: 50px;
`
const BlackContainer = styled.button`
position: absolute;
    bottom: 70px;
    width: 320px;
    height: 50px;
    z-index: 2;
    background-color:#00000085;
    
    color: aliceblue;
    
    
`