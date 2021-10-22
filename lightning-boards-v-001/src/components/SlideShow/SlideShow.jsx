import React,{ useState, useEffect } from 'react'
import './SlideShow.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function SlideShow(props) {
    const [slideIndex, setSlideIndex] = useState(0);
    const [animation, setAnimation] = useState('');

    function plusSlides(value){
        var currentSlideIndex = slideIndex;
        var newSlideIndex = 0;
        if (currentSlideIndex + value > props.config.data.length-1){
            newSlideIndex = 0;
        }else if (currentSlideIndex + value < 0){
            newSlideIndex = props.config.data.length-1;
        }else{
            newSlideIndex = currentSlideIndex + value;
        }
        setSlideIndex(newSlideIndex);
        if (value == 1){
            setAnimation('animate-right');
        }else{
            setAnimation('animate-left');
        }
    }
    var slides = [];
    for (var i = 0; i < props.config.data.length; i++){
        var data = props.config.data[i];
        slides.push(
            (slideIndex == i && <div className={"text-center " +animation} key={i}>
                <h2>{data.title}</h2>
                <img src={data.src} style={{width:'auto', height: String(Number(props.config.height.split('px')[0])*0.6)+'px'}} className='self-center'/>
                <br/>
                <br/>
                <span>{data.caption}</span>
            </div>)
        )
    }

    return (
        <div className="slideshow-container" style={{width:props.config.width, height: props.config.height, marginTop: props.config.marginTop }}>
            {slides}
            <a className="prev text-center" onClick={()=>plusSlides(-1)} style={{top: String(Number(props.config.height.split('px')[0])*0.5)+'px',marginTop: props.config.marginTop}}>&#10094;</a>
            <a className="next text-center" onClick={()=>plusSlides(1)} style={{top: String(Number(props.config.height.split('px')[0])*0.5)+'px',marginTop: props.config.marginTop, marginLeft: String(Number(props.config.width.split('px')[0]) - 50)+'px'}}>&#10095;</a>
        </div>
    )
}

export default SlideShow;