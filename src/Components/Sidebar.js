import React, { Component } from 'react';
import { BrowserRouter as Link} from 'react-router-dom';
import { Menu, Icon, DatePicker, LocaleProvider } from 'antd';
import 'antd/dist/antd.css';
import router from '../router/index';
const { SubMenu } = Menu;
export class Sidebar extends Component {
  componentDidMount() {
    console.log(router);
  }
  render() {
    return (
      router.map((item,key) => (
	      <Menu
	        key={key}
	        theme="dark"
	        mode="inline"
	        onClick={this.MenuClick}
	        selectedKeys={this.state.pathName}
	      >
	        {
	          !item.routes && (
	            <Menu.Item key={item.key}>
	              <Link to={item.path}>
	                <Icon type={item.title.icon} />
	                <span>{item.title.span}</span>
	              </Link>
	            </Menu.Item>
	          )
	        }
	        {
	          item.routes &&  (
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
	    ))
    );
  }
}

export default Sidebar;
