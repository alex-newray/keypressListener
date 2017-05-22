import keypress from 'keypress.js'

export const keypressListener = (state={}, action) => {
  switch (action.type) {
    case "KEYPRESSLISTENER_SET":
      return action.payload
    default:
      return state
  }
}

export const setKeypressListener = (listener) => {
  return {
    type:'KEYPRESSLISTENER_SET',
    payload:listener
  }
}

export const initKeypressListener = () => {
  return (dispatch, getState) => {
    let listener = new keypress.Listener();
    dispatch(setKeypressListener(listener))
  }
}

export const listenKeypressListener = () => {
  return (dispatch, getState) => {
    let listener = getState().keypressListener
    listener.listen()
  }
}

export const stopListenKeypressListener = () => {
  return (dispatch, getState) => {
    let listener = getState().keypressListener
    listener.stop_listening()
  }
}
