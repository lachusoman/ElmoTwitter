import * as statusActions from '../constants/actionTypes';

function userProfile(state = [], action) {
  switch (action.type) {
    case statusActions.GET_USERS_SEARCH_SUCCESS:
      return {
        user: action.successMsg
      }
    case statusActions.GET_USERS_SEARCH_FAILURE:
      return {
        errorMsg: action.error,
        errorOccurred: true
      }
    default:
      return state
  }
}

export default userProfile;