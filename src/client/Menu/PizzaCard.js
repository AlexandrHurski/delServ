import React from 'react'
import './Menu.css'
import Adder from './Adder'

export default class PizzaCard extends React.Component{

    render(){
        return(
            <div className='PizzaCard'> 
            <p>{this.props.PizzaName}</p>
            <p>{this.props.PizzaPrice}</p>
                <div className='PizzaIMG'><img src={this.props.img}></img></div>
                <Adder clicked={this.props.adder} id={this.props.id} name ={this.props.PizzaName} price = { this.props.PizzaPrice}/>
            </div>
        )
    }
}

