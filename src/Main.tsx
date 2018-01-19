import * as React from 'react';
import {Layout, Menu, Breadcrumb} from 'antd';
import {Link} from 'react-router-dom';
import './main.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './Routes';

const {SubMenu} = Menu;
const {Header, Content, Footer} = Layout;
const logo = require('./logo.svg');
interface MenuItem {
  name: string;
  code: string;
  url?: string;
  suffix?: string;
  isParent?: boolean;
  advanced?: boolean;
  children?: MenuItem[];
}
export default class Main extends React.Component {

  getMenuControl() {
    let menu: MenuItem[] = [
      {
        name: '仪表盘',
        code: 'dashboard',
        url: '/app/dashboard'
      },
      {
        name: '设备管理',
        code: 'device_management',
        url: '/app/device'
      },
      {
        name: '用户管理',
        code: 'user_management',
        isParent: true,
        children: [
          {
            name: '用户',
            code: 'user_list',
            url: '/app/user/user'
          },
          {
            name: '部门',
            code: 'department',
            url: '/app/user/department'
          }
        ]
      },
      {
        name: '应用管理',
        code: 'application_management',
        url: '/app/application'
      },
      {
        name: '策略管理',
        code: 'policy_management',
        isParent: true,
        children: [
          {
            name: '安全策略',
            code: 'policy_security',
            url: '/app/policy/security',
          },
          {
            name: '设备策略',
            code: 'policy_device',
            url: '/app/policy/device'
          },
          {
            name: '设备配置',
            code: 'policy_deviceConfig',
            url: '/app/policy/deviceConfig'
          },
          {
            name: '围栏设置',
            code: 'policy_enclosure',
            url: '/app/policy/fencing'
          },
          {
            name: '违规策略',
            code: 'policy_violation',
            url: '/app/policy/violation'
          },
          {
            name: '安全桌面',
            code: 'policy_launcher',
            url: '/app/policy/securityDesk',
            suffix: 'icon-allicon-90 c-12'
          },
          {
            name: '单一应用',
            code: 'policy_app',
            url: '/app/policy/simpleDesk',
            suffix: 'icon-allicon-91 c-11'
          },
          {
            name: '违规网址',
            code: 'policy_url',
            url: '/app/policy/url',
            advanced: true
          },
          {
            name: '敏感词',
            code: 'policy_sensitiveWord',
            url: '/app/policy/sensitiveWord',
            advanced: true
          },
        ]
      },
      {
        name: '内容管理',
        code: 'content_management',
        url: '/app/content'
      },
      {
        name: '推送管理',
        code: 'push_management',
        url: '/app/push'
      },
      {
        name: '日志报表',
        code: '日志报表',
        isParent: true,
        children: [
          {
            name: '日志',
            code: 'log',
            url: '/app/logReport/log'
          },
          {
            name: '报表',
            code: 'report',
            url: '/app/logReport/report'
          },
        ]
      },
      {
        name: '设置',
        code: 'setting',
        isParent: true,
        children: [
          {
            name: '管理员',
            code: 'setting_admin',
            url: '/app/setting/admin'
          },
          {
            name: '企业信息配置',
            code: 'setting_enterprise',
            url: '/app/setting/enterprise'
          },
          {
            name: '客户端版本升级',
            code: 'setting_client',
            url: '/app/setting/client'
          },
          {
            name: '托管认证',
            code: 'setting_trusteeship',
            url: '/app/setting/trusteeship'
          }
        ]
      },
    ];
    let menuControl = [];
    for (let m of menu) {
      let children = [];
      if (m.children) {
        for (let child of m.children) {
          let url: string = child.url || '/';
          children.push(
            <Menu.Item key={child.code}><Link to={url}>{child.name}</Link></Menu.Item>
          );
        }
      }
      menuControl.push(
        <SubMenu key={m.code} title={m.name}>
          {...children}
        </SubMenu>
      );
    }
    return menuControl;
  }

  render() {
    // 默认高度为充满屏幕,最小高度为400px
    let contentClassName = 'main-content';
    contentClassName += ' fill';
    // 当页面需要展示更多内容时使用自适应高度布局
    // contentClassName += ' auto';
    return (
      <Router>
        <Layout>
          <Header>
            <div className={'logo-wrap'}>
              <img src={logo} className="logo" alt="logo"/>
            </div>
          </Header>
          <Header>
            <Menu theme={'dark'} mode={'horizontal'} defaultSelectedKeys={['1']} className={'lh64i'}>
              {this.getMenuControl()}
            </Menu>
          </Header>
          <Content className={'p050i'}>
            <Breadcrumb className={'m16_0i'}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div className={contentClassName}>
              <Routes/>
            </div>
          </Content>
          <Footer className={'tac'}>
            EMM React ©2018 Created by Fuybooo
          </Footer>
        </Layout>
      </Router>
    );
  }
}
