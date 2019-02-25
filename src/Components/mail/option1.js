import React, { Component } from 'react';

class option1 extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <h1>option1</h1>
      </div>
    );
  }
}
export default option1;
