import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// eslint-disable-next-line
import { Comment, Welcome } from './Components/Component.js'; 
// eslint-disable-next-line
const comment = {
	logo: logo,
	name: 'smr',
	text: 'I Love You Even Day',
	date: new Date()
}
/* class test extends Component {
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<img src={logo} alt="logo" />
					<h1>Hello React</h1>
				</div>
			</div>
		)
	}
} */

/* class test extends Component {
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<img src={logo} alt="logo" />
					<Welcome name="red" />   
					<Welcome name="yellow" />
					<Welcome name="blue" />
					<Welcome name="pink" />
					<h1>Hello React</h1>
				</div>
			</div>
		)
	}
} */

/* class test extends Component {
	render() {
		return (
			<div>
				<Comment logo={comment.logo} name={comment.name} text={comment.text} date={comment.date} />
				<Welcome name="red" />
				<Welcome name="yellow" />
				<Welcome name="blue" />
			</div>
		)
	}
} */

//定时器 组件转态 组件挂载与卸载

class test extends Component {
	constructor(props) {
		super(props)
		//构造函数是唯一能够初始化 this.state 的地方。
		this.state = {
			date: new Date()
		}
	}
	componentDidMount() {
		//组件挂载
		this.timeID = setInterval(() => this.tick(), 1000);
	}
	componentWillUnmount() {
		//组件卸载
		clearInterval(this.timeID)
	}
	tick() {
		this.setState({
			date: new Date()
		})	
	}
	render() {
		return (
			<div className="App">
				<h1>Hello,Single before time is.</h1>
				<p>
					{this.state.date.toLocaleTimeString()}
				</p>
			</div>
		)
	}
}

export default test