
view.showCurrentConversation = function(){
    if(model.currentConversation){
        let messages = model.currentConversation.messages
        let listMessages = document.getElementById("list-messages")

        listMessages.innerHTML = " "
        // console.log(model.currentConversation)
        for (let message of messages){
            let className = ""
            if (message.owner == firebase.auth().currentUser.email){
                className = "message-chat your"
            }
            else{
                className = "message-chat"
            }
            let html =`
            <div class ="${className}"> 
            <span> ${message.content} </span>
            </div>
            `
            listMessages.innerHTML += html
        }

        listMessages.scrollTop = listMessages.scrollHeight
        let detailCurrentConversation = document.getElementById("detail-current-conversation")
        let users = model.currentConversation.users
        
        detailCurrentConversation.innerHTML=""
        
        for (let user of users){
            let html =`
            <div class ="user-email"> 
             ${user}
            </div>
            `
            detailCurrentConversation.innerHTML+= html
        }
        let createdAt = model.currentConversation.createdAt
        detailCurrentConversation.innerHTML += `
        <div class="created-at">${createdAt}</div>
        `
    }
}

view.showConversations = function(){
    if(model.conversations){
        let conversations = model.conversations
        let listConversations = document.getElementById("list-conversations")
        
        listConversations.innerHTML =""

        for (let conversation of conversations){
            let className = ""
            if(conversation.id == model.currentConversation.id){
                className = "conversation current"
            }
            else{
                className = "conversation"
            }
            let html =`
            <div id = "${conversation.id}" class ="${className}"> 
                <div class="conversation-title">${conversation.title}</div>
                <div class="conversation-members">${conversation.users.length} members</div>
            </div>
            `
            listConversations.innerHTML += html
        }

        for (let conversation of conversations){
            let conversationDiv = document.getElementById(conversation.id)
            conversationDiv.onclick = conversationClickHandler
            function conversationClickHandler(){
                model.saveCurrentConversation(conversation)
                view.showCurrentConversation()
                view.showConversations()
            }
        }



        listConversations.scrollTop = listConversations.scrollHeight


    }
}
