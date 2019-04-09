import React from 'react'

export default class Item extends React.Component{
    render(){
        return(
           <li><p> {this.props.name}:{this.props.price}</p> </li> 
        )
    }
}