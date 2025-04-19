import React from 'react';
//step 1:
/* class Welcome extends React.Component{
    render(){
        return <h1>Welcome {this.props.name} a.k.s {this.props.heroName}</h1>
    }   
} */

// step 2:
class Welcome extends React.Component {
  render() {
    const { name, heroName } = this.props;      // Props
    // const {state1,state2} = this.state; // same as a State use
    return (
      <h1>
        Welcome {name} a.k.s {heroName}
      </h1>
    );
  }
}

export default Welcome;
