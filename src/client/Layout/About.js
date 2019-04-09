import React from 'react'

export default class About extends React.Component{
    componentDidMount(){
        window.scrollTo(0, 0)
    }
    render(){
        return(
            <div style={{width:'100%',height:'600px',backgroundColor:'gray',margin:'100px 0px 0px 0px'}}>
                about info !!!!!!!!
            </div>
        )
    }
}