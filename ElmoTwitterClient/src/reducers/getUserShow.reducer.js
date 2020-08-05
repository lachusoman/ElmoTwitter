import * as statusActions from '../constants/actionTypes';

function userShow(state = [], action) {
    switch (action.type) {
        case statusActions.GET_USERS_SHOW_SUCCESS:
            return {
                userShow: action.successMsg
            }
        case statusActions.GET_USERS_SHOW_FAILURE:
            return {
                errorMsg: action.error,
                errorOccurred: true
            }
        default:
            return state
    }
}

export default userShow;