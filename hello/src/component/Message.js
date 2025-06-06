import React from "react";

class Message extends React.Component{
    constructor(){
        super()
        this.state = {
            message: 'Welcome Visitor'
        }   
    }
    changeMessage(){
        this.setState({
            message: 'Thank you for subscribing'
        })
    }
    againChangeMessage(){
        this.setState({
            message: 'Unscubscribed'
        })
    }
    render(){
        return (
           <div>
            <h1>{this.state.message}</h1>
            <button onClick={() => this.changeMessage() } >Subscribe</button>
            <button onClick={() => this.againChangeMessage() } >Unsubscribe</button>
            </div>
        )
    }   
}

export default Message