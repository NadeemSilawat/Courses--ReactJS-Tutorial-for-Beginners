import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Greet from './component/Greet.js';
// import Hello from './component/Hello.js';
// import Welcome from './component/Welcome.js';
import Message from './component/Message.js';
import Counter from './component/Counter.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter   />
        {/* <Greet name = "Braico" heroName = "Batman">
          <p>This is children props</p>
        </Greet>
        <Greet name = "Alive" heroName = "Spaiderman">
          <button>Activated </button>
        </Greet>
        <Greet name = "Marco" heroName = "wonderman"/>
        <Hello />
        <Welcome  name= "Nadeem" heroName = "Developer"/> */}
        {/* <Message/> */}
      </div>
    );
  } 
}

export default App;
