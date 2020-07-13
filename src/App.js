import React from 'react';
import './css/App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from "./components/Profile/MyPosts/Profile";

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
};

export default App;
