import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
//PropTypes
/* function ProTy(props) {
	return <div>Hello,{props.title}</div>
}
class PT extends Component {
	render() {
		return (
			<div className="App">
				<ProTy title="React" />
			</div>
		)
	}
}
ProTy.propTypes  = {
	title: PropTypes.string
} */
//属性默认值
function ProTy(props) {
  return <div>Hello,{props.title}</div>;
}
class PT extends Component {
  render() {
    return (
      <div className="App">
        <ProTy title="Angular" />
      </div>
    );
  }
}
ProTy.propTypes  = {
  title: PropTypes.string
};
ProTy.defaultProps  = {
  title: 'Vue、React'
};
export default PT;