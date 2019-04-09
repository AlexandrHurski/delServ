import React from 'react'
import {connect} from 'react-redux'

class Basket extends React.Component{
    render(){
        
        return(
            <div style={{height:'70px',width:'70px',float:'right',margin:'10px 10px'}}>
                <img src='https://image.flaticon.com/icons/svg/2/2772.svg'/>
                {this.props.basketState.length}
            </div>
            )
    }
}

const mapStateToProps = (state) =>{
    return {
        basketState:state.basket
    }
}
export default connect(mapStateToProps)(Basket)