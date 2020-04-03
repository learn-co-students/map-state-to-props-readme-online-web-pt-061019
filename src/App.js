import React, { Component } from 'react';
import { connect } from 'react-redux'; /* code change - Allows a component to access the changed states in the store */
import './App.css';

class App extends Component {

  handleOnClick() {
    this.props.dispatch({
      type: 'INCREASE_COUNT',
    });
  }

  render() {
    return (
      <div className="App">
        <button onClick={(event) => this.handleOnClick()}>
          Click
        </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
};

// start of code change
// Synces with the store, looking for a change in state that we specify below
const mapStateToProps = (state) => {
  return { items: state.items };
};

// Gives the component access to the changed state (now props) that we specified above
// The component that we want to update is specified and exported
export default connect(mapStateToProps)(App);
// end of code change
