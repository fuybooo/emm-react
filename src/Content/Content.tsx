import * as React from 'react';
import {Link} from 'react-router-dom';
import {RouteWithSubRoutes} from '../index';
export default class Content extends React.Component<any, any> {
  render() {
    return (
      <div>
        <Link to={'/main/content/wrap'}>wrap</Link>
        <Link to={'/main/content/app'}>app</Link>
        {this.props.routes.map((route: any, i: number) => (
          <RouteWithSubRoutes key={i} {...route}/>
        ))}
      </div>
    );
  }
}