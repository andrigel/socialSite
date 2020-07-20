import {rerenderEntrieTree} from "../render";

const posts = [
    {message:'Hi, how are you', likes:'1', key:1},
    {message:'It\'s my first post', likes:'21', key:2},
    {message:'Random message', likes:'14', key:3},
    {message:'Some another message', likes:'10', key:4}
];

const dialogsData = [
    {id: 1, name: 'Dima'},
    {id: 2, name: 'Bohdan'},
    {id: 3, name: 'Tanya'},
    {id: 4, name: 'Ighor'}
];

const messages = [
    {message:'Hi friend!'},
    {message:'How are you?'},
    {message:'I will be glad to see yoo!'}
];

export let state = {
    profilePage:{
        newPostState:'',
        posts: [
            {message:'Hi, how are you', likes:'1', key:1},
            {message:'It\'s my first post', likes:'21', key:2},
            {message:'Random message', likes:'14', key:3},
            {message:'Some another message', likes:'10', key:4}
        ],
    },
    dialogsPage:{
        messages: [
            {message:'Hi friend!'},
            {message:'How are you?'},
            {message:'I will be glad to see yoo!'}
        ],
        dialogs: [
            {id: 1, name: 'Dima'},
            {id: 2, name: 'Bohdan'},
            {id: 3, name: 'Tanya'},
            {id: 4, name: 'Ighor'}
        ]
    }
};

export const onPostChange = (value) =>
{
    state.profilePage.newPostState = value;
    rerenderEntrieTree(state);
}

export const addPost = (postMessage) =>
{
    let newPost = {
        id:5,
        message:state.profilePage.newPostState,
        likesCount:0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostState='';
    rerenderEntrieTree(state);
}

