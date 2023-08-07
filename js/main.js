function randomQoute(){
    var Quotes = ["Two things are infinite: the universe and human stupidity; and I'm not sure about the universe ",


`“You've gotta dance like there's nobody watching,
Love like you'll never be hurt,
Sing like there's nobody listening,
And live like it's heaven on earth.”`,


`“You only live once, but if you do it right, once is enough.”`,


`“Be the change that you wish to see in the world.”`]




var whoSaid = ["― Marcus Tullius Cicero", `― William W. Purkey`,    `― Mae West`,`― Mahatma Gandhi`,

]



var randdd = Math.floor( Math.random() * whoSaid.length);
document.getElementById("Quotes").innerHTML = Quotes[randdd];
document.getElementById("whoSaid").innerHTML = whoSaid[randdd];

}

