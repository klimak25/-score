import React from "react";
import AwesomeSlider from 'react-awesome-slider';
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import AwesomeSliderStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss'
import Classes from '../App.module.scss'

import img from '../img/wallpapers-nature-0.jpg'
import img1 from '../img/wallpapers-nature-01.jpg'
 import img2 from '../img/wallpapers-nature-02.jpg'
 import img3 from '../img/wallpapers-nature-04.jpg'
 const Slider = () => (
<div className={Classes["img-div"]}>
    <AwesomeSlider
        animation="foldOutAnimation"
        cssModule={[AwesomeSliderStyles, CoreStyles]}
        fillParent={false}
        className={Classes[".aws-btn"]}

    >
        <div data-src={img1} />
        <div data-src={img}/>
        <div data-src={img2}/>
        <div data-src={img3}/>
    </AwesomeSlider>
</div>
);
export default Slider