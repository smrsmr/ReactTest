import React, { Component } from 'react';
import './App.css';
/**
 * 状态提升
 * 需求：
 * 1、两个输入框 一个摄氏度 一个华氏度
 * 2、会自动转换数值
 */
const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
}
//摄氏度转华氏度
function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}
//华氏度转摄氏度
function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}
function BoilingVerdict(props) {
	if (props.celsius >= 100) {
		return <p>温度已达到顶值100+</p>
	}
	return <p>温度正在持续增加。。。</p>
}
//定义input组件
class TemperatureInput extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event) {
		this.props.onTemperatureChang(event.target.value)
	}
	render() {
		let temperature = this.props.temperature;
		let scale = this.props.scale;
		return (
			<div className="App">
				<fieldset>
					<legend>Enter temperature in {scaleNames[scale]}:</legend>
					<input value={temperature}
								onChange={this.handleChange} />
				</fieldset>
			</div>
		)
	}
}
class Calculator extends Component {
	constructor(props) {
		super(props);
		this.state = {
			scale: 'c',
			temperature: '0'
		}
		this.handleChangeCelsius = this.handleChangeCelsius.bind(this);
		this.handleChangeFahrenheit = this.handleChangeFahrenheit.bind(this);
	}
	handleChangeCelsius(temperature) {
		this.setState({scale: 'c', temperature});
	}
	handleChangeFahrenheit(temperature) {
		this.setState({scale: 'f', temperature});
	}

	render() {
		const temperature = this.state.temperature;
		const scale = this.state.scale;
		const celaiue = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
		const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
		return (
			<div className='App'>
				<TemperatureInput
					scale="c"
					temperature={celaiue}
					onTemperatureChang={this.handleChangeCelsius}
				/>
				<br/>
				<TemperatureInput
					scale="f"
					temperature={fahrenheit}
					onTemperatureChang={this.handleChangeFahrenheit}
				/>
				<BoilingVerdict celsius={parseFloat(temperature)} />
			</div>
		)
	}
}

export default Calculator