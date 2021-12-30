const form = document.querySelector(".typing-area"),
inputField = document.querySelector(".input-field"),
sendBtn = document.querySelector("button"),
chatBox = document.querySelector(".chat-box");


form.onsubmit = (e)=>{
  e.preventDefault(); //preventing form from submitting
}

sendBtn.onclick = ()=>{
  //Let's start Ajax
  let xhr = new XMLHttpRequest(); //creating XML object
  xhr.open("POST", "php/insert-chat.php", true);
  xhr.onload = ()=>{
      if(xhr.readyState === XMLHttpRequest.DONE){
        if(xhr.status === 200){
            inputField.value = ""; //once message inserted into database then leave blank the input field
          }
      }
  }
  // we have to send the form data through ajax to php
  let formData = new FormData(form); //creating new formData object
  xhr.send(formData); //sending the form data to php
}

setInterval(()=>{
  //Let's start Ajax
  let xhr = new XMLHttpRequest(); //creating XML object
  xhr.open("POST", "php/get-chat.php", true);
  xhr.onload = ()=>{
      if(xhr.readyState === XMLHttpRequest.DONE){
        if(xhr.status === 200){
            let data = xhr.response;
            chatBox.innerHTML = data;
          }
      }
  }
    // we have to send the form data through ajax to php
  let formData = new FormData(form); //creating new formData object
  xhr.send(formData); //sending the form data to php
}, 500); //this function will run frequently after 500ms
