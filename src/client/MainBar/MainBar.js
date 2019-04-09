import React from 'react'
import './MainBar.css'
import axios from 'axios'


export default class MainBar extends React.Component{
    constructor(){
        super()
        this.state={
            datas:[]
        }
        this.cont = this
    }

    // componentDidMount(){
    //     fetch('http://localhost:3000/books')
    //     .then( res =>res.json() )
    //     .then(data => {
    //         this.setState({datas:data})
    //     })
    //     .catch()
    // }

    
    // getServ =()=> {console.log(this.state)}
    //     fetch('http://localhost:3000/books')
    //         .then( res =>res.json() )
    //         .then(data => {
    //             this.setState({datas:data})
    //         })
    //         .catch()
    
    render(){
        return(
            <div className='MainBar'>SALE ALE{this.state.data}
            <button id='mainBarBut' onClick={()=>{console.log(this.state)}}>GETDATAS</button>
            DATA FETCHING FROM MLAB. u can see it console logged by clicking button  (express+mongoose)
            U CAN FILL YOUR SHOPPING CART by clicking ADD at the MENU.   (react+redux)
            U can send POST req to server  at the shop basket( express+react+mongo)
            AND u can see all orders  sending to the server at the ADMIN pannel
            
            </div>
        )
    }
}