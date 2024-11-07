

    let a = Number(prompt("Бірінші сан,"))
    let b = Number(prompt("Екінкіші сан"))
    let c  = Number(prompt("Үшінші сан"))
    let num=a
    switch(true){
        case b>a && b>c:
             num = b ;
        break;
        case c>a:
            num = c;
        break;
    }
    alert(num)

