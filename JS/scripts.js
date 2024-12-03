


// Үй жумысы ///////////////////////////////////////////////////////////////////////////////////////////////////////////////


let Footbol = {
    name: "Ronaldo",
    lastname: "Cristiano",
    goal: 913,
    age: 39,
    club: ["Sporting","Man United","Real Madrid","Juventus","Al-Nasr"],

  

    fullName: function(){
        return  `${this.lastname} ${this.name}`
    },
    
    songyclub: function(){
         return this.club[this.club.length - 1];
    }
    
}; 

alert(`Name: ${Footbol.name} \nLastname: ${Footbol.lastname} \nGoal: ${Footbol.goal} \nAge: ${Footbol.age}  \nClubs: ${Footbol.club}`);

Footbol.goal +=2

console.log(`Имя игрока: ${Footbol.fullName()} \nПоследний клуб, который играл: ${Footbol.songyclub()} \nКоличество забитых мячей в карьере игрока: ${Footbol.goal}`);








 
















