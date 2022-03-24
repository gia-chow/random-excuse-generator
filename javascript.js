var intro = [
    "Sorry I can't come",
    "Please forgive my absence,",
    "This is going to sound crazy but",
    "Get this:",
    "I can't go because",
    "I know you're going to hate me but",
    "I was minding my own business and boom!",
    "I feel terrible but",
    "I regretfully cannot attend,",
    "This is going to sound like an excuse but",
]

var scapegoat = [
    "my neighbor",
    "the ghost of my cat",
    "the Pope",
    "my ex",
    "a high school marching band",
    "Bob Saget",
    "a sad clown",
    "the kid from Sandlot",
    "a professional cricket team",
    "my Tinder date"
]

var delay = [
    "just shit the bed",
    "died in front of me",
    "won't stop telling me knock knock jokes",
    "is having a nervous breakdown",
    "gave me syphilis",
    "poured lemonade in my gas tank",
    "stabbed me",
    "found my box of human teeth",
    "stole my car",
    "robbed a grocery store"
]

function newExcuse() {
    var randomIntro = Math.floor(Math.random() * (intro.length));
    var randomScapegoat = Math.floor(Math.random() * (scapegoat.length));
    var randomDelay = Math.floor(Math.random() * (delay.length));
    document.getElementById('excuseDisplay').innerHTML = intro[randomIntro] + " " + scapegoat[randomScapegoat] + " " + delay[randomDelay] + ".";
}