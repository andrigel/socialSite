const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth:false
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER_DATA': {
            return {...state, ...action.userData}
        }
        case 'SET_IS_AUTH': {
            return {...state, isAuth:action.isAuth}
        }
        default: return state;
    }
}

export default profileReducer;