// 1 САБАК
// const studentName='Али',
// age=25,
// isStudent=true,
// ageInStr ='25'
// console.log(`Аты: ${studentName} | типі: ${tyeeof studentName}`)
// console.log(`Жасы ${age} | типі: ${typeof age}`)
// console.log(`Студент пе ${isStudent} | типі: ${typeof isStudent}`)
// console.log(`Жасы жол ретінде ${ageInStr} | типі: ${typeof ageInStr}`)
 
// 2 САБАК 
// Косу 
// let a = 5, b = 3;

// // 
// let z = 10
// let y = 7
// console.log("10 + 7 =" + (z+y))
// console.log("5 + 3 =" + (a+b))

// // 
// let f = 5, g = 4;

// console.log("5 - 4 =" + (f-g))

// // 
// let d = 4, h = 4;

// console.log("4 * 4 =" + (d*h))


// // 
// let s = 6, x = 5;
// sum = 6*5

// console.log("6 * 5 =" + sum)

// // 
// let v = 52, n = 3;
// sum = 52 % 3

// console.log("52 % 3 =" + sum)

// // 
// let j = 20, l = 30;
// j++;
// l++;
// console.log("20 + 30=" + (j+l))

// // 
// let k = 4;
// k+=5 
//k++
// k+=2  // 40+2=42
// k-=3  // 42-3=39
// k*=4  // 39*4=156
// k/=5  // 156/5=31,2
// k%=6  // 31,2%6=10

// console.log("20 =" + z)


// const num = prompt("Введите число:")
// console.log(prompt = num*num)
// alert("Квадрад вашего числа:  " + (prompt = num*num))

// const number1 = Number(prompt("Введите первое число:"));
// const number2 = Number(prompt("Введите второе число:"));

// var perimetr = (number1+number2)*2
// var audan = (number1*number2)
// alert("тікбұрыштын пириметрі: " + perimetr + '\n' + "тікбұрыштын ауданы  :" + audan )

// 3 переменный ашасын
// const a = prompt('Бірінші санды жазыңыз')
// let sum = (a+b+c)/3

//алертпен шыгарасын
// const a =Number( prompt('Бірінші санды жазыңыз')), 
// b = Number(prompt('Екінші санды жазыңыз')), 
// c = Number(prompt('Үшінші санды жазыңыз'))
// const sum = ((a+b+c)/3)
// alert("Арифметикалық орта:" + (sum))

// 3 САБАК

// салыстырмалы оператор

// let a=5, b=6, c=7

// //  == тен
// console.log(a==b); // false
// // тен емес
// console.log(a!=b); // true
//  // улкен / киши
// console.log(a<b); // true
// console.log(a>b); // false
// // улкен немесе тен, киши немесе тен
// console.log(a>=b) // false 5>=6
// console.log(a<=b) // true  5<=6
 
// // логткалык оператыр

// let e=4, r=5, t=7
// // (&& және) екі шартын екеуі де true болган жагдайда, true кайтарылады
// console.log((b>a)&&(b<c)) // true
// // (|| немес) екі шартын кемінде біреуі ғана true болган жагдайда, true кайтарылады
// console.log((b<a)||(b>c)) // false

// let isStudent = true;
// let isStudent2 = true;


// console.log(!isStudent && isStudent2); // false

// if(!isStudent){
//     console.log("сен кирмейсин")
// }
// else if(isStudent || !isStudent2){
//     console.log(" прәм сен кіресін")
// }
// // мысал
// let age=20, hasTicket=true, isVip=false;
// if((age>=18 && hasTicket) || isVip){
//     console.log("сен киресин")
// }
// else{
//     console.log("сен ктрмейсин")
// }
// //  true

// let age2=35;
// alert(12<=age2 && age2<=40)

//  let n=21, f=2
//  alert((20<=n && n<=50) && (n%2==0))

//  1 задача
// let age = 70
// let isStudent = false

// alert('Сізге жеңілдік ' + (age>=65 || isStudent === true))


// 2 задача
// let num=Number(prompt("санды енгіз"))
// if(10<=num && num<=20){
//     alert("ты крут")
// }
// else{
//     alert("ты далбаеб")
// }

// 3 задача
// let num1=-5
// let num2=10
// if(num1<0 || num2<0){
//     alert(true)
// }
// if((num1<0 && num2<0) || (num1>0 && num2>0)){
//     alert(false)
// }

// 4 САБАК

    // let num1 = Number(prompt("первое число"));
    // let num2 = Number(prompt("второе число"));
    // sum= 0
    // sum = num1 + num2

    // alert("тен болады" + "\n" + sum)

    // let num = prompt("Сан енгізініз")
    // if(num %  2 == 0){
    //     alert("сан жуп   " + num)
    // }
    // else{
    //     alert("сан так   " +  num)
    // }


    // 1 ЗАДАЧА
    
    // let course = prompt("курс нөмірі 1, 2, 3 немесе 4")
    // let isAlmaty= prompt("Келген жерініз АЛМАТЫ ма? yes/no")
    // if(course<=3 && isAlmaty==="no"){
    //     alert("СЕН КІРЕСІН ЖАТАХАНАҒА")
    // }
    // else{
    //     alert("ҚАЙДА ТУРСАН ОНДА ТУР")
    // } 

    // 2 ЗАДАЧА
    // alert("Оный шарты:Дұрыс жауап берілгенде әр сұраққа 1 балл беріледі" + "\n" + "Сұрақ қойылады жауапты енгізесіз");
    // let question1 = prompt("Қазақстанның тәуелсіздік алған жылы");
    // let question2 = prompt("Қазір оқып жатқан қаласы");
    // let point = 0
    // if(question1==="1991"){
    //     point++
    // }
    // if(question2==="Almaty"){
    //     point++
    // }
    // if(point===0){
    //     alert("СІЗГЕ УПАЙ ҚОСЫЛМАДЫ")
    // }
    // else{
    //     alert("СІЗГЕ "+ point +" УПАЙ ҚОСЫЛДЫ")
    // }

    // 5 сабак////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    // let score = +prompt("баганды жазыныз");
    // if(score>=90 && score<=100){
    //     alert("Сіздін бағаныз: A")
    // }
    // else if(score>=80 && score<=90){
    //     alert("Сіздін бағаныз: B")
    // }
    // else if(score>=70 && score<=80){
    //     alert("Сіздін бағаныз: C")
    // }
    // else if(score>=40 && score<=70){
    //     alert("Сіздін бағаныз: D")
    // }
    // else{
    //     alert("баска оқу орнын ізде")
    // }

    // let score = +prompt("баганды жазыныз");
    // if (score/2) {
    //     alert(score/2)
    // }

    // let burger = Number(prompt("Бұргердін түрін жазыныз(чизбургер\гамбургер\двойной бургер)"));
    // let price= 0
    // if(burger==="чизбургер"){
    //     price=1090
    // }
    // else if(burger==="гамбургер"){
    //     price=1190
    // }
    // else if(burger==="двойной бургер"){
    //     price=1490
    // }
    // alert("ВАШ ЗАКАЗ ПРИНЯТЬ"+"\n"+"ВИД БУРГЕРА:"+burger+"\n"+"СУММА"+price)

    // 1 задача
    
    // let num = +prompt("0 мен 99 арасындағы санды енгізініз");
    // let a = Math.floor(num/10), b = num % 10
    // if(a===0){
    //     alert('Биринши сан: ' + b)
    // }
    // else{
    //     alert('Биринши сан: ' + a + '\n' + 'Екинши сан: ' + b)
    // }

    // 1 задачанын (2 тури)

    // let number = prompt("сан енгіз 1 ден 3 ке дейін")
    // switch(number){
    //     case "1":
    //         alert("Сіз 1 денген санды енгіздініз")
    //         break;
    //     case "2":
    //         alert("Сіз 2 денген санды енгіздініз")
    //         break; 
    //     case "3":
    //         alert("Сіз 3 денген санды енгіздініз")
    //         break;
    //     default:
    //         alert("Сізқате тердініз.Қайта енгізуді өотінеміз!")
    // }
    
    // let drinks = prompt("Таңдаңыз: кофе, шай, су")
    // let additives;
    
    // switch(drinks){
    //     case "кофе":
    //         let coffe = prompt("Қандай сироп тандайсын? карамельный \ молочный")
    //         switch(coffe){
    //             case "карамельный":
    //                 additives="карамельный"
    //                 break;
    //             case "молочный":
    //                 additives="молочный"
    //                 break; 
    //             default:
    //                 alert("Бізде ондай коспа түрі жоқ")
    //         }
    //         break;
            
    //     case "шай":
    //         let tea = prompt("Қандай шай тандайсын? черный \ зеленый")
    //         switch(coffe){
    //             case "черный":
    //                 additives="черный"
    //                 break;
    //             case "зеленый":
    //                 additives="зеленый"
    //                 break; 
    //             default:
    //                 alert("Бізде ондай коспа түрі жоқ")
    //         }
    //         break;
    //     case "су":
    //         let water = prompt("Қандай су тандайсын? теплый \ холодный")
    //         switch(coffe){
    //             case "теплый":
    //                 additives="теплый"
    //                 break;
    //             case "холодный":
    //                 additives="холодный"
    //                 break; 
    //             default:
    //                 alert("Бізде ондай коспа түрі жоқ")
    //         }
    //         alert("выберите повторно")
    // }
    // alert("Сіз тандадыныз" + drinks + "\n" + "Түрі" + additives)

    // let a = Number(prompt("Бірінші сан,"))
    // let b = Number(prompt("Екінкіші сан"))
    // let c  = Number(prompt("Үшінші сан"))
    // let num=a
    // switch(true){
    //     case b>a && b>c:
    //          num = b ;
    //     break;
    //     case c>a:
    //         num = c;
    //     break;
    // }
    // alert(num)

    //.................................................................................................................................

    // for(let i=1; i<=10; i++){
    //     alert(i)
    // }

    // for(let i=1; i<=20; i++){
    //     if(i % 2 != 0){
    //         console.log(i + "- тақ");
    //     }
    //     else{ 
    //     }
    // }

    // for(let i=1; i<=5; i++){
    //     if(i==3){
    //         continue;
    //     }
    //     alert(i)
    // }

    // for(let i=10; i>=0; i--){
    //     alert(i)
    // }

    // for(let i=10; i>=0; i--){
    //     if(i == 5){
    //         continue;
    //     }
    //     if(i==6){
    //         continue
    //     }
    //     alert(i)
    // }

    // let num = +prompt("кезкелген сан")
    // let sum=0;
    // for(let i = 0; i<=num; i++){
    //     sum=sum+i
    //     alert("sum біздін қазіргі-> " + sum)
    // }
    // alert(num+""+sum)

    // Үйжумысы

    // let a = +prompt("санды енгініз")
    // for(let i = 1; i<=a; i++){
    //     if(i%3===0 && i%5===0){
    //         console.log(i)
    //     }
    //     if(i%3===0 && i%5===0 && i%2===0){
    //         break;
    //     }
    // }

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// let count = 0
// while(count<5){
//     console.log(count);
//     count++;
// }

// let count = 0
// while(count<5){
//     console.log(count) // 1
//     if(count===3){
//         break;
//     }
//     alert(count);
//     count++;
// }

// let count = 0
// do{//шартты орындау
//     console.log(count);
//     count++
//     //шартты тексеру
// }
// while(count<5);

// let num = 0;
// while(num<10){
//     if(num===5){
//         console.log("цикл токтатылды:  " + num);
//         break;
//     }
//     console.log(num);
//     num++;
// }


// let num = +prompt("сан енгіз")

// let num2 =0;
// let i =1;

// while(i <=num){
//     num2 = num2 + i;
//     i++;
// }

// alert(num + "дейінгі сандардын косындысы" + num2 )
    

// for(let i = 10; i<=40; i++){
//     if( i>=20 && i<=30 && i%2===0){
//         continue;
//     }
//     console.log(i);
// }


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

// const allStudentCount = +prompt("студенттердің санын енгізіңіз");
// let i  = allStudentCount
// let pointSum = 0
// while(i!==0){
//     const studentPoint = +prompt(i+' Студенттің баллы:')
//     pointSum = pointSum + studentPoint
//     i--
// }
// alert('Орташа баға: '+ (pointSum/allStudentCount))

// for(let mumkindik=3; mumkindik!=0; mumkindik--){
//         let soz = prompt("ҚАЗАҚ ХАНДЫҒЫ ҚАШАН ҚҰРЫЛДЫ  ");
//         if(soz==="1465"){
//             alert("siz durys jayap berdiniz");
//              break;
//         }
//         if(mumkindik!==1){
//             alert("cizde mymkindik azaidy: " + (mumkindik-1));
//         }
//         else{
//             alert("cizde mymkindik kalmady");
//             break;
//         }
// }    


// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// let mumkindik = 3

// while(mumkindik>0){
//     let soz = +prompt("Қазақ хандығы қашан құрылды")
    
//     if(soz== "1465"){
//         alert("Сіз дурыс пауап бердініз")
//         break;
//     }
//     else{
//             mumkindik--;
//     if(mumkindik>0){
//             alert("Сізде қалған мүмкіндік саны" + mumkindik + '\n' + "Қайта бағынызды сынап коріңіз")
//         }
//     else{
//             alert("Сіздін мүмкіндігіз қалмады")
//         }    
//         }
//     }


// let i = 1
// let nume1 = 0
// let nume2 = 0
// while(i<=20){
//     if(i%2==0){
//         nume1 = nume1 + i
//         console.log(`Жуп сан ${i} интеграция ${nume1}`)
//     }
//     else{
//         nume2 = nume2 + i
//         console.log(`Так сан ${i} интеграция ${nume2}`)
//     }
//     i++
// }
// alert(`Жуп сан ${nume1} \n Так сан ${nume2}`)

// let a = +prompt("FizzBuzz")
// let i = 1

// if(a>0){
// while(i<a){
//     if(i%3==0 && i5==0){
//         alert(`${i} Fizzbuzz`)
//     }
//     else if(i%3==0){
//         alert(`${i} Fizz`)
//     }
//     else if(i%5==0){
//         alert(`${i} Buzz`)
//     }
//     i++
//   }
// }
// else{
//     alert("дурыс емес")
// }

// for(let i=0; i<=30; i++){
//     alert(i);
//     i+=2;
// }

// for(let i=50; i>0; i--){
//     alert(i)
//     i-=4
// }

// ҮЙ ЖУМЫСЫ  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// let number = +prompt("Санды жаз")

// let max, min;

// for(let i=1; i<=number; i++){
//     if(i%5==0){
//         if(i<min || !max){
//             min=i
//         }
//         if(i>max || !max){
//             max=i
//         }
//     }
// }
// if(min && max){
//     alert("Макс. сан:   " + max)
//     alert("Мин. сан:   " + min)
// }
// else{
//     console.log("Сан табылмады")
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// function salemBer(habarLama, san){
//     alert(habarLama)
//     console.log(san)
// }
// salemBer(" hello world! " , 5);

// let qosasyn = function (number1,number2){
//     return(number1 + number2);
// }

// let kobeitu = qosuAmaly(5,3) * azaituAmalu(5,3) * qosasyn(5,3)
// alert(kobeitu)

// function qosuAmaly(num1 ,num2){
//     console.log(num1+num2);
//     return num1 + num2
// }
// qosuAmaly(5,3);

// function azaituAmalu(num3,num4){
//     return num3 - num4
// }
// azaituAmalu(5,3);

// let azaitu = function(san1, san2){
//     console.log("eki sannin azaitindisi: " + (san1 - san2));
//     return san1 - san2
// }

// let natizhe = qosu(10, 5) + azaitu(6, 3) + bolu(4, 2);
// alert(" ten boladi: " + natizhe)

// function qosu(san1, san2){
//     console.log("eki sannin qosindisi: " + (san1 + san2));
//     return san1 + san2
// }

// function bolu(san1, san2){
//     console.log("eki sannin bolindisi: " + (san1 / san2))
//     return san1 / san2
// }
 
// мысал

// let name = prompt("Atyndy engiz: ")

// function salemSalu(KUANYSH){
//     return "Hello " + KUANYSH + "!"
// }
// alert(salemSalu(name));

// let a = +prompt("a")
// let b = +prompt("b")
// let c = +prompt("c")

// function kosyndisy(a,b,c){
//     return a + b +c 
// }
// alert(kosyndisy(a,b,c))

// уй жумысы\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// let words =prompt("бірінші сөз енгіз").toLowerCase() 
// let words2=prompt("екыншы сөз енгіз").toLowerCase() 
 
  
// if (words==words2) { 
//         function name(compareWords) { 
//             words(words) 
//             words2(words2) 
//         } 
//        alert("бірдей сөздер")          
// } 
// else{ 
//         alert("создер бырдей емес") 
// }

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// function bolu(num1,num2){
//     return num1 / num2
// }

// let bolingenAmaly = bolu(15,5)
// console.log(bolingenAmaly);

// function kobeitu(num1, num2){
//     return num1 * num2
// }
// let kobeituAmaly = kobeitu(bolu(15,5),2)
// console.log(kobeituAmaly);



// ARROU FUNCIONS
// let qosu = (num1,num2) => num1 + num2;
// console.log(qosu(3, 5));



// let qosu = (num1, num2) => num1 + num2
// let azaitu = (num1, num2) => num1 - num2
// let kobeitu = (num1, num2) => num1 * num2

// let kobeitudinNatizhesi= kobeitu(qosu(11, 5), azaitu(5, 3))
// alert(kobeitudinNatizhesi);



// let valuto = prompt("valutag : dollar , euro , rubl");
// let summa = +prompt("Summa");
// function converter(valuto, summa){
//     if(valuto =="dollar"){
//         return summa * 496;
//     }
//     else if(valuto == "euro"){
//         return summa * 526;

//     }
//     else if(valuto == "rubl"){
//         return summa * 4;
//     }
//     else {
//         alert("ошибка")
//     }
// }
// alert(converter(valuto,summa));



// let san = +prompt("san engiz")

// function findFactorial(number){
//     if(number<0){
//         alert("Siz 0-den tomen san engizdin")
//     }
//     else if(number == 0 || number == 1){
//         return 1;
//     }
//     else{
//         let i = 2;
//         let factorial = 1;

//         while(i<=number){
//             factorial = factorial * i;
//             i++;
//         }
//         return factorial;
//     }
// }

// alert(`${san} factorial = ${findFactorial(san)}`)

// let san1 = +prompt("1-shi san")
// let san2 = +prompt("2-shi san")
// let san3 = +prompt("3-shi san")

// function findMaxNumber(san1,san2,san3){
//     let max = 0;

//     if(san1>=san2 && san1>=san3){
//         max=san1;
//     }
//     else if(san2>=san1 && san2>=san3){
//         max=san2;
//     }
//     else if(san3>=san1 && san3>=2){
//         max=san3
//     }
//     else{
//         alert("Siz cheto durys zhazbadadiniz")
//   }
//     return max;
// }
// alert(`En ulken san: ${findMaxNumber(san1,san2,san3)}`)

// Үй Жумысы \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// let a = prompt("Студенттін атты");
// let b = prompt("Студент қай тілде сөйлейді: english / kazakh / russian");

// function studentLanguages(a, b){
//     if(b ==  "english"){
//         return a + " HELLO! HOW ARE YOU!";
//     }
//     else if(b ==  "kazakh"){
//         return a + "СӘЛЕМ ! ҚАЛАЙСЫН";
//     }
//     else if(b ==  "russian"){
//         return a + "ПРИВЕТ! КАК ДЕЛА";
//     }
//     else{
//         alert("Ондай студент и тіл жоқ!")
//     }
// }
// alert(studentLanguages(a, b));

// const showDiffNumbers =(numbersCount)=>{
//     let odd =0, even = 0, negative=0
// for (let i = 1; i<=numbersCount; i++){
//     const number = +prompt('Санды енгіз' +'('+ i +')')
//     if(String(number) === "NaN"){
//         alert("ТОЛЬКО ЦИФРЫ!");
//         i = i - 1;
//         continue;
//     }
//     if(number<0){negative++}
//     if(number%2===0){
//         even++
//     }
//     else{odd++}
// }
// alert('тақ сандар саны: '+odd+'\n'+
//     'Жұп сандар саны: ' + even+ '\n'+
//     'Теріс сандар саны: '+ negative)
// }
// const numbers = +prompt("")
// showDiffNumbers(numbers)


// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// let fruits = ["Alma ", " Almurt " , " Banan " , " Shie ", 1 , 2 , 3];   
// console.log(fruits[1],fruits[0]); // Almurt Alma
// console.log(fruits[3],fruits[2] ); // Shie Banan
// console.log(fruits[4],fruits[5], fruits[6]); // 1 2 3

// fruits[7] = "KUANYSH"
// console.log(fruits);


// let arr1 = ['KUKA', 21 , 'Almaty']; екуіде өзгереді
// let arr2 = arr1;
// arr2 [0] = 'Nazerke'

// console.log("arr1 " + arr1);
// console.log("arr2 " + arr2);


// let shop = [ "Alma" , "Apelsin" , "Banna" ]   // 1 tapsyrma
// shop[3] = "Shie"
// console.log(shop);

// let shop = [ "Alma" , "Apelsin" , "Banna" ]  // 2 tapsyrma
// shop[1] = "Mango"
// console.log(shop);

// let shop = [ "Alma" , "Apelsin" , "Banna" , "Shie" , "Almurt" ]  // 3 tapsyrma
// console.log(shop[0]);
// console.log(shop[1]);
// console.log(shop[2]);  // 1 turi
// console.log(shop[3]);
// console.log(shop[4]);

// let shop = [ "Alma" , "Apelsin" , "Banna" , "Shie" , "Almurt" ]

// for(let i = 0; i < shop; i++){
//     console.log(shop[i]);
//     // shop[0] => Alma
//     // shop[1]
//     // shop[2]                      2 turi
//     // shop[3]
//     // shop[4] => Almurt
// }

// Практика 


// let engiz = +prompt("Qansha san engizesis")
// let arr = [ ]

// for(let i = 0; i < engiz; i++){ 
//     let arrSan = +prompt(i + "sanyn engiz") // san suraidy
//     arr[i] = arrSan    // engizip otyrady
// } console.log(arr);

// уй жумысы\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// let footbol = ["Роналду" , "Зидан" , "Неймар" , "Бензема" ,] 
// footbol[1] = "Месси"
// footbol[4] = "Руни"
// if(footbol.length>=5){
//     console.log("Футболистердін саны көп")
// }
// else{
//     console.log("Футболистердін саны аз");
// }
// console.log(footbol.length);


// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// let array = ["Galymbek" , "Amjilt" , 2024]

// console.log(array);

// array.push("and Kuanysh" , " and Bekarys" , "Okay Ifrat too")  // артынан косады

// let poppedElement = array.pop()
// console.log("Алыптастаган элемент " + poppedElement); // алыптастаган элементы корсетеды
// array.pop(array)   // сонгы елементы алыптастайды

// let shiftedElement = array.shift()
// console.log("бірінші алыптастаган элемент" + shiftedElement);
// array.shift(array) // бірінші элементін алып тастайды

// array.unshift("Kuka" , "Nazerke")
// console.log(array);

// let soz1 = prompt("Sozdi engiz")
// let soz2 = prompt("2-shi sozdi jaz")
// array.push(soz2)
// array.unshift(soz1)
// console.log(array);


// let array = ["Сабақ" , "басталды" , "ал"] \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\практика
// let soz1 = +prompt("kansha soz engizesin")

// for(let i=0; i<soz1; i++){
//     let soz2 = prompt("soz engiz")
//     array.push(soz2)
// }
// console.log(array);

// let massiv = [ 1 , 2 , 3 , 4 , 5 , 6]  //белгілі бір бөлігін көшіріп алады 
// console.log(massiv.slice(2, 5));

// console.log(massiv);

// let massiv = [ 1 , 2 , 3 , 4 , 5 , 6]
// console.log(massiv)
// massiv.splice(1, 2, 7, 8)         // Масив элем. алады немесе ауыстырады
// console.log(massiv);

// let massiv = [ 1 , 2 , 3 , 4 , 5 , 6]
// console.log(massiv);
// massiv.splice(1, 0, 7, 8)   // Масив элем. қосад
// console.log(massiv);

// практика \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// let san = [10, 20, 30, 40];
// console.log(san);

// san.push(50)
// console.log(san);

// san.shift()
// console.log(san);

// san.splice(1, 1, 25)
// console.log(san);

// let san1 = san.slice(2, 4) // 1 вид
// console.log(san1);

// console.log(san.slice(2, 4));   // 2 вид

// үй жымысы\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// let arrou =[]

// while(true){
//     let soz = +prompt("San engiz")

//     if(soz===0){
//         break;
//     }
//     else if(soz%2===0){
//         arrou.unshift(soz)
//     }
//     else{
//         arrou.push(soz)
//     }
// }
// console.log(arrou);

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// let number = [1 , 2 , 3 , 4];
// for(let i = 0; i<number.length; i++){
//     console.log(number[i]);     //1 , 2 , 3 , 4 
// }


// let number = [1 , 2 , 3 , 4]; //Массив элементтерін тікелей алып жұмыс істейді.
// for(num of number){
//     console.log(num);   // 1 , 2 , 3 , 4 
// }


// let fruits = ["Apple" , "Banana" , "Pineapple" , "Cherry"];   // Әр элементке функция қолданады.
// fruits.forEach(function(fruit){
//     console.log(fruit); 
// });


// let number = [ 4 , 7 , 8 , 10 , 9]
//                                     // жаңа масивке жибереді 
// let doubled = number.map(num => num * 2);          // 8 , 14 , 16 , 20 , 18


// let number = [ 4 , 7 , 8 , 10 , 9];
// let doubled = number.map(num => {
//     if(num % 2 === 0){
//         return num
//     }
//     else{
//         return "ТАК САН"          // 1 турі
//     }
//     console.log(doubled);
// });


// let doubled = number.map( num => num % 2 ==0 ? num : "taq");  //2 турі 
// console.log(doubled);


// let city = ["Алматы" , "Астана" , "Караганды" ]
// console.log(city);
// let qala = city.map(arip => arip + ".қ")   // 1 түрі
// console.log(qala);

// let city = ["Алматы" , "Астана" , "Караганды" ];
// console.log(city);
// let qala = [];
// for(i=0; i<city.length; i++){     // 2 түрі
//     qala[i] = city[i] + ".қ"
// }
// console.log(qala);


// let number = [7 , 10 , 19 , 8 , 6 , 1]  ///// филтер
// console.log(number);
// let number2 = sandar.filter(san=> san % 2 ==0)
// console.log(number2);


// let number = [1,2,3,4]
// let sum = number.reduce((totol , num) => totol + num, 0)
// console.log(sum);

// Үй жумыс\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// 1 задание

// let number = [1 , 2 , 3 , 4 , 5]
// alert("Бастапқы массивті сандар:   " + number)
// let triple =number.map(num => num * num * num);
// alert("Сандардын кубтанганнан кейің:   " + triple)
// for (let num of triple) {
//     if(num%2!==0){
//         console.log("Кубталған сандардын ішіндегі тақ сандар:  " + num)
//     }
// }

// // 2 задание 

// let isStudent = +prompt("Қанша студент бар? ")
// let studentGrades = []
// while(isStudent!==0){
//     const number = +prompt("Студентін бағасы:  ")
//     console.log("Студенттің бағасы:  " + number);
//     studentGrades.push(number)
//     isStudent-- 
// }
// const totalSum = studentGrades.reduce((total, num) => total + num , 0)
// console.log("Ортақ баға:  " + totalSum / studentGrades.length);
// const gradesMoreThan85 = studentGrades.filter(grade=>grade>=85)
// console.log("85 -тен жоғары бағалар:  " + gradesMoreThan85);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// let car = {
//     marka:"TOYOTA",    /// 1
//     model:"CAMRY",
//     year:"2024"
   
// };
// console.log(car.marka); // TOYOTA
// console.log(car.model); // CAMRY
// console.log(car.year);  // 2024
// console.log(car); // ВСЕ

// car.marka = "lexus"
// console.log(car.marka );

// car.collor = "white" 
// console.log(car.collor);



// let divece = {
//     diviceName: "Samsung",             // 2
//     model: "Smartfone",
//     mashe: 400000 ,
//     discount: function(){
//         return this.mashe * 0.9
//     }
// }
// console.log(`Телефонный скидкамен бағасы ${divece.discount()} тенге`);



// let man = {
//     name: "ҚУАНЫШ",
    // age: 27,                  //// 3
//     born:"Алакол",
//     registration:"Алматы",
//     married: "ДА",
//     children:1,
//     info:function(){
        // return `Ваше имя ${this.name} \nВаше возраст:  ${this.age} лет  \nВаше место-рождения:  ${this.born} \nВаше место-прописка:  ${this.registration} \nЖенатыливы:  ${this.married} \nEсли увас дети:  ${this.children} ребенык `
//     }
// }
// console.log(man.info());


// let menu = {
//     menu1: ["ПИЦЦА","СУШИ","ФРИ"],
//     listeMenu: function(){                     //4
//         console.log(this.menu1[1]);
        
//     }
// }
// menu.listeMenu()


// let bookObj = {
//     books:["Ер-Тостик","Абай Жолы"],
//     addBook: function(kitap){
//         this.books.push(kitap)                 //// 5
//     }
// }

// let kitapQos = prompt("Кандай китап косасын")
// bookObj.addBook(kitapQos)
// console.log(bookObj.books);



// let kinoObj = {
//     kino:["Железный человек","Титаник","Астрал"],
//     addKino: function(movie){
//         this.kino.push(movie)                 //////6
//     }
// }

// let kinoQos = prompt("Кандай кино коса")
// kinoObj.addKino(kinoQos)
// console.log(kinoObj.kino);


// Үй жумысы ///////////////////////////////////////////////////////////////////////////////////////////////////////////////


// let Footbol = {
//     name: "Ronaldo",
//     lastname: "Cristiano",
//     goal: 913,
//     age: 39,
//     club: ["Sporting","Man United","Real Madrid","Juventus","Al-Nasr"],

  

//     fullName: function(){
//         return  `${this.lastname} ${this.name}`
//     },
    
//     songyclub: function(){
//          return this.club[this.club.length - 1];
//     }
    
// }; 

// alert(`Name: ${Footbol.name} \nLastname: ${Footbol.lastname} \nGoal: ${Footbol.goal} \nAge: ${Footbol.age}  \nClubs: ${Footbol.club}`);

// Footbol.goal +=2

// console.log(`Имя игрока: ${Footbol.fullName()} \nПоследний клуб, который играл: ${Footbol.songyclub()} \nКоличество забитых мячей в карьере игрока: ${Footbol.goal}`);



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// let user = {                          1 мысал
//     name:"Kuanysh",
//     age: 27,
//     hobbies: ["Musik","Kino","Slipe"]
// }

// while(true){
//     let hobby = prompt("Хоби турлері")
//     if(hobby == 0){
//         break;
//     }
//     else{
//         user.hobbies.push(hobby)
//     }
// }

// let uzyndyk = user.hobbies.filter(
//     hobbies => hobbies.length >=6)

// console.log(uzyndyk);

// console.log(user);



// let users = [
//     {
//         name:"Қуаныш",                  //2 мысал//
//         age:"27",
//     },
//     {
//         name:"Дина",
//         age:"26",
//     },
//     {
//         name:"Назерке",
//         age:"18",
//     },
//     {
//         name:"Назерке",
//         age:"20",
//     }
// ]
// console.log(users[1]); //name:"Дина"   age:"26" 
// console.log(users.filter(jasy=>jasy.age>=25));  // Жасы 25 үлкен н\е тендер шыгады
// console.log(users.filter(aigerim=>aigerim.name == "Назерке"));  // толко Назеркелер шыгады

// let course = {
//     courseAty:"Amjilt Cuber scholle",
//     teacher: [
//         {
//             name:"Galymbek",
//             age:30,
//             hobbi:["Musik","Kino","Slipe"],
//         },
//         {
//             name:"Temirlan",
//             age:27,
//             hobbi:["Musik","Kino","Slipe"],
//         },
//         {
//             name:"Roza",
//             age:21,
//             hobbi:["Musik","Kino","Slipe"],
//         }
//     ],
//     student: [
//         {
//             name:"Kuka",
//             age:28,
//         },
//         {
//             name:"Beka",
//             age:26,
//         },
//         {
//             name:"Ifrat",
//             age:26,
//         },
//     ],

// }
// course.teacher[2].name = "Arujan"  //  Roza озгерды Arujan
// course.teacher.push({name:"Dilnaz", age:28,}) // Dilnaz косылды
// console.log(course);

// let Flatted = course.teacher.flatMap(hobbies=>hobbies.hobbi)   // 1 тури
// console.log(Flatted);

// let flatted =[]                                                 // 2 тури
// for (let i=0; i<course.teacher.length; i++){
//     flatted.push(course.teacher[i].hobbi)
// }
// console.log(flatted.join(","));

////////////////////////////// практика///////////////////////////////////////////
// let classs = {
//     student:[
//                 {
//                     name:"Куаныш",
//                     age:27,
//                     lessons:["Алгебра","Химия","Физика"],
//                 },
//                 {
//                     name:"Назерке",
//                     age:18,
//                     lessons:["Английский","География","Литература"],
//                 },
//                 {
//                     name:"Дина",
//                     age:26,
//                     lessons:["Английский","Литература","Алгебра"],
//                 },
//             ]
// }

// console.log(classs);                        /////1//////
// let flatted = classs.student.flatMap(lesson=>lesson.lessons)
// console.log(flatted);

// function youngStudent(){                        /////2/////
//     let min = classs[0].age
//     let jasOqushy = ""
//     for(let i=1;i<classs.length;i++){
//         if(min>classs[i].age){
//             min = classs[i].age
//             jasOqushy = classs[i].name
//         }
//     }
//     alert("ен жас окушы" + jasOqushy + "\nжасы" +min)
// }
// youngStudent()


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let student = {name:"Kuanysh" , nickname:"OTSA_CITY", age:27}
// let {nickname, age} = student


// console.log(nickname);             ///1 тури
// console.log(age);

// let info = {...student, hobby:"play gamin"}
// console.log(info);


// let number = [10,20,30,40,50,60]

// let [ num1, num2, num3, num4, num5] = number

// console.log(num1);                   ///2 тури
// console.log(num2);
// console.log(num3);

// let name = ["Efrat","Beka","Gulnara","Kuanysh","Aziz",...number]
// console.log(name);


// let arr1 = [1,2,3,4,5]
// let arr2 = [6,7,8,9,10]

// let merget = [...arr1,...arr2];
// console.log(merget);


// let arr3 = [1,2,3,4,5,6]
// let [a,b,...reseted] = arr3

// console.log(arr3);



// практика

// let book = { title: "Абай жолы", author: "Мұхтар Әуезов", year: 1942 };
// let {title,author,year} = book

// console.log(book);
// console.log(title);          ///1
// console.log(author);
// console.log(year);


// let fruits = ["алма", "алмұрт", "шие"];
// let{fruit, ...ostalnye} = fruits                ///2

// console.log(fruits);


// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];               ///3
// let  number =[...arr1,...arr2] 
// console.log(number);


// let user = { name: "Али", age: 25 };
// let {name,age} = user                       ////4
// let plus = {...user, hobby: "нет"}
// console.log(plus);




// let person = {
//     name: prompt("Атынызды жазыныз"),
//     age: +prompt("Жасынызды жазыныз"),
//     hobby: prompt("Хоббиинизди жазыныз")
// }
// let {name,age,hobby} = person

// if(age<0){                                        /////5
//     alert("Сен әлі туылмадын")
// }
// else if(age>18 && age<100){
//     alert("Сен ересексін")
// }
// else if(age>100){
//     alert("Қашан өлесін")
// }
// else{
//     alert("Еу шигол")
// }

// let people = {
//     name:"Оқушылардын атты",
//     student: [
//         {
//             name:"Азиз",
//             age:23,
//             hobby:"кино",
//         },
//         {
//             name:"Айсулу",
//             age:32,
//             hobby:"музыка",
//         },
//         {
//             name:"Гулнара",
//             age:32,
//             hobby:"игры",
//         }
//     ],
//     addStudent:function(){
//     },
//     showEvery: function(){
//         return this.student
//     }
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


1///////////


// let student=[
//     {name:"Қуаныш",age:28,math:85,hobby:"GAMING",},
//     {name:"Дина",age:27,math:90,hobby:"English",},
//     {name:"Назерке",age:18,math:60,hobby:"French",},
//     {name:"Бекарыс",age:19,math:85,hobby:"The Medicine",},
//     {name:"Ифрат",age:26,math:85,hobby:"IT-PROGRAM",},
// ]
// //////////////////////////////
// for(let i=0; i<student.length; i++){
//     console.log("АТЫ:",student[i].name);
// };
// //////////////////////////////
// let student2 = student.filter(student=>student.age>20)
// console.log(student2);
// ///////////////////////////////
// let evaluations = student.map(student=>Number((student.math * 1.1).toFixed(0)))
// console.log(evaluations);
// ///////////////////////////////
// console.log(evaluations.reduce((total, num)=>total + num,0));
// //////////////////////////////

// let maxScore = student[0].math;
// let scoreMan = student[0].name;
// for(let i=0; i<student.length; i++){
//     if(maxScore < student[0].math){
//         maxScore = student[0].math;
//         scoreMan = student[0].name;
//     }
// };
// alert("Ең жоғары бал алған:  " + scoreMan + "\nОнын балы:  " + maxScore)


// 2///////////

// let product = [
//     {name:"Samsung",price:300000,},
//     {name:"Iphone",price:400000,},
//     {name:"Meizu",price:180000,},
//     {name:"Huawei",price:200000,}
// ]
// console.log(product);
// ////////////////////////////
// let evaluations2 = product.filter(product=>product.price>200000)
// console.log(evaluations2);
// //////////////////////////
// console.log(evaluations2.reduce((total, num)=>total + num,0));

// 3///////////
// 4///////////
// 5///////////


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let taqyryp = document.getElementById('title')
// console.log(taqyryp);

// let textter = document.getElementsByClassName('text')
// console.log(textter[0].textContent); //// 1//////

// let element = document.querySelector


// let taqyryp =document.getElementById('news-title')
// taqyryp.textContent = "JavaScript жаңартулары"

// let mazmun = document.querySelector('#news-content')
// mazmun.innerHTML = "JavaScript бағдарламалау әлеміндегі ең соңғы жаңалықтарды оқыңыз."

// let silteme = document.querySelector('#news-link')
// silteme.href = "https://google.com"

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function buttenClick(){
//     alert("hello guss ")
// }

// let taqyryp = document.getElementById("title")

// taqyryp.addEventListener("dblclick",function(){
//     taqyryp.style.fontSize = "50px";
//     taqyryp.style.color = "red";
//    alert("и че хочешь")
// } )

// let qorap = document.querySelector('.box')

// qorap.addEventListener("mouseenter",function(){
//     qorap.style.backgroundColor = "red"
//     qorap.style.transitionDuration = "3s"
//     qorap.style.borderRadius = "20%"
// })
// qorap.addEventListener('mouseleave',function(){
//     qorap.style.backgroundColor = "white"
//     qorap.style.transitionDuration = "1s"
//     qorap.style.borderRadius = "40%"
// })

// let items = document.getElementsByClassName('element')

// for(let element of items){
//     element.addEventListener("mouseenter",function(){
//     element.style.fontSize = "20px";
//     element.style.color = "red";
//     })
//     element.addEventListener("mouseleave",function(){
//     element.style.fontSize = "20px";
//     element.style.color = "black";
//     })

// }
// let items2 = document.getElementById('noll')
// let items3 = document.getElementById('qosyndy')

// items3.addEventListener("click",function(){

//     let sanQosu = parseInt(items2.textContent)
//     items2.textContent = sanQosu+1
// })

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let formInput = document.getElementById('form')
// let error = document.getElementById('errorMassege')

// formInput.addEventListener('submit',(event)=>{
//     event.preventDefault() // сактап калад
//     let emalInput = document.getElementById('email').value // mail корсетед
//     let passwordInput = document.getElementById('password').value // парол корсетет
    
//     console.log("email",emalInput);
//     console.log("password",passwordInput);  

//     if(!emalInput.includes('@')){
//         error.textContent = 'Увась проблема с EMALI.RU !!!'
//     }
//     else if(passwordInput.length <= 6){
//         error.textContent = 'ваш пароль менши 6 цифыр'
//     }
//     else{
//         error.textContent = ''
//         error.style.color = 'green'
//         error.textContent = 'увась взе впорядки!!!!'
//         console.log({email: emalInput,  password:passwordInput});
//     }
// })
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let dropDown = document.getElementById('dropdown')
// let text = document.getElementById('tandalgan')

// dropDown.addEventListener('change',()=>{
//     text.textContent = dropDown.value
// })

// // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let focused = document.getElementById('focus')
// let paragraf = document.getElementById('focusedText')

// focused.addEventListener('focus',()=>{
//     paragraf.textContent = 'как ты'
// })
// focused.addEventListener('blur',()=>{
//     paragraf.textContent = 'норм'
// })

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let inputed = document.getElementById('inputed')
// let text1 = document.getElementById('text1')

// inputed.addEventListener('input', ()=>{
//     text1.textContent = inputed.value
// })

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let tizim = document.createElement('ul')
// tizim.textContent = 'hellooooooooooooooooooooooooooooooooooo'

// let tizim1 = document.createElement('h5')
// tizim1.textContent = "ЭТО СЛОВА"

// let divElement = document.getElementById('container')
// divElement.appendChild(tizim)
// divElement.appendChild(tizim1)

//////////////////////////

// let batyrma = document.getElementById('buteen')
// let tizim = document.createElement('ul')
// let i = 1

// let divElement = document.getElementById('container')
// // HTML Кужат косылды
// divElement.appendChild(tizim)

// batyrma.addEventListener('click',()=>{
//     let tizimElement = document.createElement('li')
//     tizimElement.textContent = `Тизим елеменрт ${i++}`
//     tizim.appendChild(tizimElement)
// })

/////////////////////////////////////////////

// let name = [ {name:"Aisaule" },{name:"Ifrat"},{ name:"Gulnara"},{name:"Aziz" }]

// let batyrma = document.getElementById('buteen')
// let tizim = document.createElement('ul')
// // let i = 1
// let divElement = document.getElementById('container')
// //HTML kosylady
// divElement.appendChild(tizim)

// for(let element of name){

// }
////////////////////////////////////////////

// let containerElement = document.getElementById('container') // ata-analyk element
// let secondElrment = document.getElementById('second') // bala element

// let butten = document.getElementById('removeButton')

// butten.addEventListener('click',()=>{
//     containerElement.removeChild(secondElrment)
// })

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let addBtn = document.getElementById('addBtn')
// let listBox = document.getElementById('list-box')
// let searshBtn = document.getElementById('searsh-btn')

// addBtn.addEventListener('click',(event)=>{
//     event.preventDefault() //сохряняет
//     let toDoItem = document.getElementById('newTask').value
//     console.log(toDoItem);
//     if(toDoItem && toDoItem !=null && toDoItem !=undefined){
//         let createItem = createNewList(toDoItem)
//         listBox.appendChild(createItem)
//     }
// })

// searshBtn.addEventListener('click',(event)=>{
//     event.preventDefault()
//     let searshText = document.getElementById('searsh-text').textContent.toLowerCase()
//     // console.log("izdey ishindegi man ", searshText.value);
    
//     let items = listBox.querySelectorAll('div')

//     items.forEach((item)=>{
//         let paragraph = item.querySelector('p').textContent.toLocaleLowerCase()
//         console.log("paragraph manderi: ",paragraph);
//         if(paragraph === searshBtn.value.toLowerCase()){
//             item.style.display = 'block'
//         }
//         else{
//             item.style.display = 'none'
//         }
        
//     })
    
    
// })


// function createNewList(newToDoItem){
//     let newDiv = document.createElement('div')
//     let itemName = document.createElement('p')
//     let deleteButton = document.createElement('button')
//     newDiv.className = "newDiv"

//     itemName.textContent = newToDoItem
//     deleteButton.textContent = "Өшіру"

//     deleteButton.addEventListener('click',()=>{
//         listBox.removeChild(newDiv)
//     })

//     newDiv.appendChild(itemName)
//     newDiv.appendChild(deleteButton)

//     return newDiv
// }


// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let posts = []

// function addpost(event){
//     event.preventDefault()
//     const titleInput = document.getElementById('titleInput')
//     const contentInput = document.getElementById('contentInput')

//     if(titleInput.value && contentInput.value){
//         const post = {
//             id: Date.now(),
//             title: titleInput.value,
//             content: contentInput.value
//         }
//         posts.push(post)
        
//         renderPosts()
        
//         titleInput.value = ''
//         contentInput.value = ''
//     }
// }

// function renderPosts(){
//     const blogPostsDiv = document.getElementById('blogPosts')
//     blogPostsDiv.innerHTML = ''

//     posts.forEach(post=>{
//         const postDiv = document.createElement('div')
//         postDiv.className = 'post'
//         postDiv.innerHTML = `
//             <h2>${post.title}</h2>
//             <p>${post.content}</p>
//             <small>${post.id}</small>
//             <button class="button" style="background-color: orange;" >ӨНДЕУ</button>
//             <button class="button" style="background-color: red;">ЖОЮ</button>
//     `
//     blogPostsDiv.appendChild(postDiv)
//     })
// }

// let addbtn = document.getElementById('addPostBtn')
// addbtn.addEventListener('click',addpost)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// setTimeout(()=>{
//     console.log("кідірістен кейінгі 1");
    
// },1000)

// setTimeout(()=>{
//     console.log("кідірістен кейінгі 2");
    
// },2000)

// setTimeout(()=>{
//     console.log("кідірістен кейінгі 3");
    
// },3000)

// setTimeout(()=>{
//     console.log("кідірістен кейінгі 4");
// },4000)

// //////////////////////////////////////////////////

// let count = 0

// let interval = setInterval(()=>{
//     count++
//     console.log(`санак саны: ${count}`);
//     if(count==5){
//         clearInterval(interval)
//     }
    
// },1000)

// //////////////////////////////////////////////////

// function fethDate(){
// console.log("Деректер алыну басталды")
// setTimeout(()=>{
//     console.log("Дерек:" , {name:"КУАНЫШ",work:"МАСТЕР"});
// },4000)
// setTimeout(()=>{
//     console.log("Дерктер алынуда...");
// },1000)
// }
// fethDate()

// практика1 ///////////////////////////////////////////////

// const users = [
//     { id: 1, name: "Алихан", age: 25 },
//     { id: 2, name: "Айгерім", age: 30 }, 
//     { id: 3, name: "Медет", age: 22 },
// ]

// console.log("Деректер алыну басталды")

// setTimeout(()=>{
//     console.log("Дерктер алынуда...");
// },1000)
// setTimeout(()=>{
//     console.log(users);
// },2000)

// практика2 ///////////////////////////////////////////////

// let time = document.getElementById("time")
// let end =document.getElementById("end")
// let times = parseInt(time.textContent)

// setInterval(()=>{
//     times--;
//     if(times>0){
//         time.textContent = times
//     }
//     else{
//         time.textContent = ""
//         end.textContent = "УАҚЫТ АЯҚТАЛДЫ"
//     }
// },1000)

// практика3 ///////////////////////////////////////////////

// let time = document.getElementById("time")
// let end =document.getElementById("end")
// let times = parseInt(time.textContent)

// setInterval(()=>{
//     times--;
//     if(times>0){
//         time.textContent = times
//     }
//     else{
//         time.textContent = ""
//         end.textContent = "УАҚЫТ АЯҚТАЛДЫ"
//     }
// },1000)

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let time = 100

// function otjimanya(otjimanyaSanaq){
//     return new Promise((resolve, reject)=>{
//         if(otjimanyaSanaq>100){
//             reject(new Error("тым коп отжимания жасадым!"))
//         }
//         setTimeout(()=>{
//             resolve()
//         },otjimanyaSanaq*time)
//     })
// }
// function presaniy(presedaniySanaq){
//     return new Promise((resolve, reject)=>{
//         if(presedaniySanaq>200){
//             reject(new Error("тым коп присидания жасадым!"))
//         }
//         setTimeout(()=>{
//             resolve()
//         },presedaniySanaq*time)
//     })
// }

// console.log("Жаттығу жасалу басталды!");


// otjimanya(100).then(()=>{
//     console.log("Сіз сәтті турде отжимания жасадыныз!");
//     return presaniy(201)
// }).then(()=>{
//     console.log("Сіз сәтті турде присидания жасадыныз!");
    
// }).catch((err)=>{
//     console.log(err.toString());
    
// })

///////////////////////////////////

// fetch('https://jsonplaceholder.typicode.com/users').then(qoldanushylar=>{
//     if(qoldanushylar.ok){
//         console.log("Сервирден қабылдап алынған қолданушылар: " , qoldanushylar.json());
//     }
// }).catch(()=>{
//     console.log("Аұпараттарды қабылдап алу мүмкін емес");
// })

// function fetchDate(silteme){
//     return new Promise((resolve,reject)=>{
//         fetch(silteme).then(response=>{
//             if(response.ok){
//                 resolve(response.json())
//             }else{
//                 reject(new Error(""))
//             }
//         })
//     })
// }
// fetchDate('https://jsonplaceholder.typicode.com/users').then(response=>{
//     response.forEach((item)=>{
//         console.log(item.name);
//     })
// }).catch(err=>{
//     console.log(err.toString());
// })

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function fetchdata(url) {
//     return new Promise((resolve,reject) =>{
//         fetch(url).then(response=>{
//             if(response.ok){
//                 resolve(response.json())
//             }else{
//                 reject(new Error("Aqparattardy alu mumkin bolmady!"))
//             }
//         })
       
//     })
    
// }
// fetchdata(' https://jsonplaceholder.typicode.com/users ').then((otvet)=>{
//     displayData(otvet)
//  }).catch(qate=>{
//      console.log(qate.toString());
    
//  })

//  function displayData(massiv){
//     console.log(massiv);

//     let conteyner = document.querySelector('.conteyner')

//     massiv.forEach(element=>{
//         let divElement = document.createElement('div')
//         let name =  document.createElement('h2')
//         let paragraf =  document.createElement('p')

//         name.textContent = element.name
//         paragraf.textContent = element.email

//         divElement.appendChild(name)
//         divElement.appendChild(paragraf)

//         conteyner.appendChild(divElement)
         
//         divElement.className = ("div")
//         name.className = ("h2")
//         paragraf.className = ("p")
//     })
    
//  }

//  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function fetchdata(url) {
        return new Promise((resolve,reject) =>{
            fetch(url).then(response=>{
                if(response.ok){
                    resolve(response.json())
                }else{
                    reject(new Error("Aqparattardy alu mumkin bolmady!"))
                }
            })
           
        })
        
    }
    fetchdata(' https://jsonplaceholder.typicode.com/posts ').then((otvet)=>{
        muraEl(otvet)
}).catch(qate=>{
         console.log(qate.toString());

})

function muraEl(massiv){
    console.log(massiv);

    let btn = document.getElementById('btn')
    let result = document.querySelector('.result')

    btn.addEventListener('click',()=>{
        let text = document.getElementById('text').value
        let searsh = lext.toLowerCase()

        massiv.forEach(element=>{
            if(){
                
            }
        })
    })
    

}




 















