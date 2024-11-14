// үй жумысы \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// for(let mumkindik=3; mumkindik!=0; mumkindik--){
//     let soz = prompt("ҚАЗАҚ ХАНДЫҒЫ ҚАШАН ҚҰРЫЛДЫ  ");
//     if(soz==="1465"){
//         alert("siz durys jayap berdiniz");
//          break;
//     }
//     if(mumkindik!==1){
//         alert("cizde mymkindik azaidy: " + (mumkindik-1));
//     }
//     else{
//         alert("cizde mymkindik kalmady");
//         break;
//     }
// }

const allStudentCount = +prompt("студенттердің санын енгізіңіз");
let i  = allStudentCount
let pointSum = 0
while(i!==0){
    const studentPoint = +prompt(i+' Студенттің баллы:')
    pointSum = pointSum + studentPoint
    i--
}
alert('Орташа баға: '+ (pointSum/allStudentCount))



        
    



