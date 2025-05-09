import React, { Component } from 'react'
import UpdateComponent from './WithCounter.js'

 class CounterClick extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0,
        //  count1: 0
      }
    }
    increment = () =>{
        this.setState(prevState => {
            return {count: prevState.count + 1}
        })
    }
    // incrementHover = () =>{
    //     this.setState(prevState => {
    //         return {count1: prevState.count1 + 1}
    //     })
    // }
  render() {
    // const {count} = this.state
    // const {count1} = this.state

    const {count , increment} = this.props
        return (
      <div>
        {/* <h1>{count}</h1> */}
        <button onClick={increment}>{this.props.name} Click {count} Times</button>

        {/* <h2 onMouseOver={this.incrementHover}>Hover {count1} Times</h2> */}
      </div>
    )
  }
}

export default UpdateComponent(CounterClick)