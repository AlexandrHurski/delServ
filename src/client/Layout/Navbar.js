import React from 'react'
import Logo from './Logo'
import Basket from './Basket'
import Navs from './Navs'
import {NavLink} from 'react-router-dom'

export default class Navbar extends React.Component{
    render(){
        return(
            <div style={{width:'100%',height:'100px',backgroundColor:'red',display:'flex',justifyContent:'space-between',position:'fixed',top:'0px'}}>   
                <NavLink to='/'>  <Logo/> </NavLink>
                <Navs/>
                <NavLink to='/basket'>  <Basket/> </NavLink>
            </div>
        )
    }
}

// ,position:'fixed'