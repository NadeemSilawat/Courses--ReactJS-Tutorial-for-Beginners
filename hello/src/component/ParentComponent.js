import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        ParentName: 'Parent'
      }
      this.greetParent = this.greetParent.bind(this);
    }
    greetParent(childName) {
        alert(`hello ${this.state.ParentName} from ${childName}`)
    }

    render() {
    return (
      <div>
        {/* <button onClick={this.greetParent.bind(this)}>Clicked</button> */}
        <ChildComponent greetHandler={this.greetParent}/>
      </div>
    )
  }
}

export default ParentComponent