const initialState = Object.assign({
  isLoading: false,
});

export default function global(state = initialState, action) {
  switch (action.type) {
    case 'SET_LOADING':
      return Object.assign({}, state, {
        isLoading: action.isLoading,
      });
    default:
      return state;
  }
}
