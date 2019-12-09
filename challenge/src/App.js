import React from 'react';
import './App.css';

class App extends React.Component{
  state = {
    name: '',
    result: ''
  }
  render(){
    return(
      <div className='main'>
        <input ref='input' onChange={this.change}placeholder='seperate numbers and operators by a space'></input>
        <button onClick={this.sum}></button>
        <h1>{this.state.name}</h1>
        <h1>Result: {this.state.result}</h1>
      </div>
    )
  }
  change = () =>{
    this.setState({
      name: this.refs.input.value
    })
  }
  sum = () =>{
    var inpt = this.refs.input.value
    inpt = inpt.split(' ');
    switch(inpt[1]){
      case '+':
        this.setState({
          result: parseInt(inpt[0]) + parseInt(inpt[2])
        })
        break;
      case '*':
        this.setState({
          result: parseInt(inpt[0]) * parseInt(inpt[2])
        })
        break;
      case '-':
        this.setState({
          result: parseInt(inpt[0]) - parseInt(inpt [2])
        })
        break;
      case '/':
        this.setState({
          result: parseInt(inpt[0]) / parseInt(inpt [2])
        })
        break;
    }
  }
}

export default App;