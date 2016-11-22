import { combineReducers } from 'redux';

import location from 'reducers/location';

const rootReducer = combineReducers({
  location,
});

export default rootReducer;
