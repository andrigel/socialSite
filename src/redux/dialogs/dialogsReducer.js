const initialState = {
messages: [
{message: 'Hi friend!'},
{message: 'How are you?'},
{message: 'I will be glad to see yoo!'}
],
dialogs: [
{id: 1, name: 'Dima'},
{id: 2, name: 'Bohdan'},
{id: 3, name: 'Tanya'},
{id: 4, name: 'Ighor'}
]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEND-MESSAGE':
        {
            const messageBody = {
                message:action.message
            };
            return {
            ...state,
            messages:[...state.messages,messageBody]
            }
        }
        default: return state;
    }
}
export default dialogsReducer;