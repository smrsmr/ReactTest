import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Layout, Menu, Icon, DatePicker, LocaleProvider } from 'antd';
import '../../css/App.css'
import '../../css/tests/App.test.14.css'
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';
//引入侧边栏组件
import user from '../../Components/User';
import picturesWall from '../../Components/PicturesWall';
import home from '../../Components/Home';
import mail from '../../Components/mail/mail'

const { Header, Sider, Content } = Layout;
const { RangePicker } = DatePicker;
const SubMenu = Menu.SubMenu;
function onChange(date, dateString) {
	console.log(date, dateString);
}
export class Antd extends Component {
	//利用PropTypes记住所跳转每个页面的位置 
	static contextTypes = {
		router: PropTypes.object
	}
	constructor(props, context) {
		super(props, context);
		this.state = {
			collapsed: false,
			pathName: null
		}
	}
	componentWillMount() {
		//组件挂载之前时候 获取url
		const pathname = window.location.pathname.split('/').filter(i => i);
		this.setState({
			pathName: pathname
		});
	}
	toggle = () => {
		this.setState({
			collapsed: !this.state.collapsed,
		});
	}
	MenuClick = () => {
		const pathname = window.location.pathname.split('/').filter(i => i);
		this.setState({
			pathName: pathname
		})
	}
	render() {
		return (
			<Router>
				<Layout style={{ minHeight: '100vh' }}>
					<Sider
						trigger={null}
						collapsible
						collapsed={this.state.collapsed}
					>
						<div className="logo"><img src={require('../../img/logo.svg')} alt="" /></div>
						<Menu
							theme="dark"
							mode="inline"
							onClick={this.MenuClick}
							selectedKeys={this.state.pathName}
						>
							<Menu.Item key="user">
								<Link to="/user">
									<Icon type="user" />
									<span>user</span>
								</Link>
							</Menu.Item>
							<Menu.Item key="picturesWall">
								<Link to="/picturesWall">
									<Icon type="upload" />
									<span>picturesWall</span>
								</Link>
							</Menu.Item>
							<SubMenu key="mail" title={<span><Icon type="mail" /><span>NavigationOne</span></span>}>
								<Menu.Item key="option1"><Link to="/mail/option1">Option 1</Link></Menu.Item>
								<Menu.Item key="option2"><Link to="/mail/option2">Option 2</Link></Menu.Item>
								<Menu.Item key="option3"><Link to="/mail/option3">Option 3</Link></Menu.Item>
								<Menu.Item key="option4"><Link to="/mail/option4">Option 4</Link></Menu.Item>
							</SubMenu>
							<Menu.Item key="4">
								<Icon type="bar-chart" />
								<span className="nav-text">barChart</span>
							</Menu.Item>
							<Menu.Item key="5">
								<Icon type="cloud-o" />
								<span className="nav-text">cloudO</span>
							</Menu.Item>
							<Menu.Item key="6">
								<Icon type="appstore-o" />
								<span className="nav-text">appstoreO</span>
							</Menu.Item>
							<Menu.Item key="7">
								<Icon type="team" />
								<span className="nav-text">team</span>
							</Menu.Item>
							<Menu.Item key="8">
								<Icon type="shop" />
								<span className="nav-text">shop</span>
							</Menu.Item>
						</Menu>
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
							margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
						}}
						>
							<Route exact path="/" component={home} />
							<Route path="/user" component={user} />
							<Route path="/picturesWall" component={picturesWall} />
							<Route path="/mail/:id" component={mail} />
						</Content>
					</Layout>
				</Layout>
			</Router>
		)
	}
}

export default Antd
