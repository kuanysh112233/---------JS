let silteme = 'https://67873274c4a42c916105d2fe.mockapi.io/api/onlineduken/questions'
let currenIndex = 0 
let upai = 0

let keslesiBtn = document.querySelector('.next-btn')

async function jauapTekseris(jauapIndex){
    let date = await fetchDate()
    console.log(jauapIndex);
    let answer = date[currenIndex].answer
    console.log("jauap index:  ", answer);
    
    if(jauapIndex==answer){
        upai++
        console.log("+1upai!!!");   
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

async function showQuistions(){
    let date = await fetchDate()

    let suraq = document.querySelector('.question')
    let btns = document.querySelectorAll('.question-option')

    suraq.textContent = date[currenIndex].question
    console.log(date);
    
    btns.forEach((element, index)=>{
        console.log("Index: " , index);
        element.textContent = date[currenIndex].options[index]
        
    })
    keslesiBtn.classList.add('hidden')
}
showQuistions()