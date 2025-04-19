import React ,{Component} from "react"; // "rce"(shortcut) for class component

class Counter extends Component{

    constructor(){
        super()
        this.state = {
            count: 0
        }
    }
 increment(){
    this.setState({
        count: this.state.count + 1
    }, () =>{console.log("Callback value", this.state.count)})
    console.log(this.state.count)
  
    // this.setState((prevState) => ({
    //     count: prevState.count + 1
    // }))
    // console.log(this.state.count)
 }
 decrement(){
    this.setState({
        count: this.state.count - 1
    })
    console.log(this.state.count)
 }

 incrementFive(){
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
 }

    
    render(){
        return(
            <>
                <div> Count - {this.state.count}</div>
                <button onClick={() => this.incrementFive()}>Increment</button>
                <button onClick={() => this.decrement()}>Decrease</button>
            </>
        )
    }
}
export default Counter;