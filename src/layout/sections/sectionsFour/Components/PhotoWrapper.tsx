import styled from "styled-components";

type PhotoWrapperType = {
    image:string
}

export const PhotoWrapper = (props:PhotoWrapperType) => {
  return (
    <PhotoWrapperImg>
      <NameImg src={props.image}></NameImg>
    </PhotoWrapperImg>
  );
};

const PhotoWrapperImg = styled.div`
margin: 10px;
width: 350px;
height: 370px;
`;

const NameImg = styled.img`
    width: 100%;
    height: 100%;
    overflow: hidden;
  

`