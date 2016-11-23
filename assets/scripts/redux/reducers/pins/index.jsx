const initialState = Object.assign({

});

export default function pins(state = initialState, action) {
  switch (action.type) {
    case 'SET_PINS':
      return Object.assign({}, state, {
        pins: action.pins,
      });
    default:
      return state;
  }
}
