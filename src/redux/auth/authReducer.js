const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth:false,
    isReady:false
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER_DATA': {
            return {...state, ...action.payload}
        }
        case 'SET_IS_AUTH': {
            return {...state, isAuth:action.isAuth}
        }
        case 'SET_IS_READY': {
            return {...state, isReady:action.isReady}
        }
        default: return state;
    }
}

export default profileReducer;