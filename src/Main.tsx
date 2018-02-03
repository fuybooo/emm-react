import * as React from 'react';
import {Link} from 'react-router-dom';
import './Main.css';
import {RouteWithSubRoutes} from './index';
export default class Main extends React.Component<any, any> {
  render() {
    return (
      <div>
        <ul>
          <li><Link to={`/main/device`}>Device</Link></li>
          <li><Link to={`/main/application`}>Application</Link></li>
          <li><Link to={`/main/content`}>Content</Link></li>
        </ul>
        {this.props.routes.map((route: any, i: number) => (
          <RouteWithSubRoutes key={i} {...route}/>
        ))}
      </div>
    );
  }
}
