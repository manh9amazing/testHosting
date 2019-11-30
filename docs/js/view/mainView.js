const view = {}

// name = register,login,...
view.showComponent = function (name) {
    switch (name) {
        case "register": {
            //hien thi html tren man hinh
            let app = document.getElementById("app")
            app.innerHTML = component.register

            let link = document.getElementById("register-link")
            link.onclick = linkClickHandler

            let form = document.getElementById("register-form")
            form.onsubmit = formSubmitHandler

            function linkClickHandler() {
                view.showComponent("login")
            }

            function formSubmitHandler(event) {
                event.preventDefault()//ko load lai trang khi submit
                //ko gui thong tin len thanh dia chi boi vi load lai trang coi nhu chay lai code, ko submit dc

                //buoc 1: lay thong tin nguoi dung dien vao form
                let registerInfo = {
                    firstName: form.firstName.value,
                    lastName: form.lastName.value,
                    email: form.email.value,
                    password: form.password.value,
                    confirmPassword: form.confirmPassword.value,
                }
                console.log(registerInfo)
                let validateResult = [
                    view.validate(registerInfo.firstName,"firstname-error","Invalid firstname"),
                    view.validate(registerInfo.lastName,"lastname-error","Invalid lastname"),
                    view.validate(registerInfo.email && registerInfo.email.includes('@'),"email-error","Invalid Email"),
                    view.validate(registerInfo.password && registerInfo.password.length >=6, "password-error","Invalid Password"),
                    view.validate(registerInfo.confirmPassword&& registerInfo.confirmPassword.length >= 6
                        && registerInfo.confirmPassword == registerInfo.password, "confirmPassword-error","Invalid confirmPassword")
                ]
                
                //buoc 3: submit thong tin
                if(allPassed(validateResult)){
                    controller.register(registerInfo)
                }
            }

            break
        }
        case "login": {
            let app = document.getElementById("app")
            app.innerHTML = component.login

            let link = document.getElementById("login-link")
            link.onclick = linkClickHandler

            let form = document.getElementById("login-form")
            form.onsubmit = formSubmitHandler

            function linkClickHandler() {
                view.showComponent("register")
            }

            function formSubmitHandler(event) {
                event.preventDefault()
                let loginInfo = {
                    email: form.email.value,
                    password: form.password.value,
                }

                let validateResult = [
                    view.validate(loginInfo.email ,"email-error","Invalid Email"),
                    view.validate(loginInfo.password, "password-error","Invalid Password"),
                ]
                if(allPassed(validateResult)){
                    controller.login(loginInfo)
                }
                // console.log(loginInfo)

                // if(loginInfo.email){
                //     if(loginInfo.email.includes("@")==true){
                //         view.setText("email-error","")
                //     }
                //     else{
                //         view.setText("email-error","Email not in format")
                //     }
                // }
                // else{
                //     view.setText("email-error","Email is necessary")
                // }

                // if (loginInfo.password){
                //     if (loginInfo.password.length>= 6){
                //         view.setText("password-error", "")
                //     }
                //     else{
                //         view.setText("password-error", "Password needs 6 characters")
                //     }
                // }
                // else{
                //     view.setText("password-error", "Password is necessary")
                // }
            }
            break
        }
        case "chat":{
            let app = document.getElementById("app")
            app.innerHTML = component.nav + component.chat

            controller.loadConversations()
            controller.setupDatabaseChange()

            view.setText("user-email", firebase.auth().currentUser.email)
            // dung email hoac displayName
            
            let btnSignOut = document.getElementById("sign-out-btn")
            btnSignOut.onclick = signOut

            let formChat = document.getElementById("form-chat")
            formChat.onsubmit = formChatSubmitHandler
            
            let formAddConversation = document.getElementById("form-add-conversation")
            formAddConversation.onsubmit = formAddConversationSubmitHandler

            let btnLeaveConversation = document.getElementById("leave-conversation-btn")
            btnLeaveConversation.onclick = leaveConversation
            
            function leaveConversation(){
                controller.leaveConversation()
            }

            function signOut(){
                firebase.auth().signOut()
            }

            function formChatSubmitHandler(e){
                e.preventDefault()
                let messageContent = formChat.message.value.trim()
                if (messageContent){
                    controller.addMessage(messageContent)
                }
            }

            function formAddConversationSubmitHandler(e){
                e.preventDefault()
                let title= formAddConversation.title.value.trim()
                let friendEmail = formAddConversation.friendEmail.value.trim()
                let validateResult= [
                    view.validate(title,"title-error","title required"),
                    view.validate(friendEmail,"friend-email-error", "friend email required")
                ]
                if(allPassed(validateResult)){
                   controller.addConversation(title,friendEmail)
                }

            }
            
            break
        }

        case "loading":{
            let app = document.getElementById("app")
            app.innerHTML = component.loading

            break
        }
    }
}


view.setText = function (id, text) {
    document.getElementById(id).innerText = text
}

view.validate = function(condition, idErrorTag, messageError){
    if(condition){
        view.setText(idErrorTag,"")
        return true
    }
    else{
        view.setText(idErrorTag,messageError)
        return false
    }
}

view.disable = function(id){
    document.getElementById(id).setAttribute("disabled",true)
}
view.enable = function(id){
    document.getElementById(id).removeAttribute("disabled")
}

function allPassed(validateResult){
    for (let validate of validateResult){
        if(!validate){
            return false
        }
    }
    return true
    }