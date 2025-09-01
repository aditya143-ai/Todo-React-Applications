import React, { Component } from 'react';
//import propsTypes from 'props-types';
import './Counter.css';
export default class Counter extends Component
{
    constructor(){
      super();
      this.state={
        counter: 0
      }
      this.increment=this.increment.bind(this);
      this.decrement=this.decrement.bind(this);
      this.reset=this.reset.bind(this);
    }
  render() {
    return (
     <div className="counter">
      <CounterButton by= {1} incrementMethod={this.increment} decrementMethod={this.decrement} resetMethod={this.reset} ></CounterButton>
      <br/>
      <CounterButton by= {5} incrementMethod={this.increment} decrementMethod={this.decrement} resetMethod={this.reset}></CounterButton><br/>
      <CounterButton by= {10} incrementMethod={this.increment} decrementMethod={this.decrement} resetMethod={this.reset}></CounterButton><br/>
      <CounterButton by= {15} incrementMethod={this.increment}  decrementMethod={this.decrement} resetMethod={this.reset}></CounterButton><br/>
            
        <div><span className="count" style={{fontSize : "20px"}}> 
            {this.state.counter}
        </span>  
        </div>
        <br/>
        <div className="reset">
        <button onClick={this.reset}>Reset</button>
        </div>
     </div>
    );
  }
  increment(by) {
   //console.log(`Increment from parent - ${by}`);
   // this.state.counter++;  //Bad practice, should not set state directly.
    this.setState( 
     (prevState) => { //whatever value to you pass in the setState,it will set it in the exisiting state
         return {counter: prevState.counter + by}
     });
}
decrement(by) {
  //console.log(`Increment from parent - ${by}`);
  // this.state.counter++;  //Bad practice, should not set state directly.
   this.setState( 
    (prevState) => { //whatever value to you pass in the setState,it will set it in the exisiting state
        return {counter: prevState.counter - by}
    });
}
reset(by) {
  //console.log(`Increment from parent - ${by}`);
  // this.state.counter++;  //Bad practice, should not set state directly.
   this.setState( 
    (prevState) => { //whatever value to you pass in the setState,it will set it in the exisiting state
        return {counter: 0}
    });
}

}
class CounterButton extends Component
{
  constructor(){
    super();
    this.state={
      counter: 0
    }
    this.increment=this.increment.bind(this);
    this.decrement=this.decrement.bind(this);
    this.reset=this.reset.bind(this);
  }
    render() {
      // const style ={fontSize = "20px" , padding = "15px 30px" }
      //inline javascript styling
      //render= () => { this arrow method prevents us to explicit bind the function with this 
      return (
      <div className="SecondComponent">
        <button onClick={this.increment}>+{this.props.by}</button>
        <button onClick={this.decrement}>-{this.props.by}</button>
      </div>
    
    );
  }
  increment() {
    //console.log('Increment');
   // this.state.counter++;  //Bad practice, should not set state directly.
    this.setState(
      (prevState) => { //whatever value to you pass in the setState,it will set it in the exisiting state
      return {counter: prevState.counter + this.props.by}
    });
    this.props.incrementMethod(this.props.by);
}
decrement() {
  //console.log('Increment');
 // this.state.counter++;  //Bad practice, should not set state directly.
  this.setState(
    (prevState) => { //whatever value to you pass in the setState,it will set it in the exisiting state
    return {counter: prevState.counter - this.props.by}
  });
  this.props.decrementMethod(this.props.by);
}
reset() {
  //console.log('Increment');
 // this.state.counter++;  //Bad practice, should not set state directly.
  this.setState(
    (prevState) => { //whatever value to you pass in the setState,it will set it in the exisiting state
    return {counter: prevState.counter - this.props.by}
  });
  this.props.resetMethod(this.props.by);
}
}
 
// Counter.defaultProps
// {
//   by : 1
// }

