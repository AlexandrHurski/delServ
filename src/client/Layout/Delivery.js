import React from 'react'

export default class Delivery  extends React.Component{
    componentDidMount(){
        window.scrollTo(0, 0)
    }
    render(){
        return(
            <div style={{width:'100%',height:'700px',backgroundColor:'pink',marginTop:'100px'}}>
                delivery!S
            </div>
        )
    }
}