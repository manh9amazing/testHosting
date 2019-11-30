controller.loadConversations = async function(){
    let currentEmail = firebase.auth().currentUser.email
    let result = await firebase.firestore().collection("conversations").where("users","array-contains",currentEmail).get()
    let docs = result.docs
    //C1
    // let conversations = []
    // for (let doc of docs){
    //     let conversation = transformDoc(doc)
    //     conversations.push(conversation)
    // }
    //C2
    let conversations = docs.map(transformDoc)
    model.saveConversations(conversations)
    if(conversations.length){
        let currentConversation = conversations[0]
        model.saveCurrentConversation(currentConversation)
    }
    console.log(model)

    view.showConversations()
    view.showCurrentConversation()
    // console.log(conversations)
}

controller.setupDatabaseChange = function(){
    let isFirstTimeRun = true
    let currentEmail = firebase.auth().currentUser.email
    firebase.firestore().collection("conversations").where("users","array-contains",currentEmail).onSnapshot(snapshotHandler)
    function snapshotHandler(snapshot){
        if(isFirstTimeRun){
            isFirstTimeRun = false
            return
        }

        let docChanges = snapshot.docChanges()
        for (let docChange of docChanges){
            let conversation = transformDoc(docChange.doc)

            if(docChange.type == "added" || docChange.type == "modified"){
                model.updateConversation(conversation)
                if(model.currentConversation&& model.currentConversation.id == conversation.id){
                    view.showCurrentConversation()
                    //currentConversation gio da bi outdated-->thay the bang conversation
                }
            }
        }
        view.showConversations()
    }
}

controller.addMessage = async function(messageContent){
    let message = {
        content: messageContent,
        owner: firebase.auth().currentUser.email,
        createdAt: new Date().toISOString()
    }

    view.disable("form-chat-submit-btn")

    if(model.currentConversation){
        await firebase.firestore().collection("conversations").doc(model.currentConversation.id).update({
            messages: firebase.firestore.FieldValue.arrayUnion(message)
            //ghi truong can update 
            // title :"second conversation"
            //neu muon xoa thi dung cau lenh thay vi update ta dung 
            //neu muon tao them thi sau collection se .add(newDocument)
        })
        console.log("added new message")
        document.getElementById("form-chat-input").value = ""
    }
    view.enable("form-chat-submit-btn")
    //Date.getDate(), getFullYear(), toDateString(), toISOString()
}

controller.addConversation = async function(title,friendEmail){
    view.disable("form-add-conversation-submit-btn")
    try{
        let conversation = {
            title: title,
            users: [firebase.auth().currentUser.email, friendEmail],
            messages: [],
            createdAt: new Date().toISOString()
        }
        await firebase.firestore().collection("conversations").add(conversation)
        document.getElementById("form-add-conversation-title-input").value = ""
        document.getElementById("form-add-conversation-friend-email-input").value = ""
    }
    catch(err){
        view.setText("friend-email-error",err.message)
    }
    view.enable("form-add-conversation-submit-btn")
}

controller.leaveConversation = function(){
    
}



// function test(){
//     try{
//         console.log("1")
//         console.log("2")
//         throw new Error ("sth went wrong")
//         console.log("4")
//         console.log("5")
//     }catch(err){
//         console.log("Error"+ errMessage)
//     }
// }

// function validate(number){
//     if (number >=2){
//         throw new Error ("so phai lon ")
//     }
//     else{
//         console.log("true number" + number)
//     }
// }
