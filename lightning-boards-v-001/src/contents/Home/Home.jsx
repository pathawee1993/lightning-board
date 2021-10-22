import React,{ useState, useEffect } from 'react'
import './Home.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SlideShow from '../../components/SlideShow/SlideShow';

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

function Home(props) {
    const [dimensions, setDimensions] = useState({ 
        height: window.innerHeight,
        width: window.innerWidth
    })

    useEffect(() => {

        window.addEventListener('resize', handleResize)
    
        return _ => {
          window.removeEventListener('resize', handleResize)
        }
    })

    function handleResize() {
        setDimensions({
          height: window.innerHeight,
          width: window.innerWidth
        })
    }

    return (
        <div className='home'>
            <div className='row'>
                <div className='column text-center' style={{width: '50%'}}>
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
                <div className='column' style={{width: '50%'}}>
                    <SlideShow config={{data:slideData, width: dimensions.width/3+'px', height: dimensions.width/3.3+'px', marginTop: '50px'}}/>
                </div>
            </div>
        </div>  
    );
}

export default Home