import React, { Component } from 'react';
import './App.css'
//函数作为子代
/* 通常情况下，插入 JSX 中的 JavaScript 表达式将被认作字符串、React 元素或这些的一个列表。
然而，props.children 可以像其它属性一样传递任何种类的数据，而不仅仅是 React 知道如何去渲染的数据种类。
例如，如果你有一个自定义组件，你能使其取一个回调作为
props.children： */
/* function Repeat(props) {
  let items = [];
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i));
	}
  return <ul>{items}</ul>;
}

class extend extends Component {
	render() {
		return (
			<div className="App">
				<Repeat numTimes={10}>
					{(index) => <li key={index}>This is {index} list</li>}
				</Repeat>
			</div>
		)
	}
} */
//布尔值、Null 和 Undefined 被忽略
/**
 * false、null、undefined 和 true 都是有效的子代，只是它们不会被渲染。
 */
/* class extend extends Component {
	render() {
		return (
			<div className="App">
				<div>{true}</div>
				<div>{null}</div>
				<div>{undefined}</div>
			</div>
		)
	}
} */
/* function Header(props) {
	return <div>Hello {props.title}</div>
}
class extend extends Component {
	render() {
		let isHide = true;
		return (
			<div className="App">
				{isHide && <Header title="React" />}
			</div>
		)
	}
} */
/**
 * 一个告诫是 JavaScript 中的一些 “falsy” 值 (比如数字0)，它们依然会被 React 渲染。
 * 例如，下面的代码不会像你预期的那样运行，因为当 props.message 为空数组时，它会打印0:
 */
/* function MessageList(props) {
	return <div>{props.message}</div>
}
class extend extends Component {
	render() {
		const props = {
			message: [20]
		}
		return (
			<div className="App">
				{props.message.length>0 && <MessageList message="React" />}
			</div>
		)
	}
} */
/**
 * 如果你想让类似 false、true、null 或 undefined 出现在输出中，你必须先把它转换成字符串 :
 */
class extend extends Component {
	render() {
		return (
			<div className="App">
				<div>{String(true)}</div>
				<div>{String(null)}</div>
				<div>{String(undefined)}</div>
			</div>
		)
	}
}
export default extend