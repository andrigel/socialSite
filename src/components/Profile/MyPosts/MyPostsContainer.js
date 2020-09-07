import React from "react";
import * as profileActions from '../../../redux/actions/profileActions'
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

const mapStateToProps = (state) => {
    return {
        posts:state.profilePage.posts,
        newPostState:state.profilePage.newPostState
    }
}
const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(profileActions,dispatch)
})
const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);
export default MyPostsContainer;
