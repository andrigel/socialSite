import {authAPI} from "../../api/API";
import * as authActions from '../actions/authActions'
import {stopSubmit} from "redux-form";

export const getAuth = () => {
    return (dispatch) => {
        authAPI.getAuth()
            .then(resp => {
                if (resp.data.resultCode === 0) {
                    const {login, id, email} = resp.data.data;
                    dispatch(authActions.setUserData(id, email, login));
                    dispatch(authActions.setIsAuth(true));
                }
                dispatch(authActions.setIsReady(true))
            });
    }
}

export const login = ({email, password, rememberMe}) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(resp => {
            if (resp.data.resultCode === 0) {
                dispatch(getAuth())
            } else {
                const message = resp.data.messages[0].length > 0 ? resp.data.messages[0] : 'Some error';
                const action = stopSubmit('login', {_error: message});
                dispatch(action)
            }
        })
}
export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(resp => {
            dispatch(authActions.setUserData(null, null, null));
            dispatch(authActions.setIsAuth(false));
        })
}