import React, { Component } from 'react'
import '../../css/App.css'
import '../../css/tests/App.test.14.css'
import { Layout, Menu, Icon, DatePicker, LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';
import Cascaders from '../../Components/Cascader';
const { Header, Sider, Content } = Layout;
const { RangePicker } = DatePicker;
function onChange(date, dateString) {
	console.log(date, dateString);
}
export class Antd extends Component {
	state = {
		collapsed: false,
	};

	toggle = () => {
		this.setState({
			collapsed: !this.state.collapsed,
		});
	}
	render() {
		return (
			<Layout style={{ minHeight: '100vh' }}>
				<Sider
					trigger={null}
					collapsible
					collapsed={this.state.collapsed}
				>
					<div className="logo"><img src={require('../../img/logo.svg')} alt="" /></div>
					<Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
						<Menu.Item key="1">
							<Icon type="user" />
							<span>nav 1</span>
						</Menu.Item>
						<Menu.Item key="2">
							<Icon type="video-camera" />
							<span>nav 2</span>
						</Menu.Item>
						<Menu.Item key="3">
							<Icon type="upload" />
							<span>nav 3</span>
						</Menu.Item>
						<Menu.Item key="4">
							<Icon type="bar-chart" />
							<span className="nav-text">nav 4</span>
						</Menu.Item>
						<Menu.Item key="5">
							<Icon type="cloud-o" />
							<span className="nav-text">nav 5</span>
						</Menu.Item>
						<Menu.Item key="6">
							<Icon type="appstore-o" />
							<span className="nav-text">nav 6</span>
						</Menu.Item>
						<Menu.Item key="7">
							<Icon type="team" />
							<span className="nav-text">nav 7</span>
						</Menu.Item>
						<Menu.Item key="8">
							<Icon type="shop" />
							<span className="nav-text">nav 8</span>
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
						<Cascaders />
					</Content>
				</Layout>
			</Layout>
		)
	}
}

export default Antd
