const initialState = Object.assign({

});

export default function location(state = initialState, action) {
  switch (action.type) {
    case 'SET_COORDINATES':
      return Object.assign(state, {
        lat: action.lat,
        lng: action.lng,
      });
    default:
      return state;
  }
}
