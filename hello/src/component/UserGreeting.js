import React, { Component } from 'react'
import Hello from './Hello'

class UserGreeting extends Component {
  
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
    render() {
       
       // Step 4 (short circuit operator)
       
         return this.state.isLoggedIn && <div>Welcome Vishawash</div>
       
        // Step 3 (ternary operator)
       /* return(
        this.state.isLoggedIn ? <div>Welcome Vishawash</div> : <div>Welcome Guest</div>
       )
        */
       // Step 2 (Element Variable)
       /*  let message;
        if(this.state.isLoggedIn){
            message = <div>Welcome Vishawash</div>
        }else{
            message = <div>Welcome Guest</div>
        }

        return (
            <div> {message}</div>
        ) */


    //  Step 1 (if/else)

        // if(this.state.isLoggedIn) {
        //     return (<div>Welcome Vishawash</div>)
        // }else{
        //     return (<div>Welcome Guest</div>)
        // }

    }
}
export default UserGreeting