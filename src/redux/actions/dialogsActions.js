export const updateNewMessageBody = (text) => {
    return{
        type:'UPDATE-NEW-MESSAGE-BODY',
        newText: text
    }
}

export const sendMessage = () => {
    return {
        type: 'SEND-MESSAGE'
    }
}