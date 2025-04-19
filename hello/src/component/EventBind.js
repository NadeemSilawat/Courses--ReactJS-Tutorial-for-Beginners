import React, { Component } from 'react'

 class EventBind extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       message: 'hello',
       
    }
    this.clickHandler = this.clickHandler.bind(this) // Third method

  }

  clickHandler() {
    this.setState({
      message: 'Goodbye'
    })
  }
    render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */} {/*  First method */}
        {/* <button onClick={() => this.clickHandler()}>Click</button>  */} {/*second Method  */}
        <button onClick={this.clickHandler()}>Click</button> 
      </div>
    )
  }
}

export default EventBind