import React, {Component} from 'react';
import './App.css';
import Header from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import Profile from "./components/Profile/ProfileContainer";
import Dialogs from "./components/Dialogs/DialogsContainer";
import {Route, withRouter} from "react-router-dom";
import Users from "./components/Users/UsersContainer";
import LoginPage from './components/Login/LoginContainer'
import {bindActionCreators, compose} from "redux";
import * as appThunks from "./redux/app/appThunks";
import {connect} from "react-redux";
import Preloader from "./components/common/Preloader/Preloader";

class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        if(!this.props.initialized) {return <Preloader/>}
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
                    <Route path='/login' render={() =>
                        <LoginPage/>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (store) => ({
    initialized: store.app.initialized
})

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(appThunks,dispatch)
})

export default compose(
    withRouter,
    connect(mapStateToProps,mapDispatchToProps))(App);
