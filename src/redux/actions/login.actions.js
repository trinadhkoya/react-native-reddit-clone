import {reduxHelper} from 'redux/utils/redux-helper';
import {USER_LOGIN} from 'redux/actions/actionTypes';

const userLogin = (data) => {
    return ({
        type: reduxHelper(USER_LOGIN).actionSuccess,
        payload: data?.accessToken,
    });
};


export {userLogin};
