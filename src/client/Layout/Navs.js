import React from 'react'
import NavItem from './NavItem'
import {NavLink} from 'react-router-dom'
import { HashLink as Link} from 'react-router-hash-link'

export default class Navs extends React.Component{
    render(){
        return(
            <div className='Navs'>
                <Link to='/#Menu'> <NavItem type='MENU'/>  </Link>
                <NavLink to='/delivery'> <NavItem type='DELIVERY'/> </NavLink>
                <NavLink to='/about'> <NavItem type='ABOUT'/></NavLink>
                <NavLink to='/admin'> <NavItem type='ADMIN'/>  </NavLink>
            </div>
        )
    }
}