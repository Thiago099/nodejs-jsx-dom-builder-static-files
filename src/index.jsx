import './style.css'

const data = state({message:''})

fetch('/api')
  .then(response => response.json())
  .then(result => data.message = result.message)

const main = 
<div class="chat-container">
  {data.message}
</div>


main.$parent(document.body)