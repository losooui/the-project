import * as types from './types';
import user from '../../data/users.json';
import * as api from '../../auth/api';


//Logs in a user with his email and password, a function is called in for success and error

export function login(email, password, successCallback, errorCallback) {
    return (dispatch) => {
        api.login(email, password, function(success, data, error) {

            if (success) {
                dispatch(setLoggedInState(true, data));
                console.log('success: ' + success);
                successCallback();

            } else if (error) {
                 dispatch(setLoggedInState(false, null));
                 console.log('success: ' + success);
                 errorCallback(error);
            }  
        });
    

    }
}

export function resetPassword(email, successCallback, errorCallback) {
    return (dispatch) => {
        api.resetPassword(email, function (success, error) {
            if (success) successCallback();
            else if (error) errorCallback(error)
        });
    };
}

//TODO: add checked logged in status function to work with splashscreen

export function register(data, successCallback, errorCallback) {
    return (dispatch) => {
        api.register(data, function (success, data, error) {
            if (success) {
                dispatch(setLoggedInState(true, data));
                successCallback(data);
            }
            else if (error) {
                dispatch(setLoggedInState(false, null));
                errorCallback(error);

            }
        });
    };
}

/*export function createUser(user, successCallback, errorCallback) {
    return (dispatch) => {
        api.createUser(user, function (success, data, error) {
            if (success) {
                dispatch({type: t.LOGGED_IN, data: user});
                successCB();
            }else if (error) errorCB(error)
        });
    };
}*/

export function setLoggedInState(loggedInState, data) {
    if (loggedInState) {
        return {
            type: types.LOGGED_IN,
            data: data,
        }
    } else if (!loggedInState) {
        return {
            type: types.LOGGED_OUT,
            data: data,
        }
    }
}