import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// eslint-disable-next-line
import { Comment, Welcome, ActionLink } from './Components/Component.js'; 
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

class Clock extends Component {
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
//点击事件类
class Toggle extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isToggleOn: true
		};
		/**
		 * 必须谨慎对待 JSX 回调函数中的 this，类的方法默认是不会绑定 this
		 * 如果你忘记绑定 this.handleClick 并把它传入 onClick, 当你调用这个函数的时候 this 的值会是 undefined
		 */
		// this.handClick = this.handClick.bind(this);
	}
	//值得注意的是，通过 bind 方式向监听函数传参，在类组件中定义的监听函数，事件对象 e 要排在所传递参数的后面，例如:
	handClick(state, e) {
		e.preventDefault();
		console.log(state);
		//prevstate 表示上一个状态
		this.setState(prevstate => ({
			isToggleOn: !prevstate.isToggleOn
		}))
	}
	render() {
		return (
			<div className="App-margin">
				<button onClick={this.handClick.bind(this,this.state.isToggleOn)}>
					{this.state.isToggleOn ? "YES" : "ON"}
				</button>
			</div>
		)
	}
}

class test extends Component {
	render() {
		return (
			<div className="App">
				<Clock />
				<Clock />
				<Clock />
				<ActionLink />
				<Toggle />
			</div>
		)
	}
}
export default test