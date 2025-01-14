let startBtn = document.getElementById("startBtn")
let san = parent(startBtn.textContent)
let message = document.getElementById("message")

let interval = setInterval(()=>{
    san--;
    startBtn.textContent = san
    
    startBtn.addEventListener('click'(()=>{
        if(message>0){
            message.textContent = "Аякталды"
        }
    }))
},1000)