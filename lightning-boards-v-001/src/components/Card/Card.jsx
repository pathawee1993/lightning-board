import React,{ useState, useEffect } from 'react'
import './Card.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function Card(props) {

    return (
        <div className='card'>
            <div>
                <img src='https://picsum.photos/150/150'/>
            </div>
            {/* <img src={props.data.image}/> */}
            <div>
                <h2>{props.data.title}</h2>
            </div>
            <div>
                {props.data.detail}
            </div>
        </div>  
    );
}

export default Card