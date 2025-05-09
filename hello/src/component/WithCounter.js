import React from 'react';

const UpdateComponent = (OriginalComponent) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0,
      }
    }
    incrementCount = () => {
        this.setState(prevState => {
            return {count: prevState.count + 1}
        })
    }
    // incrementHover = () => {
    render() {
      return (
        <OriginalComponent
          count={this.state.count}
          increment={this.incrementCount}
        />
      );
    }
  }
  return NewComponent;
};

export default UpdateComponent;
