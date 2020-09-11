import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utills/validators/validators";
import {TextArea} from "../../common/FormsControlls/FormsControls";

const MyPosts = React.memo(props => {
    const addPost = (values) => {
        props.addPost(values.newPostText)
    }
    return (
        <div className={s.postsBlock}>
            <div><h3>My posts</h3></div>
            <MyPostsReduxForm onSubmit={addPost}/>
            <div className={s.posts}>
                {props.posts.map(post => <Post key={post.key} message={post.message} likes={post.likes}/>)}
            </div>

        </div>
    );
})

const maxLength10 = maxLengthCreator(10);

const MyPostsForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div><Field component={TextArea} name={'newPostText'} placeholder={'PostMessage'}
                    validate={[requiredField,maxLength10]}/>
        </div>
        <div><button>Add post</button></div>
    </form>
}
const MyPostsReduxForm = reduxForm({
    form:'addPost'
})(MyPostsForm);
export default MyPosts;
