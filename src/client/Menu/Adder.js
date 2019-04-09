import React from 'react'

export default class Adder extends React.Component{
    render(){
        return(
            <div className='Adder' onClick={() =>this.props.clicked([this.props.name,this.props.price])}> ADD THIS</div>
        )
    }
}