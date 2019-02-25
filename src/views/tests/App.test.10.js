import React, { Component } from 'react';
import '../../css/App.css';
const axios = require('axios');
//AJAX 
class ajax extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }
  componentDidMount() {
    /* fetch("http://127.0.0.1:3001/getdata")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      ) */
    axios.get('http://127.0.0.1:3001/getArea')
      .then(res => {
        console.log(res.data.data);
        this.setState({
          isLoaded: true,
          items: res.data.data
        });
      }).catch(error=>{console.log(error);}); 
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map((item,index) => (
            <li key={index}>
              {index}-{item}
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default ajax;