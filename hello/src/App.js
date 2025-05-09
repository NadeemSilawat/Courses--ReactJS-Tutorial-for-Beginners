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
// import NameList from './component/NameList.js';
// import Stylesheet from './component/Stylesheet.js';
// import Inline from './component/Inline.js';
// import LlifeCylcleA from './component/LifeCycleA.js/';
// import ParentComp from './component/ParentComp.js';
// import RefsDemo from './component/RefsDemo';
// import Apple from './component/Apple';
// import FocusInput from './component/FocusInput.js';
// import PortalDemo from './component/PortalDemo.js';
// import Hero from './component/Hero.js';
// import ErrorBoundary from './component/ErrorBoundary.js';

// import CounterClick from './component/CounterClick';
// import HoverCounter from './component/HoverCounter';

import ClickCounterTwo from './component/ClickCounterTwo';
import HoverCounterTwo from './component/HoverCounterTwo';
import User from './component/User.js';


class App extends Component {
  render() {
    return (  
      <div className="App">

        <ClickCounterTwo />
        <HoverCounterTwo />
        <User name= {()=>"Nadeem"}/>

        {/* <CounterClick />
        <HoverCounter/> */}

    {/* 
          <ErrorBoundary>
            <Hero heroname={"Batman"} />
            </ErrorBoundary>
          <ErrorBoundary>
            <Hero heroname={"Superman"} />
          </ErrorBoundary>
          <ErrorBoundary>
            <Hero heroname={"Joker"} />
          </ErrorBoundary>
          <ErrorBoundary /> 
    */}
      {/* <PortalDemo /> */}
        {/* <FocusInput /> */}
        {/* <Apple /> */}
        {/* <RefsDemo /> */}
        {/* <ParentComp /> */}
        {/* <LlifeCylcleA /> */}
        {/* <Form/> */}
        {/* <Inline/> */}
        {/* <Stylesheet primary={true}/> */}
        {/* <NameList/> */}
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
