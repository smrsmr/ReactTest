import React, { Component } from 'react'
import './App.css';
export class ReactForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [
				{
					title: '吃饭',
					key: true
				},
				{
					title: '睡觉',
					key: true
				},
				{
					title: '敲代码',
					key: false
				}
			]
		}
	}
	handCheckbox = (e) => {
		let list = this.state.list;
		list[e].key = !list[e].key;
		this.setState({
			list: list
		})
	}
	handSubmit = (e) => {
		e.preventDefault();
		let value = this.state.list.filter(v => {
			return v.key
		}).map(v => {
			return v.title
		})
		console.log(value);
	}
	render() {
		let chebox = this.state.list.map((v, k) => {
			return (
				<span key={k}>
					<input type="checkbox" checked={v.key} onChange={this.handCheckbox.bind(this,k)} />{v.title}
				</span>
			)
		})
		return (
			<div className="App">
				<h1>ReactFrom</h1>
				<form onSubmit={this.handSubmit}>
					{chebox}
					<br />
					<input type="submit" defaultValue="提交" />
				</form>
			</div>
		)
	}
}

export default ReactForm
