import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile/profileReducer";
import dialogsReducer from "./dialogs/dialogsReducer";
import authReducer from "./auth/authReducer";
import logger from 'redux-logger';
import usersReducer from "./users/usersReducer";
import thunk from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import appReducer from "./app/appReducer";

let reducers = combineReducers({
    app:appReducer,
    auth:authReducer,
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    usersPage:usersReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunk,logger));

export default store;