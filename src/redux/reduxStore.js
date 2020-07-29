import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./reducers/profileReducer";
import dialogsReducer from "./reducers/dialogsReducer";
import sidebarReducer from "./reducers/sidebarReducer";
import logger from 'redux-logger';
import usersReducer from "./reducers/usersReducer";

let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    usersPage:usersReducer,
    sidebar:sidebarReducer
});

let store = createStore(reducers,applyMiddleware(logger));

export default store;