import { combineReducers } from 'redux';
import userProfile from './getUserProfile.reducer';
import userShow from './getUserShow.reducer';
import * as statusActions from '../constants/actionTypes';

const appReducer = combineReducers({
  userProfile,
  userShow,
  state: (state = {}) => state
})

const rootReducer = (state, action) => {
  if (action.type === statusActions.DESTROY_SESSION) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
