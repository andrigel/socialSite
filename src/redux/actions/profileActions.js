export const addPost = (text) => {
    return {
        type: 'ADD-POST',
        text:text
    }
}
export const setUserProfile = (profile) => {
    return{
        type:'SET_USER_PROFILE',
        profile:profile
    }
}

export const setStatus = (status) => {
    return {
        type:'SET_STATUS',
        status:status
    }
}