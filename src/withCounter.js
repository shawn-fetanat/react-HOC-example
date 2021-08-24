import React from "react";

const withCounter = (WrappedComponent,incrementNumber) => {
  class WithCounter extends React.Component {

    state = {
      count: 0,
    };
  
    incrementCounter = () => {
      this.setState((prevState) => {
        return { count: prevState.count + incrementNumber };
      });
    };

    render() {
      return <WrappedComponent 
      count={this.state.count} 
      incrementCount={this.incrementCounter}
      {...this.props}
      />;
    }
  }
  return WithCounter;
};

export default withCounter;
