import './style.css'

const main = 
<div class="chat-container">
  <div class="chat-header">
    <h3>Chat App</h3>
  </div>
  <div class="chat-messages">
    <div class="message-container">
        <div class="message message-from-you">
            <div class="message-sender">John</div>
            <div class="message-text">Hello, how are you?</div>
        </div>
    </div>
    <div class="message-container">
        <div class="message">
            <div class="message-sender">Jane</div>
            <div class="message-text">I'm good, thanks for asking! How about you?</div>
        </div>
    </div>
  </div>
  <div class="chat-input-container">
    <textarea class="chat-input"></textarea>
    <button class="send-button">Send</button>
  </div>
</div>


main.$parent(document.body)