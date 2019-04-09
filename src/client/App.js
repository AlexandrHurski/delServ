import React from 'react'
import Layout from './Layout/Layout'
import MainBar from './MainBar/MainBar'
import Menu from './Menu/Menu'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import AdminPanel from './Admin/AdminPanel';
import About from './Layout/About'
import Delivery from './Layout/Delivery'
import ShopBasket from './ShopBasket/ShopBasket'
import {Provider} from 'react-redux'
import store from '../state/store'
import ContactData from './ShopBasket/ContactData'

export default class App extends React.Component{
    componentDidMount(){
        window.scrollTo(0, 0)
    }
    render(){
        return(
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route  path ='/admin' component={AdminPanel}/>    
                        <Layout>
                            <Route path ='/' exact component={MainBar}/>
                            <Route path ='/' exact  component={Menu}/>
                            <Route path ='/delivery' exact component={Delivery}  />
                            <Route  path ='/about'exact  component={About}/>
                            <Route  path='/basket' exact component={ShopBasket}/>
                            <Route  path='/basket/info' component={ContactData}/>
                        </Layout>
                    </Switch>
                </BrowserRouter>
            </Provider>
        )
    }
}