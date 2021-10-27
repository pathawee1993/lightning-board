import React,{ useState, useEffect } from 'react'
import './Home.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SlideShow from '../../components/SlideShow/SlideShow';
import HomeContent1 from './HomeContents/HomeContent1';
import HomeContent1Mobile from './HomeContents/HomeContent1Mobile';
import HomeContent2 from './HomeContents/HomeContent2';
import HomeContent2Mobile from './HomeContents/HomeContent2Mobile';


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

    if (dimensions.width > 760){
        return (
            <div className='home'>
                <HomeContent1 dimensions={dimensions} slideData={slideData}/>
                <HomeContent2/>
            </div>  
        )
    }else{
        return (
            <div className='home'>
                <HomeContent1Mobile dimensions={dimensions} slideData={slideData}/>
                <HomeContent2Mobile/>
            </div>  
        )
    }
}

export default Home