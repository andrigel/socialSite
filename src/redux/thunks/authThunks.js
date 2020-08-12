import {authAPI} from "../../api/API";
import * as authActions from '../actions/authActions'
export const getAuth = () => {
    return (dispatch) => {
        authAPI.getAuth()
            .then(resp => {
                const {login,id,email} = resp.data.data;
                dispatch(authActions.setUserData(id,login,email));
                dispatch(authActions.setIsAuth(true));
            });
    }
}