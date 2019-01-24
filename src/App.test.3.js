import React, { Component } from 'react';
import './App.css';

//阻止组件渲染
function WarningBanner(props) {
	if (!props.wran) {
		return null
	}
	return (
		<div>
			Warning!
		</div>
	)
}
//列表 & Keys
const numList = [2, 3, 4, 5, 6];
let ITem = numList.map((v, i) => 
	<li key={i}>{v}</li>
)
class test extends Component {
	constructor(props) {
		super(props);
		this.state = { isWran: true };
		this.hankToggClick = this.hankToggClick.bind(this);
	}
	hankToggClick() {
		this.setState(prevState => ({
			isWran: !prevState.isWran
		}))
	}
	render() {
		return (
			<div className="App">
				<button onClick={this.hankToggClick}>
					{this.state.isWran ? "Show" : "Hide"}
				</button>
				<WarningBanner wran={this.state.isWran} />
				<ul>{ITem}</ul>
			</div>
		)
	}
}
export default test