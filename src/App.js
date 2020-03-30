import React, { Component } from 'react';
import { connect } from 'react-redux'; /* Code Change */
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

/* Code Change */
const mapStateToProps = (state) => {
  return { items: state.items };
};

export default connect(mapStateToProps)(App);
