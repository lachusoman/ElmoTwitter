import * as statusActions from '../constants/actionTypes';

const destroySession = () => {
    return { type: statusActions.DESTROY_SESSION };
};

export default destroySession;