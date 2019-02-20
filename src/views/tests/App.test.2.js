import React, { Component } from 'react';
import './App.css';
/**
 * 条件渲染
 */
/* function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Login(props) {
	const isLogin = props.isLogin;
	if (isLogin) {
		return <UserGreeting />
	} 
	return <GuestGreeting />
}

class test extends Component {
	render() {
		return (
			<div className="App">
				<Login isLogin={true} />
			</div>
		)
	}
} */

function Login(props) {
	return (
		<button onClick={props.onClick}>
			Login
		</button>
	)
};
function LoginOut(props) {
	return (
		<button onClick={props.onClick}>
			LoginOut
		</button>
	)
};
//与运算符 &&
function MaxBox(props) {
	let unreadMessages = props.unreadMessages;
	return (
		<div>
			<h1>与运算符 &&</h1>
			{unreadMessages.length > 3 &&
				<h2>
					This Max 3
				</h2>
			}
		</div>
	)
};
//三目运算符
function Ternary(props) {
	let unreadMessages = props.unreadMessages;
	return (
		<div>
			<h1>三目运算符</h1>
			{unreadMessages.length >= 3 ? <h2>数组长度大于等于3</h2> : <h2>数组长度小于3</h2>}
		</div>
	)
}
//
function Rotate(props) {
	return (
		<p className={props.styles}></p>
	)
}
let Array = ['red', 'yellow'];
class test extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoggedIn: false
		};
		this.handleLoginClick = this.handleLoginClick.bind(this);
		this.handleLogoutClick = this.handleLogoutClick.bind(this);
	}
	handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }
	render() {
		const isLoggedIn = this.state.isLoggedIn;
		let button = null;
		if (isLoggedIn) {
			button = <Login onClick={this.handleLogoutClick} />
		} else {
			button = <LoginOut onClick={this.handleLoginClick} />

		}
		return (
			<div className="App">
				{button}
				<MaxBox unreadMessages={Array} />
				<Ternary unreadMessages={Array} />
				<Rotate styles="App-red App-rotate App-rotate-t1" /> 
				<Rotate styles="App-red App-rotate App-rotate-t2" /> 
				<Rotate styles="App-red App-rotate App-rotate-t3" /> 
				<Rotate styles="App-red App-rotate App-rotate-t4" /> 
			</div>
		)
	}
}
export default test