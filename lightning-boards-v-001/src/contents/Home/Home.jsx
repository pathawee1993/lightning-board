import React,{ useState, useEffect } from 'react'
import './Home.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function Home(props) {

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

                </div>
            </div>
        </div>  
    );
}

export default Home