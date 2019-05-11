import React, { Component } from 'react';
import './App.css';
//render props

/**
 * 动态获取鼠标坐标位置
*/
/* class Mouse extends Component {
		constructor(props) {
		super(props);
		this.state = {
			x: 0,
			y: 0
		};
		this.handMover = this.handMover.bind(this);
	}
	handMover(event) {
		this.setState({
			x: event.clientX,
			y: event.clientY
		})
	}
	render() {
		return (
			<div className="App">
				<div style={{ height: '500px',background: '#ccc',cursor: 'crosshair' }} onMouseMove={this.handMover}>
					this is 坐标 {this.state.x} {this.state.y} 
				</div>			
			</div>
		)
	}
}
class MouseTracker extends Component {
	render() {
		return (
			<Mouse />
		)
	}
}
export default MouseTracker */

/* class Cat extends Component {
  render() {
    const mouse = this.props.mouse
    return (
      <img src={require('./img/timg.jpg')} alt="图片" width="100" height="100" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
    );
  }
}
class Mouse extends Component {
		constructor(props) {
		super(props);
		this.state = {
			x: 0,
			y: 0
		};
		this.handMover = this.handMover.bind(this);
	}
	handMover(event) {
		this.setState({
			x: event.clientX,
			y: event.clientY 
		})
	}
	render() {
		return (
			<div className="App">
				<div style={{ height: '500px',background: '#ccc',cursor: 'crosshair' }} onMouseMove={this.handMover}>
				  this is 坐标 {this.state.x} {this.state.y} 
					<Cat mouse={this.state} />
				</div>			
			</div>
		)
	}
}
class MouseTracker extends Component {
	render() {
		return (
			<Mouse />
		)
	}
}
export default MouseTracker */

class Cat extends Component {
  render() {
    const {mouse} = this.props;
    return (
      <img src={require('./img/timg.jpg')} alt="图片" width="100" height="100" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
    );
  }
}
class Mouse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0
    };
    this.handMover = this.handMover.bind(this); 
  }
  handMover(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY 
    });
  }
  render() {
    return (
      <div className="App">
        <div style={{ height: '500px',background: '#ccc',cursor: 'crosshair' }} onMouseMove={this.handMover}>
				  this is 坐标 {this.state.x} {this.state.y} 
          {this.props.render(this.state)}
        </div>			
      </div>
    );
  }
}
class MouseTracker extends Component {
  render() {
    return (
      <Mouse render={mouse => (
        <Cat mouse={mouse} />
      )}
      />
    );
  }
}

export default MouseTracker;

