

// үй жымысы\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

let arrou =[]

while(true){
    let soz = +prompt("San engiz")

    if(soz===0){
        break;
    }
    else if(soz%2===0){
        arrou.unshift(soz)
    }
    else{
        arrou.push(soz)
    }
}
console.log(arrou);














