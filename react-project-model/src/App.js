// src/App.js
import React, { Component } from 'react';
import { Route,Switch,Redirect } from 'react-router-dom'
import './App.css';

import {adminRouter} from  './routes'
import {Frame} from './components'

class App extends Component {
    render() {
        const sidebarRoute = adminRouter.filter(router=>{return(router.isNav===true)})
        //console.log(this.props)
        return (
            <Frame menu={sidebarRoute}>
                <Switch>
                    {
                        adminRouter.map(route=>{
                            return (
                            <Route 
                                key={route.pathname} 
                                path={route.pathname} 
                                exact={route.exact}
                                render={(routerProps)=>{
                                return <route.component {...routerProps}/>
                            }}/>)
                        })
                    }
                    {/* 在这里进来admin之后就会自动跳转到admin/dashboard*/}
                    <Redirect to={adminRouter[0].pathname} from="/admin" exact/>
                    <Redirect to="/404" />
                </Switch>
            </Frame>
        );
    }
}

export default App