import {profileAPI} from "../../api/API";
import * as profileActions from '../actions/profileActions'

export const getProfile = (userId) => {
    return (dispatch) => {
        if(!userId){
            userId = 2;
        }
        profileAPI.getProfile(userId)
            .then(resp => {
                dispatch(profileActions.setUserProfile(resp.data))
            });
    }
}