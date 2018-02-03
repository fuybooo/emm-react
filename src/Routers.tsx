import * as React from 'react';
import Login from './Login/Login';
import App from './App';
import {Route} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';

export default class Routes extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact={true} path={'/'} component={Login}/>
          <Route exact={true} path={'/main/app'} component={App}/>
        </div>
      </Router>
    );
  }
}
