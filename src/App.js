import React from 'react';
import './App.css';
import Header from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import Profile from "./components/Profile/ProfileContainer";
import Dialogs from "./components/Dialogs/DialogsContainer";
import {Route} from "react-router-dom";
import Users from "./components/Users/UsersContainer";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path='/dialogs' render={() =>
                    <Dialogs/>}/> {/*component={Dialogs}*/}
                <Route path='/profile/:userId?' render={() =>
                    <Profile/>}/>
                <Route path='/users' render={() =>
                    <Users/>}/>
            </div>
        </div>
    );
};
export default App;
