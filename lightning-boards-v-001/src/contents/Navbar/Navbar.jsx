import React,{ useState, useEffect } from 'react'
import './Navbar.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Card from '../../components/Card/Card';
import Menu from './NavbarContents/Menu';
import MenuMobile from './NavbarContents/MenuMobile';



const myMenu = [
    {
        title: 'Solutions',
        href: '/solutions',
        content:[
            {
                image: '',
                title: 'menu1-1',
                detail: 'asdasd',
                href: '/solutions/menu1-1'
            },
            {
                image: '',
                title: 'menu1-2',
                detail: 'asdasd',
                href: '/solutions/menu1-2'
            },
            {
                image: '',
                title: 'menu1-3',
                detail: 'asdasd',
                href: '/solutions/menu1-3'
            }
        ]
    },
    {
        title: 'Get Started',
        href: '/get-started',
        content:[
            {
                image: '',
                title: 'menu2-1',
                detail: 'asdasda',
                href: ''
            }
        ]
    },
    {
        title: 'Support',
        href: '/support',
        content:[
            {
                image: '',
                title: 'menu3-1',
                detail: 'asdasd',
                href: ''
            }
        ]
    },
    {
        title: 'About',
        href: '/about',
        content:[
        ]
    },
]


function Navbar() {
    
    const [theme, setTheme] = useState(0)
    const [dimensions, setDimensions] = useState({ 
        height: window.innerHeight,
        width: window.innerWidth
    })
    const [menu, setMenu] = useState(myMenu)
    
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
            <Menu menu={menu} dimensions={dimensions}/>
        )
    }else{
        return (
            <MenuMobile menu={menu} dimensions={dimensions}/>
        )
    }
}

export default Navbar