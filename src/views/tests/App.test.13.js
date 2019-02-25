import React, { Component } from 'react';
import '../../css/App.css';
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
    };
  }
  componentWillMount() {
    console.log('1、组件挂载之前');
  }
  componentDidMount() {
    console.log('2、组件挂载完成');
  }
  shouldComponentUpdate() {
    console.log('state更新判断');
    return true;
  }
  componentWillUpdate() {
    console.log('3、组件更新之前');
  }
  componentDidUpdate() {
    console.log('4、组件更新完成');
  }
  componentWillUnmount() {
    console.log('组件卸载');
  }
	handCheckbox = (e) => {
	  const list = this.state.list;
	  list[e].key = !list[e].key;
	  this.setState({
	    list: list
	  });
	}
	handSubmit = (e) => {
	  e.preventDefault();
	  const value = this.state.list.filter(v => {
	    return v.key;
	  }).map(v => {
	    return v.title;
	  });
	  console.log(value);
	}
	render() {
	  const chebox = this.state.list.map((v, k) => {
	    return (
	      <span key={k}>
	        <input type="checkbox" checked={v.key} onChange={this.handCheckbox.bind(this,k)} />{v.title}
	      </span>
	    );
	  });
	  return (
	    <div className="App">
	      <h1>ReactFrom</h1>
	      <form onSubmit={this.handSubmit}>
	        {chebox}
	        <br />
	        <input type="submit" defaultValue="提交" />
	      </form>
	    </div>
	  );
	}
}

export default ReactForm;
