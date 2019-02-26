import React, { Component } from 'react';

class option1 extends Component {
	state = {
	  html: '<p>优化效果很不错哦</p>'
	}
	componentDidMount() {
    
	}
	render() {
	  return (
	    <div>
	      {
	        // React 渲染html
	      }
	      <h1 dangerouslySetInnerHTML={{__html:this.state.html}}></h1>
	    </div>
	  );
	}
}
export default option1;
