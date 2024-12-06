1///////
let student=[
        {
            name:"Қуаныш",
            age:28,
            grades:{
                math:85,
                english:30,
                science:80,
            },
            address:{
                city:"Алматы",
                street:"6-мкр",
            },
        },
        {
            name:"Дина",
            age:27,
            grades:{
                math:85,
                english:100,
                science:80,
            },
            address:{
                city:"Талгар",
                street:"сентралная",
            },
        },
    ]
    for(let i =0; i<student.length; i++){
        console.log("АТЫ:",student[i].name);
        console.log("МАТЕМАТИКАДАН БАҒАСЫ:",student[i].grades.math);
        console.log("ҚАЛАСЫ:",student[i].address.city);
        if(!student[i].country){
            student[i].country = "Қазақстан"
        }
        console.log("МЕМЛЕКЕТ",student[i].country); 
    }
2///////

// const classA = ["Амина", "Әділ", "Әлина"];
// const classB = ["Берік", "Бақыт", "Баян"];

// const classD = [...classA,...classB,]
// classD.unshift("Директор")
// classD.push("Мқғалим")
// console.log(classD);








