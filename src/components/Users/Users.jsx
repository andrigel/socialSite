import React from "react";
import s from './Users.module.css'
import img from "../../img/userIcon.png";
import Preloader from "../common/Preloader/Preloader";
import {NavLink} from "react-router-dom";

const Users = (props) => {
    const {currentPage} = props;
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
            <div>
                {pages.map(p => <span key={p} onClick={(e) => {
                    props.onPageChanged(p)
                }} className={p === currentPage ? s.selectedPage : ''}>{p}</span>)}
            </div>
            {props.isFetching ?  <Preloader/>:
                props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                    <img src={u.photos.small} className={s.userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {u.followed ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => props.unfollow(u.id)}>Unfollow</button> :
                        <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => props.follow(u.id)}>Follow</button>}
                </div>
            </span>
                    <span>
                <span>
                <div>
                    {u.name}
                </div>
                <div>
                    {u.status}
                </div>
                </span>
                <span>
                    <div>{"u.country"}</div>
                    <div>{"u.city"}</div>
                </span>
            </span>
                </div>)}
        </div>
        }

        export default Users;