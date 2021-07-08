import React, { Component } from 'react';

class User extends Component{
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        }
    }
    render(){
        return(
            <div>
                <h1>{this.props.firstName}, {this.props.lastName}</h1>
                <h3>Age: {this.state.age}</h3>
                <h3>Hair Color: {this.props.hairColor}</h3>
                <button onClick= {() => {this.setState({age: this.state.age + 1})}}>Birthday</button>
            </div>
        );
    }
}

export default User;