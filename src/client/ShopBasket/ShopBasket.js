import React from 'react'
import './Basket.css'
import {connect} from 'react-redux'
import Item from './Item'
import {Route,NavLink} from 'react-router-dom'
import ContactData from './ContactData'

class ShopBasket extends React.Component{
    constructor(){
        super()
        this.sum=0
    }
    render(){
        console.log(this.props.state.basket)
        console.log(this.props.dispatch)
        return(
            <div className='ShopBasket'>
                <h1>YOUR ORDER IS: </h1>
                <ul>
                    {/* {this.props.state.basket.map((el,index) => {
                        return <Item key={index} />
                    })} */}
                    {this.props.state.basket.map((element,index) => {
                        this.sum +=element[1]
                        return <Item  key={index} name={element[0]} price ={element[1]}/>
                    })}
                </ul>
                <hr></hr>
                <hr></hr>
                Total price:{this.sum}
                <div className='buts'>
                    <NavLink to={this.props.match.path+'/info'}> <div className='yes'>YES</div> </NavLink >
                    <div className='no' onClick={this.props.clearBasket}>CLEAR BASKET</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
       state:state
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        clearBasket:() => dispatch({type:'CLEAR_BASKET'})
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(ShopBasket)




// continueHandler = () => {
//     this.props.history.replace('/checkout/contact')
// }