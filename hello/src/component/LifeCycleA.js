import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB.js'

 class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         firstName: 'Bruce'
      };
      // First Way Constructor
      console.log('LifeCylcleA constructor');     
      }
  
      // Second Way static getDerivedStateFromProps
      static getDerivedStateFromProps(props, state) {
          console.log('LifeCylcleA getDerivedStateFromProps');
          return null;
      }
      componentDiMount(){
            console.log('LifeCylcleA componentDiMount');
        }
    // Third Way componentDidMount


    // Update Method
    shouldComponentUpdate() {
        console.log('LifeCylcleA shouldComponentUpdate');
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifeCylcleA getSnapshotBeforeUpdate');
        return null;
    }
    componentDidUpdate() {
        console.log('LifeCylcleA componentDidUpdate');
    }
    Changestate = () => {
        this.setState({
            firstName: 'Clark'
        })
    }

  render() {
    console.log('LifeCylcleA render'); //
    return(
        <div>
            <div>LifeCylcleA</div>
            <button onClick={this.Changestate}>Change State</button>
            <LifeCycleB />

        </div>
    )
  }
    
  }


export default LifeCycleA