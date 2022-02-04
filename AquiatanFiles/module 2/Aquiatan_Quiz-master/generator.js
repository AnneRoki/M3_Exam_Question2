var animan = [
    "It was short but it felt long", "Do what you love, and love what you do",
    "The smartest people are usually the ones who know what they don't know", 
    "Popular does not equal good", "If your put your mind to it, life isn't actually that hard"
]

function animu() {
    var aniquotes = Math.floor(Math.random() * (animan.length));
    document.getElementById('anime').innerHTML = animan[aniquotes];
}

var lebron = [
    "Maybe my pain was motivation", "I like criticism. It makes you strong",
    "You can't be afraid to fail. It's the only way you succeed. You're not gonna succeed all the time and I know that",
    "I treated it like every day was my last day with a basketball", 
    "There is a lot of pressure put on me, but I don't put a lot of pressure on myself. I feel if I play my game, it will take care of itself"
]

function baller() {
    var ballquotes = Math.floor(Math.random() * (lebron.length));
    document.getElementById('ball').innerHTML = lebron[ballquotes];
}

var mrb = [
    "Life isn't about finding yourself, Life is all about creating yourself!", 
    "Me being an idiot is the core part of my videos!", "One of the great things about giving always money is just I love to watch people's reaction & happiness!",
    "Dying with a lot of money is a dumb thing!", "I only make content that just deserves to get more views!"
]

function beastie() {
    var mrbquotes= Math.floor(Math.random() * (mrb.length));
    document.getElementById('beast').innerHTML = mrb[mrbquotes];
}

var iroman = [
    "We need to be put in check. Whatever form that takes, I'm game.",
    "Sometimes you've gotta run before you can walk.",
    "I love you 3000", "I am Iron Man", "Everybody wants a happy ending. Right? But it doesn't always roll that way"
]

function irony() {
    var ironquotes= Math.floor(Math.random() * (iroman.length));
    document.getElementById('iron').innerHTML = iroman[ironquotes];
}

var gawra = [
    "Don't worry about it. Don't worry about it. You know what? Not every adventure comes to a happy ending. Sometimes you just gotta retrace, go back, and start over.",
    "Don't be an asshole, just go about your day and don't bother anyone", "Wake up, You lazy",
    "Sometimes in life, you try to hit life with a hui-tcha, but then life decides to hit you with a hui-tcha. Do you know what you do in this predicament, when life hui=tcha's you? You go again",
    "If you quit when you suck, you'll suck forever"
]

function samegaki() {
    var samequotes= Math.floor(Math.random() * (gawra.length));
    document.getElementById('gawr').innerHTML = gawra[samequotes];
}