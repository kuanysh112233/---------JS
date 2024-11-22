

const showDiffNumbers =(numbersCount)=>{
    let odd =0, even = 0, negative=0
for (let i = 1; i<=numbersCount; i++){
    const number = +prompt('Санды енгіз' +'('+ i +')')
    if(String(number) === "NaN"){
        alert("ТОЛЬКО ЦИФРЫ!");
        i = i - 1;
        continue;
    }
    if(number<0){negative++}
    if(number%2===0){
        even++
    }
    else{odd++}
}
alert('тақ сандар саны: '+odd+'\n'+
    'Жұп сандар саны: ' + even+ '\n'+
    'Теріс сандар саны: '+ negative)
}
const numbers = +prompt("")
showDiffNumbers(numbers)