import React from 'react';
import { connect }  from 'react-redux';
import './App.css';

import { toggleLights } from './actions.js';


// this is our component, we are access two of its props 'lightsOn' (which comes from mapStateToProps) and 'toggleLights' (which comes from mapDispatchToProps)
function App(props){
  return (
    <div id="room" className={ props.lightsOn ? 'lights-on' : 'lights-off' }>
      <h1> Hello World </h1>
      <button onClick={props.toggleLights}>
        Turn the lights { props.lightsOn ? 'Off' : 'On '}!
      </button>
    </div>
  );
}

// this function is called when the state changes, we get the updated state object, so we use it to set the prop on our component to the value that is in state
const mapStateToProps = (state) => {
  console.log('app component is mapping state to props, lightsOn will be set to the value in state, which is: ', state.lightsOn);
  const props = {
    lightsOn: state.lightsOn,
  }
  return props;
}

// this function is used to assign dispatching functions to our props, so we can fire them when needed (e.g. onClick)
const mapDispatchToProps = (dispatch) => {
  const props = {
    toggleLights: () => {
      console.log('disatching the toggleLights action....');
      dispatch(toggleLights());
    },
  }
  return props;
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
