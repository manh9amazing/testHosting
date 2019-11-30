
// window.onload = sayHello
// window.onclick = sayHello
// function sayHello(event){
//     console.log(event)
// }

// window.onload = init
// function init(){
//     let h3= document.getElementById("form-header-h3")
//     console.log(h3)
//     h3.onclick = sayHello
//     // h3.style.background = "red"
//     // h3.innerText = "something"
// }

window.onload = init
// code khoi tao chuong trinh
function init (){
    // view.showComponent("register")
    view.showComponent("loading")
    firebase.auth().onAuthStateChanged(authStateChangeHandler)

    function authStateChangeHandler(user){
        console.log("auth state changed")
       if (user && user.emailVerified){
           view.showComponent("chat")
       }
       else{
           view.showComponent("register")
       }
    }
}
