let silteme = 'https://67873274c4a42c916105d2fe.mockapi.io/api/onlineduken/questions'
let currenIndex = 0 
let upai = 0

let timeLeft = 100
let qalganUaqyt
let countdown

let timer = document.querySelector('.timer')
let btns = document.querySelectorAll('.question-option')
let suraq = document.querySelector('.question')

function startTimer(){
    clearInterval(countdown);
    qalganUaqyt = timeLeft


    timer.textContent ="Сізде " + qalganUaqyt + " сек қалды!";
    countdown = setInterval(() => {
        qalganUaqyt--;

        timer.textContent ="Сізде " + qalganUaqyt + " сек қалды!";
        
        if (qalganUaqyt <= 0) {
            clearInterval(countdown);
            nextQuestion()
        }
    }, 1000);
}

let keslesiBtn = document.querySelector('.next-btn')

async function jauapTekseris(jauapIndex){
    let date = await fetchDate()
    console.log(jauapIndex);
    let answer = date[currenIndex].answer
    console.log("jauap index:  ", answer);


    btns.forEach((element,index)=>{
        if(jauapIndex != index){
            element.disabled=true
        }
        
    })
    
    if(jauapIndex==answer){
        upai++
        console.log("+1upai!!!");  
        disabled 
    }
    keslesiBtn.classList.remove('hidden')
    

}

async function fetchDate(){
    try{
        let response = await fetch(silteme)
        if(!response.ok){
            throw new Error ("Деректерді алу мүмкін емес")
            
        }
        let date = await response.json()
        return date
    }catch(error){
        console.log("Қате: " , error);
    }

}

async function nextQuestion(){
    currenIndex++
    let date = await fetchDate()
    if(currenIndex<date.length){
        showQuistions()
    }else{
        upaiKorsetu()
    }
}

async function showQuistions(){
    let date = await fetchDate()

    suraq.textContent = date[currenIndex].question
    console.log(date);
    
    btns.forEach((element, index)=>{
        console.log("Index: " , index);
        element.textContent = date[currenIndex].options[index]

        element.disabled = false
        element.textContent = date[currenIndex].options[index]
        
    })
    keslesiBtn.classList.add('hidden')
    startTimer()
}
showQuistions()