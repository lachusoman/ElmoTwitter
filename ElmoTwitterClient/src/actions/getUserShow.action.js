import * as statusActions from '../constants/actionTypes';
import getUserShow from '../service/getUserShow.service';

const getUserData = function (userId) {
    return dispatch => {
        getUserShow(userId)
            .then(response => {
                dispatch(success(response));
            }, error => {
                dispatch(failure(error.toString()));
            });
    }
}

function success(successMsg) { return { type: statusActions.GET_USERS_SHOW_SUCCESS, successMsg } };
function failure(error) { return { type: statusActions.GET_USERS_SHOW_FAILURE, error } };

export default getUserData;