import React from 'react'
import './Admin.css'

export default class Item extends React.Component{
    render(){
        return(
            <div className='Item'>
                <p>address:{this.props.adr}</p>
                <p>name:{this.props.name}</p>
                <p>phone: {this.props.phone}</p>
            </div>
        )
    }
}