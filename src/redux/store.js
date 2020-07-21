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
            ]
        }
    },
    getState() {
        return this._state;
    },
    onPostChange (value) {
        this._state.profilePage.newPostState = value;
        this._callSubscriber(this._state);
    },
    addPost () {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostState,
            likesCount: 0
        };
        this.state.profilePage.posts.push(newPost);
        this.state.profilePage.newPostState = '';
        this._callSubscriber(this._state);
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },
    _callSubscriber () {
        console.log('State was changed')
    }
}

export default store;











