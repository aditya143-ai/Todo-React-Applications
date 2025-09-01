import React, { Component } from 'react';

export default class Todo extends Component{
    constructor(props){
        super(props)
        this.state={
            username: 'aditya',
            password: ''
        }
        this.handleUsernameEvent=this.handleUsernameEvent.bind(this)
        this.handlePasswordEvent=this.handlePasswordEvent.bind(this)
    }

    handleUsernameEvent(event){
        console.log(event.target.value);
        this.setState({
            username:event.target.value
        })
    }

    handlePasswordEvent(event){
        console.log(event.target.value);
        this.setState({
        password: event.target.value
        })
    }
    render()
    {
        return(
        <div>
       Username:<input type="text" name="username" value={this.state.username} onChange={this.handleUsernameEvent}/><br/>
       Password:<input type="password" name="password" value={this.state.password} onChange={this.handlePasswordEvent}/><br/>
        <button>Login</button>
         </div>

         );
    }
}
