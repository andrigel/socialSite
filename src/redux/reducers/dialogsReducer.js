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
],
newMessageBody: ''
}

const dialogsReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY':
            state.newMessageBody = action.newText; break;
        case 'SEND-MESSAGE':
            const messageBody = {
                message:state.newMessageBody
            };
            state.messages.push(messageBody);
            state.newMessageBody = ''; break;
        default:
            break;
    }
    return state;
}
export default dialogsReducer;