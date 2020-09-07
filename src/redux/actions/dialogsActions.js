export const updateNewMessageBody = (text) => {
    return{
        type:'UPDATE-NEW-MESSAGE-BODY',
        newText: text
    }
}

export const sendMessage = (message) => {
    return {
        type: 'SEND-MESSAGE',
        message:message
    }
}