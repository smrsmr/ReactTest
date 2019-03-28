import React, { Component } from 'react';
import './App.css';
/**
 * 表单
 */
//input
/* class NmaeFrom extends Component {
	constructor(porps) {
		super(porps);
		this.state = { value: ""};
		this.handChange = this.handChange.bind(this);
		this.handSubmit = this.handSubmit.bind(this);
	}
	handChange(event) {
		//强制转换大写
		this.setState({value: event.target.value.toUpperCase()})
	}
	handSubmit(event) {
		alert(`This value: ${this.state.value}`);
		event.preventDefault();
	}
	render() {
		return (
			<div className="App">
				<form onSubmit={this.handSubmit}>
					<label>
						InputName:
						<input type="text" value={this.state.value} placeholder="请输入" onChange={this.handChange} />
					</label>
					<input type="submit" value="Submit" />
				</form>
			</div>
		)
	}
} */
//textarea
/* class NmaeFrom extends Component {
	constructor(porps) {
		super(porps);
		this.state = { value: "Hello React textarea"};
		this.handChange = this.handChange.bind(this);
		this.handSubmit = this.handSubmit.bind(this);
	}
	handChange(event) {
		this.setState({value: event.target.value})
	}
	handSubmit(event) {
		alert(`This value: ${this.state.value}`);
		event.preventDefault();
	}
	render() {
		return (
			<div className="App">
				<form onSubmit={this.handSubmit}>
					<label>
						<textarea name="" id="" cols="30" rows="10" value={this.state.value} onChange={this.handChange}></textarea>
					</label>
					<input type="submit" value="Submit" />
				</form>
			</div>
		)
	}
} */
//select
/**
 * 在 React 中，并不使用之前的selected属性，而在根select标签上用value属性来表示选中项。这在受控组件中更为方便，因为你只需要在一个地方来更新组件
 */
/* class NmaeFrom extends Component {
	constructor(porps) {
		super(porps);
		this.state = { value: ""};
		this.handChange = this.handChange.bind(this);
		this.handSubmit = this.handSubmit.bind(this);
	}
	handChange(event) {
		this.setState({value: event.target.value})
	}
	handSubmit(event) {
		alert(`This value: ${this.state.value}`);
		event.preventDefault();
	}
	render() {
		return (
			<div className="App">
				<form onSubmit={this.handSubmit}>
					<label>
						<select value={this.state.value} onChange={this.handChange}>
							<option value="0">请选择</option>
							<option value="JavaScript">JavaScript</option>
							<option value="TypeScript">TypeScript</option>
							<option value="Vue">Vue</option>
							<option value="React">React</option>
							<option value="Angular">Angular</option>
							<option value="Nuxt">Nuxt</option>
						</select>
					</label>
					<input type="submit" value="Submit" />
				</form>
			</div>
		)
	}
} */
class NmaeFrom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChe: true,
      number: 3
    };
    this.handChange = this.handChange.bind(this);
  }
  handChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      //es6 语法
      [name]: value
      //相当于es5
      /**
			  var partialState = {};
				partialState[name] = value;
				this.setState(partialState);
			 */
    });
  }
  render() {
    return (
      <div className="App">
        <form>
          <label>
            <input type="checkbox"
              name="isChe"
              checked={this.state.isChe}
              onChange={this.handChange}
						/>
          </label>
          <br />
          <label>
            <input type="number"
              name="number"
              value={this.state.number}
              onChange={this.handChange}
            />
          </label>
        </form>
      </div>
    );
  }
}
export default NmaeFrom; 