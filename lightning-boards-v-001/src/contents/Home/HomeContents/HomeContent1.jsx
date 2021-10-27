import React,{ useState, useEffect } from 'react'
import SlideShow from '../../../components/SlideShow/SlideShow'

function HomeContent1(props) {
    return(
        <div className='row content1 justify-center'>
            <div className='column text-center' style={{width: '40%', paddingBottom: '50px'}}>
                <h1>Helping <i className='text-orange'>You</i> Make
                <br/>
                Better Decisions
                <br/>
                in <i className='text-orange'>Real Time</i>.
                </h1>
                <br/>
                <br/>
                <span>Lightningboards connects all your technology applications under one umbrella platform to deliver instant insights</span>
                <br/>
                <br/>
                <div style={{width: '50%', borderTop: '3px solid #F4A442',marginLeft:'auto', marginRight: 'auto', display:'block', marginTop: '50px'}}/>
                <br/>
                <br/>
                <br/>
                <span>Over 3,000 Clients, 20 Industries, 10 Countries</span>
                <br/>
                <br/>
                <br/>
                <button className='home-btn' type="button">REQUEST DEMO</button><button className='home-btn' type="button">LEARN MORE</button>
            </div>
            <div className='column' style={{width: '40%'}}>
                <SlideShow config={{data:props.slideData, width: props.dimensions.width/3+'px', height: props.dimensions.width/3.3+'px', marginTop: '50px'}}/>
            </div>
        </div>
    )
}

export default HomeContent1