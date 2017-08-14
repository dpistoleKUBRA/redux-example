import { TOGGLE_LIGHTS } from './actions.js';

const initialState = {
  lightsOn: false,
};


/**
 * This is our reducer, all dispatched actions get passed through it
 */
function reducer(state = initialState, action) {
  console.log('reducer gor action with type: ', action.type);
  // we use a switch statement to check the action.type
  switch(action.type){
    // if the action is something we care about, we return a new state object with whatever we need changed (e.g. we toggle the value of lightsOn when the TOGGLE_LIGHTS action is fired)
    case TOGGLE_LIGHTS: {
      console.log('reducer is returning an updated state, with the value for lightsOn flipped...')
      return Object.assign({}, state, {
        lightsOn: !(state.lightsOn)
      })
    }
    default:
      console.log('we do not care about this action, returning state as it was provided to us...');
      return state;
  }
}

export default reducer;
