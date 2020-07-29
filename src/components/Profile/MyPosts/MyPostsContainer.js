import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/actions/ProfileActions'


const MyPosts = (props) => {
    const someElement = React.createRef();
    const addPost = () => {
        props.dispatch(addPostActionCreator())
    }
    const onPostChange = (e) => {
        props.dispatch(updateNewPostTextActionCreator(e.target.value))
    }
    return (
        <div className={s.postsBlock}>
            <div><h3>My posts</h3></div>
            <div>
                <div>
                    <textarea ref={someElement} value={props.newPostState} onChange={onPostChange}
                              placeholder='Enter text'/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {props.posts.map(post => <Post key={post.key} message={post.message} likes={post.likes}/>)}
            </div>
        </div>
    );
};
export default MyPosts;
