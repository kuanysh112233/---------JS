const artists = [ 
    {name: "Michael Jackson", songs: ["Smooth Criminal", "Billie Jean", "Beat It", "Earth Song"]}, 
    {name: "Billie Eilish", songs: ["Bad Guy", "Lovely", "Lunch", "Chihiro"]},
    {name: "Kairat Nurtas", songs: ["Auyrmaydy Zhurek", "Ol sen emes"]},
]
console.log(artists);   

artists[2].songs[1] = "Baika";
console.log(artists[2].songs);


console.log( `Әнші аты-жөні:  ${artists[0].name} \nCоңғы әні:  ${artists[0].songs[artists[0].songs.length - 1]}`);


const kyskaAnder = artists[1].songs.filter(song => song.length <= 6);

console.log(`Billie Eilish-тің аты қысқа әндері:`, kyskaAnder);