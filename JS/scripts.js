// 1 САБАК
// const studentName='Али',
// age=25,
// isStudent=true,
// ageInStr ='25'
// console.log(`Аты: ${studentName} | типі: ${typeof studentName}`)
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
//     if(i%3==0 && i%5==0){
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
//     }
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












