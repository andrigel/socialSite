export const updateNewMessageBodyActionCreator = (text) => {
    return{
        type:'UPDATE-NEW-MESSAGE-BODY',
        newText: text
    }
}

export const sendMessageActionCreator = () => {
    return {
        type: 'SEND-MESSAGE'
    }
}