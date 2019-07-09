import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Icon, Dropdown, Avatar, Badge } from 'antd';
import logo from './logo.png'
import './frame.less'
import { withRouter } from 'react-router-dom'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;




//修饰器，export的时候就不需要写
@withRouter
class Frame extends Component {
  
  handleDropdown = ({key}) => {
    this.props.history.push(key)
  }

  menu = (
    <Menu onClick={this.handleDropdown}>
      <Menu.Item key="/admin/notifications">
        <Badge count={1}>
             通知中心
        </Badge>
      </Menu.Item>
      <Menu.Item key="/admin/settings">
          设置
      </Menu.Item>
      <Menu.Item key="/logOut">
         退出登录
      </Menu.Item>
    </Menu>
  )

  handleSidebar = ({ key }) => {
    this.props.history.push(key)
  }

  render() {
    //console.log(adminRouter)
    return (
      <Layout style={{ minHeight: "100%" }}>
        <Header className="my-header">
          <div className="my-logo">
            <img src={logo} alt="img" />
          </div>
          <div className="my-left-side-UI">
            <Dropdown overlay={this.menu}>
              <div className="my-login">
                <div className="my-avator">
                  <span style={{ marginRight: 24 }}>
                    <Avatar icon="user" />
                  </span>

                </div>
                <p className="ant-dropdown-link" >
                  <Badge count={1}>
                    欢迎您！
                  </Badge>
                  <Icon type="down" />
                </p>
              </div>
            </Dropdown>
          </div>

        </Header>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              selectedKeys={[this.props.location.pathname]}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="user" />
                    用户信息
                      </span>
                }
              >
                {   //传递需要的adminRouter进来，从APP.js里面
                  this.props.menu.map(router => {
                    return (<Menu.Item key={router.pathname}
                      onClick={this.handleSidebar}
                    >
                      <Icon type={router.icon} />
                      {router.title}
                    </Menu.Item>)
                  })
                }
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="laptop" />
                    subnav 2
                      </span>
                }
              >
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub3"
                title={
                  <span>
                    <Icon type="notification" />
                    subnav 3
                      </span>
                }
              >
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              style={{
                background: '#fff',
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              {this.props.children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}


export default Frame