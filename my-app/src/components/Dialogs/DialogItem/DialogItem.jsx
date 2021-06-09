import React from "react";
import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";

////////////JSX ELEMS/////////////
const DialogItem = (props) => {
    let path ="/dialog/" + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}
////////////////////////JSX ELEMS END///////////////

export default DialogItem;