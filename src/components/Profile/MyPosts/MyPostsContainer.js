import React from "react";
import {addPost, updateNewPostText} from '../../../redux/actions/profileActions'
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        posts:state.profilePage.posts,
        newPostState:state.profilePage.newPostState
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () =>{dispatch(addPost())},
        updateNewPostText: (text)=> {dispatch(updateNewPostText(text))}
    }
}
const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);
export default MyPostsContainer;
