import React, { Component } from 'react'

class Apple extends Component {
    constructor(props) {
      super(props)
         this.inputRef = React.createRef();
    }
    componentDidMount() {
        this.inputRef.current.focus();
    }
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} placeholder="Enter your name" />
        <button onClick={() => alert(this.inputRef.current.value)}>Submit</button>
      </div>
    )
  }
}

export default Apple