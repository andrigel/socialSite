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

export const getStatus = (userId) => async (dispatch) => {
    const resp = await profileAPI.getStatus(userId);
    dispatch(profileActions.setStatus(resp.data))
}

export const updateStatus = (status) => async (dispatch) => {
    const resp = await profileAPI.updateStatus(status)
    if (resp.data.resultCode === 0) {
        dispatch(profileActions.setStatus(status))
    }
}