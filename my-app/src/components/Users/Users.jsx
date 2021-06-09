import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/users.png";
import { NavLink } from "react-router-dom";

let Users = (props) => {    
    let pagesCount = Math.ceil(props.totalUsersCount/props.pageSize);    
        let pages = [];
        for(let i = 1; i <= pagesCount; i++){
            pages.push(i);
        }
    return <div>
            <div>
                {pages.map(el => {
                    return <span 
                    onClick={() => {props.onPageChanged(el)} }
                    className={props.currentPage === el && styles.selectedPage}>{el}</span>
                })}
            </div>
        <button onClick={props.getUsers}>Get Users</button>
        {
            props.users.map( el => <div key={el.id}>
                <span>
                   <div>
                       <NavLink to={"profile/" + el.id}>
                        <img alt="avatar" src={el.photos.small != null ? el.photos.small : userPhoto} className={styles.userPhoto}/>
                        </NavLink>
                   </div>
                   <div>
                       { el.followed 
                       ? <button disabled={props.followingInProgress.some(id => id === el.id)} onClick={() => {props.getFollow(el.id)}}>Unfollow</button> 
                       :<button disabled={props.followingInProgress.some(id => id === el.id)} onClick={() => {props.getUnfollow(el.id);}}>Follow</button>}                          
                   </div>
                </span>
                <span>
                    <span>
                        <div>
                            {el.name}
                        </div>
                        <div>
                            {el.status}
                        </div>
                    </span>
                    <span>
                        <div>{"el.location.sity"}</div>
                        <div>{"el.location.country"}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
} 

export default Users;