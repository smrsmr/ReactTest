import React from 'react';
/**
 * select 组件
 * 组件名称首字母要大写
 */
function Option(props) {
  const lists = ['请选择',...props.options];
  const op = lists.map(v => <option key={v}>{v}</option>);
  return op;
}
function Selects(props) {
  console.log(props.value);
  return (
    <select onChange={props.onChange} value={props.value}><Option options={props.options} /></select>
  );
}
class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = { options: this.props.options,value: '' };
    this.handChange = this.handChange.bind(this);
  }
  handChange(event) {
    this.setState({ value: event.target.value });
  }
	 render() {
		 return (
			 <Selects options={this.state.options} onChange={this.handChange} value={this.state.value} />
		 );
	 }
}
 
export default Select;