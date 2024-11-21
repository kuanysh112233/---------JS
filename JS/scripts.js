

const switchToEuro = (value,moneyType)=>{
    console.log(moneyType.toLocaleUpperCase())
    if(moneyType.toLocaleUpperCase() ==="USA"){
        return value * 0.85
    }
    else if(moneyType.toLocaleUpperCase() ==="KZT"){
        return value * 0.002
    }
    else{return value}
}

let sum = 0
let valutaSum = null
let valuta =''

while(true) {
    valutaSum = +prompt("Ақша суммасын енгіз")
    if(valutaSum===0){break;}
    valuta = prompt("Валютаны енгіз")
    if(valuta==='stop'){break;}
    console.log(valutaSum,valuta)
   sum = sum + switchToEuro(valutaSum,valuta)
}

alert(sum)