import React from 'react';
import {Route,Link,Redirect,Switch} from 'react-router-dom'
import {
  Article,
  ArticleDetail,
  Home,
  User,
  NotFound
}from './views'

function App() {
  return (
    <div >
      <ul>
        <li><Link to="/article">Article</Link></li>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/user">User</Link></li>
      </ul>
       <p>Hello</p>
        <Switch>
          <Route component={ArticleDetail} path="/article/:id" />
          <Route component={Article} path="/article" exact/>
          <Route component={Home} path="/home" />
          <Route component={User} path="/user" />
          <Route component={NotFound} path="/404" />
          <Redirect  to="/home" from="/"  exact  />
          <Redirect to="/404" />
        </Switch>
    </div>
  );
}

export default App;
