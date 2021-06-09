const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
    messagesData: [
        {id: 1, message: "Dimych"},
        {id: 2, message: "Yo"},
        {id: 3, message: "Privet"},
        {id: 4, message: "Hello"},
        {id: 5, message: "Cho tam?"},
        {id: 6, message: "Yo"},
    ],
    dialogsData: [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andrew"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Viktor"},
        {id: 6, name: "Valera"}
    ],
    newMessageBody: ""
}

const dialogsReducer = (state = initialState, action) => {

    switch ( action.type ) {
        case SEND_MESSAGE: {
            let body = action.body;
            return {
                ...state,
                newMessageBody: "",
                messagesData: [...state.messagesData,{id: 7, message: body}]
            }
        }
        default:
            return state;
    }

}

export default dialogsReducer;

export const sendMessageActionCreater = (body) => {
    return {
        type: SEND_MESSAGE,
        body
    }
}
