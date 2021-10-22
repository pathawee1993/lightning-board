import React,{ useState, useEffect } from 'react'
import './Navbar.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Card from '../../components/Card/Card';



const myMenu = [
    {
        title: 'Solutions',
        href: '/solutions',
        content:[
            {
                image: '',
                title: 'menu1-1',
                detail: 'asdasd',
                href: ''
            },
            {
                image: '',
                title: 'menu1-2',
                detail: 'asdasd',
                href: ''
            },
            {
                image: '',
                title: 'menu1-3',
                detail: 'asdasd',
                href: ''
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
    const [showContent, setShowContent] = useState(false)
    const [menu, setMenu] = useState(myMenu)
    const [cards, setCards] = useState([])
    useEffect(() => {

        window.addEventListener('resize', handleResize)
    
        return _ => {
          window.removeEventListener('resize', handleResize)
        }
    })

    function handleCards(id){
        for (var i = 0; i < menu.length; i++){
            if (menu[i].title == id){
                var _cards = [];
                var content = menu[i].content
                if (content.length > 0){
                    setShowContent(true)
                    for (var j = 0; j < content.length; j++){
                        _cards.push(
                            <div style={{width: dimensions.width/content.length}} className='column' key={menu[i].content[j].title}>
                                <Card data={menu[i].content[j]}/>
                            </div>
                        )
                    }
                    if (cards !== _cards){
                        setCards(_cards)
                    }
                }else{
                    setShowContent(false)
                }
                break;
            }
        }
    }

    function handleResize() {
        setDimensions({
          height: window.innerHeight,
          width: window.innerWidth
        })
    }

    var _menu = []
    for (var i = 0; i < menu.length; i++){
        _menu.push(
            <div key={menu[i].title} onMouseEnter={(e) => {
                handleCards(e.target.id)
            }}>
                <Link to={menu[i].href} id={menu[i].title}>{menu[i].title}&nbsp;
                    {menu[i].content.length > 0 && <i className='fa fa-angle-down'></i>}
                </Link >
            </div>
        )
    }

    

    if (dimensions.width > 760){
        return (
            <div className='site-header'>
                <div className='site-logo'><i className="fa fa-bolt"></i><b className='site-logo-text'>Lightning</b><span className='site-logo-text'>boards</span></div>
                <div className='site-menu'>
                    {_menu}
                </div>
                {showContent && (
                    <div className='site-menu-content' onMouseLeave={()=>setShowContent(false)}>
                        <div className='row'>
                            <div className='column'>
                                {cards}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }else{
        return (
            <div className='site-header'>
                <div className='site-logo'><i className="fa fa-bolt"></i><b className='site-logo-text'>Lightning</b><span className='site-logo-text'>boards</span></div>
                <div className='site-menu-mobile'>
                    <i className='fa fa-align-justify'></i>
                </div>
            </div>
        )
    }
}

export default Navbar