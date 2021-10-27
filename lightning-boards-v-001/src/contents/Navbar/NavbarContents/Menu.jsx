import React,{ useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Card from '../../../components/Card/Card';

function Menu(props) {
    const [showContent, setShowContent] = useState(false)
    const [menu, setMenu] = useState(props.menu)
    const [cards, setCards] = useState([])
    const [dimensions, setDimensions] = useState(props.dimensions)

    function handleCards(id){
        for (var i = 0; i < menu.length; i++){
            if (menu[i].title == id){
                var _cards = [];
                var content = menu[i].content
                if (content.length > 0){
                    setShowContent(true)
                    for (var j = 0; j < content.length; j++){
                        _cards.push(
                            // -80 for avoid scroll bar
                            <div style={{width: (dimensions.width-80)/content.length}} className='column' key={menu[i].content[j].title}>
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
    return (
        <div className='site-header'>
            <div className='site-logo'><Link to='/'><i className="fa fa-bolt"></i><b className='site-logo-text'>Lightning</b><span className='site-logo-text'>boards</span></Link></div>
            <div className='site-menu'>
                {_menu}
            </div>
            {showContent && (
                <div className='site-menu-content' onMouseLeave={()=>setShowContent(false)}>
                    <div className='row'>
                        <div className='column' style={{marginLeft: '20px',marginRight: '20px'}}>
                            {cards}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Menu