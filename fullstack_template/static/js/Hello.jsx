import React from 'react';
import { render } from 'react-dom';
import axios from 'axios';

class Hello extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      greeting: '',
    }
    this.getPythonHello = this.getPythonHello.bind(this)
  }

  getPythonHello() {
    axios.get("http://localhost:5000/hello")
      .then(res => {
        this.setState({ greeting: res.data });
      })
  }

  render() {
    return (
      <div>
        <h1>{this.state.greeting}</h1>
      <hr />
      <button onClick={this.getPythonHello}>
        Say Hello!
      </button>
    </div>
    )  
  }
}
export default Hello;