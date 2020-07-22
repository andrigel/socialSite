import profileReducer from "./reducers/profileReducer";
import dialogsReducer from "./reducers/dialogsReducer";
import sidebarReducer from "./reducers/sidebarReducer";

let store = {
    _state : {
        profilePage: {
            newPostState: '',
            posts: [
                {message: 'Hi, how are you', likes: '1', key: 1},
                {message: 'It\'s my first post', likes: '21', key: 2},
                {message: 'Random message', likes: '14', key: 3},
                {message: 'Some another message', likes: '10', key: 4}
            ],
        },
        dialogsPage: {
            messages: [
                {message: 'Hi friend!'},
                {message: 'How are you?'},
                {message: 'I will be glad to see yoo!'}
            ],
            dialogs: [
                {id: 1, name: 'Dima'},
                {id: 2, name: 'Bohdan'},
                {id: 3, name: 'Tanya'},
                {id: 4, name: 'Ighor'}
            ],
            newMessageBody: ''
        },
        sidebar:''
    },
    getState() {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },
    _callSubscriber () {
        console.log('State was changed')
    },
    dispatch(action)
    {
        this._state.profilePage = profileReducer(this._state.profilePage,action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action);
        this._state.sidebar = sidebarReducer(this._state.sidebar,action);
        this._callSubscriber(this._state);
    }
}

export default store;











