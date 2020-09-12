import profileReducer from "./profileReducer";
import {addPost} from "./profileActions";



test('length posts shoud be incremented', () => {
    //1. Test data
    const initialState ={
        posts: [
            {message: 'Hi, how are you', likes: '1', key: 1},
            {message: 'It\'s my first post', likes: '21', key: 2},
            {message: 'Random message', likes: '14', key: 3},
            {message: 'Some another message', likes: '10', key: 4}
        ]
    }
    const action = addPost('test data');

    //2.action
    const newState = profileReducer(initialState,action);

    //3. expectation
    expect(newState.posts.length).toBe(5);
})