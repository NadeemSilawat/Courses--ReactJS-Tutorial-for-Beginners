import React, { Component } from 'react';

class Counters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  incrementCount = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };
  render() {
    return (
       <div>
          {this.prop.render(this.state.count, this.incrementCount)}
        </div>
   )
  }
}

export default Counters;
