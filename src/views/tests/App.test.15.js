import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Layout, Menu, Icon, DatePicker, LocaleProvider } from 'antd';
import '../../css/App.css';
import '../../css/tests/App.test.14.css';
import 'antd/dist/antd.css';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';
// import Sidebar from '../../Components/Sidebar';
import router from '../../router/index';
//404组件
import NoMatch from '../../Components/404/NoMatch';

const { Header, Sider, Content } = Layout;
const { RangePicker } = DatePicker;
const { SubMenu } = Menu;
function onChange(date, dateString) {
  console.log(date, dateString);
}
export class Layouts extends Component {
  constructor(props, context) {
	  super(props, context);
	  this.state = {
	    collapsed: false,
	    pathName: null,
	    isLoaded: false
	  };
  }
  componentWillMount() {
	  //组件挂载之前时候 获取url
	  const pathname = window.location.pathname.split('/').filter(i => i);
	  this.setState({
	    pathName: pathname
	  });
  }
  componentDidMount() {
	  setTimeout(() => {
	    this.setState({
	      isLoaded: true
	    });
	  },800);
  }
	toggle = () => {
	  this.setState({
	    collapsed: !this.state.collapsed
	  });
	}
	MenuClick = () => {
	  const pathname = window.location.pathname.split('/').filter(i => i);
	  this.setState({
	    pathName: pathname
	  });
	}
	render() {
	  const { isLoaded } = this.state;
	  if (!isLoaded) {
	    return <div>Loading...</div>;
	  } else {
	    const MenuTree = router.map((item,key) => (
	      <Menu
	        key={key}
	        theme="dark"
	        mode="inline"
	        onClick={this.MenuClick}
	        selectedKeys={this.state.pathName}
	      >
	        {
	          //一级路由
	          !item.routes && !item.exact && (
	            <Menu.Item key={item.key}>
	              <Link to={item.path}>
	                <Icon type={item.title.icon} />
	                <span>{item.title.span}</span>
	              </Link>
	            </Menu.Item>
	          )
	        }
	        {
	          //二级路由
	          item.routes && !item.exact && (
	            <SubMenu key={item.key} title={<span><Icon type={item.title.icon} /><span>{item.title.span}</span></span>}>
	              {
	                item.routes.map(v => (
	                  <Menu.Item key={v.key}><Link to={v.path}>{v.title}</Link></Menu.Item>
	                ))
	              }
	            </SubMenu>
	          )
	        }
	      </Menu>
	    ));
	    return (
	      <Router>
	        <Layout style={{ minHeight: '100vh' }}>
	           <Sider
	            trigger={null}
	            collapsible
	            collapsed={this.state.collapsed}
	           >
	            <div className="logo"><img src={require('../../img/logo.svg')} alt="" /></div>
	            {MenuTree}
	          </Sider>
	          <Layout>
	            <Header style={{ background: '#fff', padding: 0 }}>
	              <Icon
	                className="trigger"
	                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
	                onClick={this.toggle}
	              />
	              <LocaleProvider locale={zh_CN}>
	                <RangePicker
	                  showTime={{ format: 'HH:mm' }}
	                  format="YYYY-MM-DD HH:mm"
	                  placeholder={['Start Time', 'End Time']}
	                  onChange={onChange}
	                />
	              </LocaleProvider>
	            </Header>
	            <Content style={{
	              margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280
	            }}
	            >
	              {/* <Route exact path="/" render={() => <Redirect to="/welcome" component={Home} />} /> */}
	              <Switch>
	                {
	                  router.map((router,key) => {
	                    if (router.exact) {
	                      return  <Route exact key={key} path={router.path} component={router.component} />;
	                    } else {
	                      if (router.routes) {
	                        return  <Route  key={key} path={`${router.path}/:id`} component={router.component} />;
	                      }
	                      return  <Route  key={key} path={router.path} component={router.component} />;
	                    }
	                  })
	                }
	                <Route component={NoMatch} />
	                {/* <Redirect path="*" to="/" />  //当以上的path均不匹配时，重定向到'/' */}
	              </Switch>
	            </Content>
	          </Layout>
	        </Layout>
	      </Router>
	    );
	  }
	}
}

export default Layouts;
