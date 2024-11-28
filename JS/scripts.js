

// Үй жумыс\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// 1 задание

let number = [1 , 2 , 3 , 4 , 5]
alert("Бастапқы массивті сандар:   " + number)
let triple =number.map(num => num * num * num);
alert("Сандардын кубтанганнан кейің:   " + triple)
for (let num of triple) {
    if(num%2!==0){
        console.log("Кубталған сандардын ішіндегі тақ сандар:  " + num)
    }
}

// 2 задание 

let isStudent = +prompt("Қанша студент бар? ")
let studentGrades = []
while(isStudent!==0){
    const number = +prompt("Студентін бағасы:  ")
    console.log("Студенттің бағасы:  " + number);
    studentGrades.push(number)
    isStudent-- 
}
const totalSum = studentGrades.reduce((total, num) => total + num , 0)
console.log("Ортақ баға:  " + totalSum / studentGrades.length);
const gradesMoreThan85 = studentGrades.filter(grade=>grade>=85)
console.log("85 -тен жоғары бағалар:  " + gradesMoreThan85);




 
















