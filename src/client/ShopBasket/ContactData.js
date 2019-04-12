import React from 'react'
import './Basket.css'
import {connect} from 'react-redux'
import axios from 'axios'

class ContactData extends React.Component{
    constructor(){
        super()
        this.state={
            adr:'',
            name:'',
            phone:''
        }
    }

    changeAdr = e => this.setState({[e.target.id]:e.target.value})

    // sendFunc =(event) => {
    //     event.preventDefault()
    //     fetch('http://localhost:3000/send',{
    //         mode:'no-cors',
    //         method:'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json',
    //           },
    //         body:JSON.stringify({
    //             // body:{
    //             "adr":this.state.adr,
    //             "name":this.state.name,
    //             "phone":this.state.phone,
    //             // order:this.props.asstate.basket
    //         })
    //             // }
    //     })
    //     // .then(res=> console.log(res.json()))
    //     // .then((data) => console.log(data))
    //     // .catch((err) => console.log(err))
    // }
    
    sendFunc = (e) => {
        console.log('ha')
        e.preventDefault()
        const body = {
            "adr":this.state.adr,
            "name":this.state.name,
            "phone":this.state.phome,
            "order":this.props.asstate.basket
        }
        axios.post('/send', body)
            .then(res => console.log(res.data));
    }

    render(){
        return(
            <div className='Info'>
                <h1>INFO?</h1>
                <input type='text' placeholder='ADRESS'id='adr' onChange={this.changeAdr}></input>
                <input type='text' placeholder='NAME'id='name'onChange={this.changeAdr}></input>
                <input type='text' placeholder='PHONE' id='phone'onChange={this.changeAdr}></input>
                <div className='yes'>OK</div>
                <button onClick={this.sendFunc}>SEND DATa</button>
                <button onClick ={() => console.log(this.state)}>locState</button>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
       asstate:state
    }
}

export default connect(mapStateToProps)(ContactData)    