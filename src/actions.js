// this is the constact used for our action type
export const TOGGLE_LIGHTS = 'TOGGLE_LIGHTS';

// this is our action creator, it creates an action for toggling the lights (type === 'TOGGLE_LIGHTS')
export const toggleLights = () => {
  return {
    type: TOGGLE_LIGHTS,
  }
}