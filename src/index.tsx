import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import './index.css';
import Main from './Main';
import Login from './Login/Login';
import Application from './Application/Application';
import Content from './Content/Content';
import Device from './Device/Device';
import Wrap from './Wrap/Wrap';
import App from './App';
const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/main',
    component: Main,
    routes: [
      {
        path: '/main/application',
        component: Application
      },
      {
        path: '/main/content',
        component: Content,
        routes: [
          {
            path: '/main/content/wrap',
            component: Wrap
          },
          {
            path: '/main/content/app',
            component: App
          }
        ]
      },
      {
        path: '/main/device',
        component: Device
      },
    ]
  }
];
export const RouteWithSubRoutes = (route: any) => (
  <Route path={route.path} render={props => (
    <route.component {...props} routes={route.routes}/>
  )}/>
);
ReactDOM.render(
  <Router>
    <div>
      {/*<Route exact={true} path={'/'} component={Login}/>*/}
      {/*<Route path={'/main'} component={Main}/>*/}
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route}/>
      ))}
    </div>
  </Router>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
