import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {

    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: "Hi, how are you?", likesCount: 0},
                {id: 2, message: "Blabla", likesCount: 69},
                {id: 3, message: "Yo, wat`s up?", likesCount: 69},
                {id: 4, message: "Hello?", likesCount: 69},
                {id: 5, message: "Did you ge up?", likesCount: 69}
            ],
            newPostText: "some txt"

        },
        dialogsPage: {
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
        },
        sidebar: {
            friends: [
                {
                    id: 0,
                    ava: "https://www.google.com/search?q=cats&sxsrf=ALeKk01V5_huF0DRi4p_yoxc4IjrE6NaMA:1607302272625&tbm=isch&source=iu&ictx=1&fir=0V922RrJgQc9SM%252C5qEHfJOysK_DwM%252C_&vet=1&usg=AI4_-kT_v_f41ILeFOvntDphuo91bDntTQ&sa=X&ved=2ahUKEwjzk4bI07rtAhVMqaQKHXOgCs4Q9QF6BAgOEAE#imgrc=0V922RrJgQc9SM"
                },
                {
                    id: 0,
                    ava: "https://www.google.com/search?q=cats&sxsrf=ALeKk01V5_huF0DRi4p_yoxc4IjrE6NaMA:1607302272625&tbm=isch&source=iu&ictx=1&fir=yY42gJ5WMC1QdM%252CMA7UcOUAxAbEeM%252C_&vet=1&usg=AI4_-kQAo8uGwjMxbdxK2nnmKpsghjESUw&sa=X&ved=2ahUKEwjzk4bI07rtAhVMqaQKHXOgCs4Q9QF6BAgEEAE#imgrc=yY42gJ5WMC1QdM"
                },
                {
                    id: 0,
                    ava: "https://www.google.com/search?q=cats&sxsrf=ALeKk01V5_huF0DRi4p_yoxc4IjrE6NaMA:1607302272625&tbm=isch&source=iu&ictx=1&fir=Ixpf3xIk7ZaCdM%252CvEZMYvY2hG-DfM%252C_&vet=1&usg=AI4_-kSfLsosMlyGTRVU2UdvXATOHDyMfg&sa=X&ved=2ahUKEwjzk4bI07rtAhVMqaQKHXOgCs4Q9QF6BAgGEAE#imgrc=Ixpf3xIk7ZaCdM"
                }
            ]
        }
    },

    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log("State changed");
    },

    dispatch(action) { //

        this._state.profilePage = profileReducer( this._state.profilePage, action );
        this._state.dialogsPage = dialogsReducer( this._state.dialogsPage, action );
        this._state.sidebar = sidebarReducer( this._state.sidebar, action );


            this._callSubscriber(this._state);

    },

    subscribe(observer) {
        this._callSubscriber = observer;
    }
}












export default store;
window.store = store;