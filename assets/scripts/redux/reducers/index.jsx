import { combineReducers } from 'redux';

import global from 'reducers/global';
import location from 'reducers/location';
import pins from 'reducers/pins';

const rootReducer = combineReducers({
  global,
  location,
  pins,
});

export default rootReducer;
