import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <nav className='nav'>
        <div>
          Profile
        </div>
        <div>
          Messages
        </div>
        <div>
          News
        </div>
        <div>
          Music
        </div>
      </nav>
      <div className='content'>
        <div>
          <img src='https://i.pinimg.com/originals/95/65/85/9565857812f9e868b197aa5f17b120a2.jpg' />
        </div>
        <div>
          ava + description
        </div>
        <div>
          My posts
        </div>
        <div>
          New post
        </div>
        <div>
          <div>
            post 1
          </div>
          <div>
            post2
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
