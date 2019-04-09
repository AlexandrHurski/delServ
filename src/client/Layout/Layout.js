import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import {withRouter} from 'react-router-dom'

class Layout extends React.Component{
    render(){
        return(
            <div>
                <Navbar/>
                {this.props.children}
                <Footer/>
            </div>
        )
    }
}
export default withRouter(Layout)