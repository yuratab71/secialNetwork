import Dialogs from "./Dialogs";
import {sendMessageActionCreater} from "../../Redux/dialogsReducer.js";
import {connect} from "react-redux";
import AuthRedirectComponent from "../RedirectHOC/RefirectHOC";
import { compose } from "redux";

let mapStateToProps = (state) => {
    return {
       dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageActionCreater(newMessageBody));
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    AuthRedirectComponent
)(Dialogs);

 