import React from 'react'
import './Menu.css'
import PizzaCard from './PizzaCard'
import {connect} from 'react-redux'

class Pizzas extends React.Component{
    render(){
        console.log(this.props)
        return(<div className='Pizzas'>
            {this.props.MENUSTATE.map( el =>{
                return <PizzaCard id={el.id} key={el.id} PizzaName={el.PizzaName} PizzaPrice={el.PizzaPrice} img={el.img} adder ={this.props.basketAdder} />
            })}
        </div>)
    }
}

const mapStateToProps = (state) =>{
    return {MENUSTATE:state.menu.pizzas,
    ALLSTATE:state.basket}
}
const mapDispatchToProps = (dispatch) =>{
    return {basketAdder: (el) => dispatch({type:'ADD_BASKET',element:el})}
}

export default connect(mapStateToProps,mapDispatchToProps)(Pizzas)