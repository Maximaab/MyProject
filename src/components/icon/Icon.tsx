import styled from "styled-components"
import SVGspride from "./../../assets/images/SVGspride.svg"
type IconPropsType = {
    iconId:string
    hight?:string
    width?:string
    viewBox?:string
}

export const Icon = (props:IconPropsType) =>{
    return (
        <svg 
        width={props.width || "20"} 
        height={props.hight || "20"} 
        viewBox={props.viewBox || "0 0"} 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        >
            <use xlinkHref={`${SVGspride}#${props.iconId}`}/>
        </svg>
    )
}



