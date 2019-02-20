import React, { Component } from 'react';
import './App.css'
import './css/App.test.6.css';
/**
 * 组合VS继承
 */
/* function Contacts() {
  return <div className="Contacts" />;
}

function Chat() {
  return <div className="Chat" />;
}

function SplitPane(props) {
	return (
		<div className="App-main">
			<div className="App-main-left">
				{props.left}
			</div>
			<div className="App-main-right">
				{props.right}
			</div>
		</div>
	)
}

class extend extends Component {
	render() {
		return (
			<div className="App">
				<SplitPane left={<Contacts />} right={<Chat />} />
			</div>
		)
	}
} */

function FancyBorder(props) {
	return (
		<div className={'red width' + props.color}>
			{props.children}
		</div>
	)
}
function Dialog(props) {
	return (
		<FancyBorder color="blue">
			<h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
		</FancyBorder>
	)
}
class extend extends Component {
	render() {
		return (
			<Dialog
				title="Welcome"
				message="Thank you for visiting our spacecraft!">
			</Dialog>
		)
	}
}
export default extend