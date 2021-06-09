import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import AddMessageForm from "./DialogsForm/DialogsForm";

//////////MAIN JSX ELEM///////////////
const Dialogs = (props) => {
        ///////DATA ARRAYS/////////////////
    let state = props.dialogsPage;

    let dialogsItem = state.dialogsData.map ( (d) => {
        return ( <DialogItem name={d.name} key={d.id} id={d.id} />);
    });

    let messagesItem = state.messagesData.map ((m) => {
            return ( <Message message={m.message} key={m.id} id={m.id} /> );
        });
///////////////////DATA ARRAYS END///////////////
    let AddNewMessage = (e) => {
        console.log(e.newMessageBody)
        props.sendMessage(e.newMessageBody);
    }

/////////////RETURN FUNCTION
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>

                { dialogsItem }
            </div>
            <div className={s.messages}>
                <div>{ messagesItem }</div>
                <div>
                    <AddMessageForm onSubmit={AddNewMessage}/>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;