import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const posts = [
    {message:'Hi, how are you', likes:'1'},
    {message:'It\'s my first post', likes:'21'},
    {message:'Random message', likes:'14'},
    {message:'Some another message', likes:'10'}
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
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogsData={dialogsData} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
