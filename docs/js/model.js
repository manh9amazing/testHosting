const model = {
conversations: null, //all conversations of users
currentConversation: null,//current conversation user selected

}

model.saveConversations = function(conversations){
    model.conversations = conversations
}

model.saveCurrentConversation = function(conversation){
    model.currentConversation = conversation
}

model.updateConversation = function(conversation){
    if(model.conversations){
        // update conversations, currentConversation
        let foundIndex = model.conversations.findIndex(function(element){
            return element.id == conversation.id
        })
        if(foundIndex>= 0){
            //truong hop thay doi trong 1 document document X-->X'
            model.conversations[foundIndex] = conversation
        }
        else{
            //truong hop co document moi
            model.conversations.push(conversation)
        }
        if (model.currentConversation && model.currentConversation.id == conversation.id){
            model.saveCurrentConversation(conversation)
        }
    }
}