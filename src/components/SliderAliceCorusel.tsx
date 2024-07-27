import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import "./../styles/slider.css"



const items = [
    <div className="item" data-value="1"></div>,
    <div className="item" data-value="2"></div>,
    <div className="item" data-value="3"></div>,
    <div className="item" data-value="4"></div>,
    
];

export const SliderAliceCorusel = () => (
    <AliceCarousel
        mouseTracking
        items={items} 
    />
);


