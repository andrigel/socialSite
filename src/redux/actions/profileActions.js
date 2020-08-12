export const addPost = () => {
    return {
        type: 'ADD-POST'
    }
}
export const updateNewPostText = (text) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: text
    }
}
export const setUserProfile = (profile) => {
    return{
        type:'SET_USER_PROFILE',
        profile:profile
    }
}