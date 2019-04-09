import React from 'react'
import {NavLink} from 'react-router-dom'
import axios from 'axios'
import Item from './Item'

class AdminPanel extends React.Component{
    constructor(){
        super()
        this.state ={
            orders:[]
        }
    }
    // getOrders = () => {
        // axios.get('http://localhost:3000/orders')
        // .then(res => this.setState({orders:res.data}))
    // }
    componentDidMount(){
        axios.get('http://localhost:3000/orders')
        .then(res => {this.setState({orders:res.data})})
    }
    stater = () => {
        console.log(this.state.orders)
    }
    render(){
        return(
            <div style={{width:'100%',height:'auto',backgroundColor:'yellow'}}>
                <NavLink to='/#Menu'><div style={{width:'100px',height:'30px',backgroundColor:'pink'}}>BackToMain</div></NavLink>
                {this.state.orders.map(el =>  { return <Item key={el._id} adr={el.adr} phone={el.phone} name={el.name}/>})}
                <button onClick ={this.stater}>hlop</button>
                <div id='orders'></div>
            </div>
        )
    }
}

export default AdminPanel