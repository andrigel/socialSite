import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./reducers/profileReducer";
import dialogsReducer from "./reducers/dialogsReducer";
import sidebarReducer from "./reducers/sidebarReducer";
import authReducer from "./reducers/authReducer";
import logger from 'redux-logger';
import usersReducer from "./reducers/usersReducer";
import thunk from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'

let reducers = combineReducers({
    auth:authReducer,
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    usersPage:usersReducer,
    sidebar:sidebarReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunk,logger));

export default store;