import React,{ useState, useEffect } from 'react'
import SlideShow from '../../../components/SlideShow/SlideShow'

var slideData = [
    {
        title: 'Digital Manufactiring',
        src: 'https://picsum.photos/300/150',
        caption : 'Digital Manufactiring',
        href: ''
    },
    {
        title: 'Solar Monitoring',
        src: 'https://picsum.photos/300/150',
        caption : 'Solar Monitoring',
        href: ''
    },
    {
        title: 'Utility Monitoring',
        src: 'https://picsum.photos/300/150',
        caption : 'Utility Monitoring',
        href: ''
    }
]

function HomeContent1Mobile(props) {
    return(
        <div>
            <div className='row content1'>
                <div className='column text-center' style={{width: '100%'}}>
                    <br/>
                    <br/>
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
                    <span>__________________________</span>
                    <br/>
                    <br/>
                    <br/>
                    <span>Over 3,000 Clients, 20 Industries, 10 Countries</span>
                    <br/>
                    <br/>
                    <br/>
                    <button type="button">Request Demo</button>&nbsp;&nbsp;&nbsp;<button type="button">Learn More</button>
                </div>
                
            </div>
            <div className='row'>
                <div className='column' style={{width: '100%'}}>
                    <SlideShow config={{data:props.slideData, width: props.dimensions.width/1.5+'px', height: props.dimensions.width/1.8+'px', marginTop: '40px'}}/>
                </div>
            </div>
        </div>
    )
}

export default HomeContent1Mobile