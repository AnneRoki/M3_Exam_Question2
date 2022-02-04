var stalin=[
    'Death solves all problems -no man, no problem.','When we hang the capitalist they will sell us the rope we use.'
    ,'One death is a tragedy; one million is a statistic','You cannot make a revolution with silk gloves',
    'a sincere diplomat is like dry water or wooden iron'
]
var manny=[
    'I amm just a regular person who believes life is simple, and i like a simple life.','"Gods words first.. obey Gods law first before considering the laws of man'
    ,'Human anger does not produce the righteousness that God desires','Nothing personal - i am just doing my job',
    'I come from a poor family'
]
var elon=[
    'life is too short for long-term grudges','Id rather be optimistic and wrong than pesseimistic and right',
    'I would like to die on mars. Just not on impact','Great companies are built on great products',
    'I think it matters whether someone has a good heart'
]
var duterte=[
    'I dont want anyone controlling me.','I will fight for the people until my last breath.',
    'Destiny is not designed bt mere mortals like us. It is crafted by God.','I am a man of many flaws and contradictions.'
    ,'Human rights must work to uplift human dignity.'
]
var jackma =[
    'Never give up. today is hard, tomorrow will be worse, but the day after tomorrow will be sunshine','You should learn from your competitor, but never copy and you die.'
    ,'Spending money is much more than making money.','I dont want to be liked. I want to be respected.'
    ,'When I am myself, I am happy and have a good result'
]
function jackb(){
    var index =0;
    var random = Math.floor(Math.random() * (jackma.length));
    var val=jackma[random]
    document.getElementById('jack').innerHTML =val;
    index = jackma.indexOf(val);
    jackma.splice(index,1);

}
function dutb(){
    var index =0;
    var random = Math.floor(Math.random() * (duterte.length));
    var val=duterte[random]
    document.getElementById('duterte').innerHTML =val;
    index = duterte.indexOf(val);
    duterte.splice(index,1);

}
function elob(){
    var index =0;
    var random = Math.floor(Math.random() * (elon.length));
    var val=elon[random]
    document.getElementById('elon').innerHTML =val;
    index = elon.indexOf(val);
    elon.splice(index,1);

}
function mannyb(){
    var index =0;
    var random = Math.floor(Math.random() * (manny.length));
    var val=manny[random]
    document.getElementById('manny').innerHTML =val;
    index = manny.indexOf(val);
    manny.splice(index,1);

}
function stalb(){
    var index =0;
    var random = Math.floor(Math.random() * (stalin.length));
    var val=stalin[random]
    document.getElementById('stalin').innerHTML =val;
    index = stalin.indexOf(val);
    stalin.splice(index,1);

}