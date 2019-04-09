import React from 'react'
import './Menu.css'
import Pizzas from './Pizzas'
import Drinks from './Drinks'
import ControlSize from './Control'

export default class Menu extends React.Component{
    render(){
        return(
            <div className='Menu'id='Menu'>
                <ControlSize />
                PIZZAS
                <Pizzas />
                <Drinks />
            </div>
        )
    }
}