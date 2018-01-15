import * as React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import App from './App';
import Login from './Login/Login';

export default class Routers extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to={'/'}>登录</Link></li>
            <li><Link to={'/app'}>App</Link></li>
          </ul>
          <Route exact={true} path={'/'} component={Login}/>
          <Route exact={true} path={'/app'} component={App}/>
        </div>
      </Router>
    );
  }
}
