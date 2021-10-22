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
                <h3>{data.title}</h3>
                <div className='sildeshow-border ' style={{height: 'auto'}}>
                <img src={data.src} style={{width:String(Number(props.config.width.split('px')[0]) - 80)+'px', maxHeight: String(Number(props.config.height.split('px')[0]) - 80)+'px', height: 'auto'}} className='self-center'/>
                </div>
                <br/>
                <br/>
                <span>{data.caption}</span>
            </div>)
        )
    }


    function currentSlide(e) {
        setSlideIndex(Number(e.target.id.split('slideshow-')[1]));
    }

    var dots = [];
    for (var i = 0; i < props.config.data.length; i++){
        if (i != slideIndex){
            dots.push(
                <span className="dot" key={i} id={'slideshow-'+i} onClick={(e)=>currentSlide(e)}></span>
            )
        }else{
            dots.push(
                <span className="dot dot-active" key={i} id={'slideshow-'+i} onClick={(e)=>currentSlide(e)}></span>
            )
        }
    }

    return (
        <div style={{marginTop: props.config.marginTop, marginBottom: props.config.marginTop, height: 'auto'}}>
            <div className="slideshow-container" style={{width:props.config.width}}>
                {slides}
                <a className="prev text-center" onClick={()=>plusSlides(-1)} style={{top: String(Number(props.config.height.split('px')[0])*0.5)+'px',marginTop: String(Number(props.config.marginTop.split('px')[0])*2)+'px'}}>&#10094;</a>
                <a className="next text-center" onClick={()=>plusSlides(1)} style={{top: String(Number(props.config.height.split('px')[0])*0.5)+'px',marginTop: String(Number(props.config.marginTop.split('px')[0])*2)+'px', marginLeft: String(Number(props.config.width.split('px')[0]) - 57)+'px'}}>&#10095;</a>
            </div>
            <br/>
            <br/>
            <div style={{textAlign:'center'}}>
                {dots}
            </div>
        </div>
    )
}

export default SlideShow;