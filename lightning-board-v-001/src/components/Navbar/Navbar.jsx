import React,{ useState, useEffect } from 'react'
import './Navbar.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



const myMenu = [
    {
        name: 'menu 1',
        href: '/menu1',
        content:[
            {
                image: '',
                name: 'menu1-1',
                detail: 'asdasd',
                href: ''
            }
        ]
    },
    {
        name: 'menu 2',
        href: '/menu2',
        content:[
            {
                image: '',
                name: 'menu2-1',
                detail: 'asdasda',
                href: ''
            }
        ]
    },
    {
        name: 'menu 3',
        href: '/menu3',
        content:[
            {
                image: '',
                name: 'menu3-1',
                detail: 'asdasd',
                href: ''
            }
        ]
    },
]


function Navbar() {
    const [theme, setTheme] = useState(0)
    const [dimensions, setDimensions] = useState({ 
        height: window.innerHeight,
        width: window.innerWidth
    })
    const [showContent, setShowContent] = useState(false)
    const [content, setContent] = useState([])
    const [menu, setMenu] = useState(myMenu)

    useEffect(() => {
        function handleResize() {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            })
        }
        window.addEventListener('resize', handleResize)
    })

    function handleContent(id){
        for (var i = 0; i < menu.length; i++){
            if (menu[i].name == id){
                setContent(menu[i].content)// div
                break;
            }
        }
    }

    var _menu = []
    for (var i = 0; i < menu.length; i++){
        _menu.push(
            <div key={menu[i].name} onMouseEnter={(e) => {
                setShowContent(true)
                handleContent(e.target.id)
            }}>
                <Link to={menu[i].href} id={menu[i].name}>{menu[i].name}&nbsp;
                    <i className='fa fa-angle-down'></i>
                </Link >
            </div>
        )
    }

    if (window.innerWidth > 760){
        return (
            <div className='site-header'>
                <div className='site-logo'><i className="fa fa-bolt"></i><b className='site-logo-text'>Lightning</b><span className='site-logo-text'>board</span></div>
                <div className='site-menu'>
                    {_menu}
                </div>
                {showContent && (
                    <div className='site-menu-content' onMouseLeave={()=>setShowContent(false)}>
                        {JSON.stringify(content)}
                    </div>
                )}
            </div>
        )
    }else{
        return (
            <div className='site-header'>
                <div className='site-logo'><i className="fa fa-bolt"></i><b className='site-logo-text'>Lightning</b><span className='site-logo-text'>board</span></div>
                <div className='site-menu-mobile'>
                    <i className='fa fa-align-justify'></i>
                </div>
            </div>
        )
    }
}

export default Navbar