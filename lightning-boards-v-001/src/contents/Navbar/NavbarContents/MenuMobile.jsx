import React,{ useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Card from '../../../components/Card/Card';

function MenuMobile(props) {
    const [showMenu, setShowMenu] = useState(false)
    const [menu, setMenu] = useState(props.menu)
    const [dimensions, setDimensions] = useState(props.dimensions)
    const [opened, setOpened] = useState(-1)

    function handleShowMenu(value){
        setShowMenu(value)
    }
    
    function handleSetOpened(value){
        setOpened(value)
    }
    
    // console.log(opened)
    var _menu = []
    if (opened > -1){
        _menu.push(
            <div style={{width: '100%', height: '40px', borderBottom: '1px solid #cccccc'}} key='menu-control'>
                <i className='fa fa-angle-left' onClick={()=>handleSetOpened(-1)} style={{float: 'left', margin: '10px'}}></i>
                <i className='fa fa-times' onClick={()=>handleShowMenu(false)} style={{float: 'right', margin: '10px'}}></i>
            </div>
        )
        for (var i = 0; i < menu[opened].content.length; i++){
            _menu.push(
                <div style={{width: '100%', height: '40px', borderBottom: '1px solid #cccccc'}}  key={'menu-'+i}>
                    <div className='row'>
                        <Link to={menu[opened].content[i].href} className='none-deco'>
                            <div className='column' style={{width: '80%'}}>
                                {menu[opened].content[i].title}
                            </div>
                        </Link>
                    </div>
                </div>
            )
        }
    }else{
        _menu.push(
            <div style={{width: '100%', height: '40px', borderBottom: '1px solid #cccccc'}} key='menu-control'>
                <i className='fa fa-times' onClick={()=>handleShowMenu(false)} style={{float: 'right', margin: '10px'}}></i>
            </div>
        )
        for (var i = 0; i < menu.length; i++){
            _menu.push(
                <div style={{width: '100%', height: '40px', borderBottom: '1px solid #cccccc'}}  key={'menu-'+i}>
                    <div className='row'>
                        <div className='column' style={{width: '80%'}}>
                            <Link to={menu[i].href} className='none-deco'>
                                {menu[i].title}
                            </Link>
                        </div>
                        <div className='column' style={{width: '20%'}}>
                            {menu[i].content.length > 0 &&<i className='fa fa-angle-right' onClick={(e)=>handleSetOpened(Number(e.target.id.substr(5,6)))} style={{float: 'right', margin: '10px'}} id={'menu-'+i}></i>}
                        </div>
                    </div>
                </div>
            )
        }
    }

    return (
        <div className='site-header'>
            <div className='site-logo'><Link to='/'><i className="fa fa-bolt"></i><b className='site-logo-text'>Lightning</b><span className='site-logo-text'>boards</span></Link></div>
            <div className='site-menu-mobile'>
                <i className='fa fa-align-justify' onClick={()=>handleShowMenu(true)}></i>
            </div>
            {showMenu && (
                <div style={{height: dimensions.height, width: '100%', backgroundColor:'rgb(0,0,0,0.3)', zIndex:'1'}}>
                    <div className="site-menu-content-mobile" style={{height: dimensions.height}}>
                        {_menu}
                    </div>
                </div>
            )}
        </div>
    )
}

export default MenuMobile
