import React, { Component } from 'react'

 class LifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         firstName: 'Bruce'
      };
      // First Way Constructor
      console.log('LifeCylcleB constructor');     
      }
  
      // Second Way static getDerivedStateFromProps
      static getDerivedStateFromProps(props, state) {
          console.log('LifeCylcleB getDerivedStateFromProps');
          return null;
      }
    componentDiMount(){
            console.log('LifeCylcleB componentDiMount');
        }

         
        // Update Method
    shouldComponentUpdate() {
        console.log('LifeCylcleB shouldComponentUpdate');
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifeCylcleB getSnapshotBeforeUpdate');
        return null;
    }
    componentDidUpdate() {
        console.log('LifeCylcleB componentDidUpdate');
    }


  render() {
    console.log('LifeCylcleB render'); //
    return <div>LifeCylcleB</div>
  }
    
  }


export default LifeCycleB