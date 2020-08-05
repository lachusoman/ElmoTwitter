import * as statusActions from '../constants/actionTypes';
import getUserProfile from '../service/getUserProfile.service';

const getUserDetails = function (userDetails) {
    return dispatch => {
        getUserProfile(userDetails)
            .then(response => {
                if (!response.message) {
                    dispatch(success(response));
                } else {
                    dispatch(failure(response.message));
                }
            }).catch(error => {
                dispatch(failure(error.toString()));
            });
    }
}

function success(successMsg) { return { type: statusActions.GET_USERS_SEARCH_SUCCESS, successMsg } };
function failure(error) { return { type: statusActions.GET_USERS_SEARCH_FAILURE, error } };

export default getUserDetails;