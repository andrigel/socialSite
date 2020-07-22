const initialState ={
    newPostState: '',
        posts: [
    {message: 'Hi, how are you', likes: '1', key: 1},
    {message: 'It\'s my first post', likes: '21', key: 2},
    {message: 'Random message', likes: '14', key: 3},
    {message: 'Some another message', likes: '10', key: 4}
],
}

export const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost = {
                id: 5,
                message: state.newPostState,
                likes: 0
            };
            state.posts.push(newPost);
            state.newPostState = '';
            break;
        case 'UPDATE-NEW-POST-TEXT':
            newState: state.newPostState = action.newText;
            break;
        default: break;
    }
    return state;
}
export default profileReducer;