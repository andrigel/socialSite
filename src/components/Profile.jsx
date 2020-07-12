import React from 'react';
import s from '../css/Profile.module.css'

const Profile = () => {
    return <div className={s.content}>
    <div>
      <img src='https://i.pinimg.com/originals/95/65/85/9565857812f9e868b197aa5f17b120a2.jpg' />
    </div>
    <div>
      ava + description
    </div>
    <div>
      My posts
    </div>
    <div>
      New post
    </div>
    <div>
      <div className={s.item}>
        post 1
      </div>
      <div className={s.item}>
        post2
      </div>
    </div>
  </div>;
}
export default Profile;
