import React from 'react'
import {render} from 'react-dom'
import {HashRouter as Router,Route,Switch,Redirect } from 'react-router-dom'
import App from './App'
import store from './store'
import {Provider} from "react-redux"

import {mainRouter} from './routes'
import './index.less'

render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path="/admin" render={(routerProps)=>{
                    // Todo 需要登陆才能访问admin,在app中实现
                    return <App {...routerProps} />
                }}/>
                {
                    mainRouter.map(route=>{
                    return  <Route key={route.pathname} path={route.pathname} component={route.component} />
                })
                }
                <Redirect to="/admin" from="/" exact />
                <Redirect to="/404" />
            </Switch>    
        </Router>
    </Provider>,
    document.querySelector('#root')
)