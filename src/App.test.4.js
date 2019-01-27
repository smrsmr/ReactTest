import React, { Component } from 'react';
import './App.css';
import Select from './Components/Select';

let options1 = ['JavaScript', 'TypeScrit', 'Vue', 'React'];
let options2 = ['白菜', '胡萝卜', '芥蓝', '土豆'];
class CompSelect extends Component {
	render() {
		return (
			<div className="App">
				<Select options={options1} />
				<Select options={options2} />
			</div>
		)
	}
}

export default CompSelect