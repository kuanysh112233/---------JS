

// ҮЙ ЖУМЫСЫ  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

let number = +prompt("Санды жаз")

let max, min;

for(let i=1; i<=number; i++){
    if(i%5==0){
        if(i<min || !max){
            min=i
        }
        if(i>max || !max){
            max=i
        }
    }
}
if(min && max){
    alert("Макс. сан:   " + max)
    alert("Мин. сан:   " + min)
}
else{
    console.log("Сан табылмады")
}


        
    



