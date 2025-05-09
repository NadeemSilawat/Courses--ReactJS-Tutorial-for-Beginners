import React, { Component } from 'react'
import UpdateComponent from './WithCounter.js'

 class HoverCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0,
      }
    }
    increment = () =>{
        this.setState(prevState => {
            return {count: prevState.count + 1}
        })
    }
  render() {
    const {count, increment} = this.props
    return (
      <div>
        <button onMouseOver={increment}>{this.props.name} MouseHover {count} Times </button>
      </div>
    )
  }
}

export default UpdateComponent(HoverCounter) 