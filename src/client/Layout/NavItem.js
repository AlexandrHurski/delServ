import React from 'react'
import './nav.css'


export default class NavItem extends React.Component{
    render(){
        return(
            <div>
                <p>{this.props.type}</p>
            </div>
        )
    }
}