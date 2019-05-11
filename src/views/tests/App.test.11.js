import React, { Component } from 'react';
import './App.css';
//方法参数传递

/* class Func extends Component {
	constructor(props) {
		super(props);
		this.handClick = this.handClick.bind(this);
	}
	handClick(id) {
		console.log(id);
	}
	render() {
		return (
			<div className="App">
				<label>
					姓名
					<input type="text"/>
				</label>
				<input type="button" onClick={()=>this.handClick(123)} value="Click Me" />
			</div>
		)
	}
}

export default Func */

//节流 

/* import throttle from 'lodash.throttle';

class LoadMoreButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleClickThrottled = throttle(this.handleClick, 1000);
	}
	  handleClick() {
    console.log(123);
  }
  componentWillUnmount() {
    this.handleClickThrottled.cancel();
  }
  render() {
    return <button onClick={this.handleClickThrottled}>Load More</button>;
  }
}

export default LoadMoreButton */

//防抖

import debounce from 'lodash.debounce';

class Searchbox extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.emitChangeDebounced = debounce(this.emitChange, 200);
  }

  componentWillUnmount() {
    this.emitChangeDebounced.cancel();
  }
  handleChange(e) {
    this.emitChangeDebounced(e.target.value);
  }

  emitChange(value) {
    this.props.onChange(value);
  }
  render() {
    return (
      <input
        type="text"
        onChange={this.handleChange}
        placeholder="Search..."
        defaultValue={this.props.value}
      />
    );
  }
}

class Debounce extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(id) {
    console.log(id);
  }
  render() {
    return (
      <Searchbox onChange={this.onChange} value="321" />
    );
  } 
}
export default Debounce;
