const initialState ={
    newPostState: '',
        posts: [
    {message: 'Hi, how are you', likes: '1', key: 1},
    {message: 'It\'s my first post', likes: '21', key: 2},
    {message: 'Random message', likes: '14', key: 3},
    {message: 'Some another message', likes: '10', key: 4}
],
    profile:null
}

const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'SET_USER_PROFILE':{
            return {...state,profile:action.profile}
        };
        case 'ADD-POST': {
            const newPost = {
                message: state.newPostState,
                likes: 0,
                key: 6
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost);
            stateCopy.newPostState = '';
            return stateCopy;
        }
        case 'UPDATE-NEW-POST-TEXT': {
            let stateCopy= {...state};
            stateCopy.newPostState = action.newText;
            return stateCopy;
        }
        default: return state;
    }
}
export default profileReducer;