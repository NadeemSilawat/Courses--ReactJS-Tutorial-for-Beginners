import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Form from './component/Form';
// import Greet from './component/Greet.js';
// import Hello from './component/Hello.js';
// import Welcome from './component/Welcome.js';
// import Message from './component/Message.js';
// import Counter from './component/Counter.js';
// import FunctionClick from './component/FunctionClick.js';
// import ClassClick from './component/ClassClick.js';
// import EventBind from './component/EventBind.js';
// import ParentComponent from './component/ParentComponent.js';
// import UserGreeting from './component/UserGreeting.js';
import NameList from './component/NameList.js';
// import Stylesheet from './component/Stylesheet.js';
// import Inline from './component/Inline.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Form/> */}
        {/* <Inline/> */}
        {/* <Stylesheet primary={true}/> */}
        <NameList/>
        {/* <UserGreeting/> */}
        {/* <ParentComponent /> //Methos as Props */}  
        {/* <FunctionClick />  */}
        {/* <ClassClick /> */}
        {/* <EventBind /> */}
         {/* <Counter   /> */}
        {/* <Greet name = "Braico" heroName = "Batman"> */}
        {/* //   <p>This is children props</p> */}
        {/* // </Greet> */}
        {/* // <Greet name = "Alive" heroName = "Spaiderman"> */}
          {/* <button>Activated </button> */}
        {/* </Greet> */}
        {/* <Greet name = "Marco" heroName = "wonderman"/> */}
        {/* <Hello /> */}
          {/* <Welcome  name= "Nadeem" heroName = "Developer"/>   */}
         {/* <Message/>  */}
      </div>
    );
  } 
}

export default App;
