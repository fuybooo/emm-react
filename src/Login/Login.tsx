import * as React from 'react';
import {Button} from 'antd';
import {Link} from 'react-router-dom';

export default class Login extends React.Component {
  login() {
    console.log(this);
  }

  render() {
    return (
      <div>
        <Button type={'primary'} onClick={this.login}>Login</Button>
        <Link to={'/main'}>Login</Link>
      </div>
    );
  }
}