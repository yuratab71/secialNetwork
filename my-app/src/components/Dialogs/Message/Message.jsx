import React from "react";
import s from "./Message.module.css";

////////////JSX ELEMS/////////////
const Message = (props) => {

    return (
        <div className={s.dialog}>
            {props.message}

        </div>
    );
}
////////////////////////JSX ELEMS END///////////////

export default Message;