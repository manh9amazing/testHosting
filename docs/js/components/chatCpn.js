
component.chat = `
<section class = "chat-container">
<div class="aside-left">
  <div id = "list-conversations"  class="list-conversations">

</div>
<form id = "form-add-conversation" class="form-add-conversation">
  <div class="input-wrapper">
    <input type="text" name="title" placeholder="Conversation title" id = "form-add-conversation-title-input">
    <div id="title-error" class = "message-error"> </div>
  </div>
  <div class="input-wrapper">
    <input type="email" name="friendEmail" placeholder="Your friend email" id = "form-add-conversation-friend-email-input">
    <div id="friend-email-error" class = "message-error"> </div>
  </div>
      <button type="submit" class="btn-icon" id="form-add-conversation-submit-btn">
        <i class="fas fa-plus"></i>
      </button>
    </form>
  </div>
        <div class = "current-conversation"> 
          <div id = "list-messages" class = "list-messages">
           
          </div>
          <form id = "form-chat" class = "form-chat">
              <div class= "input-wrapper">
                  <input id = "form-chat-input" type="text" name="message" placeholder="Input your message">
              </div>
              <button id= "form-chat-submit-btn" type="submit">Send</button>
          </form>
        </div>
        <div class="aside-right">
        <div class="detail-current-conversation" id="detail-current-conversation">
      
        </div>  
        <button class = "btn-icon" id="leave-conversation-btn"><i class= "fas fa-minus"></i></button>
      </div>
    </section>`

