import {profileAPI} from "../../api/API";
import * as profileActions from './profileActions'

export const getProfile = (userId) => {
    return (dispatch) => {
        if (!userId) {
            userId = 2;
        }
        profileAPI.getProfile(userId)
            .then(resp => {
                dispatch(profileActions.setUserProfile(resp.data))
            });
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(resp => {
                dispatch(profileActions.setStatus(resp.data))
            });
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(resp => {
                if (resp.data.resultCode === 0) {
                    dispatch(profileActions.setStatus(status))
                }
                console.log(resp)
            });
    }
}