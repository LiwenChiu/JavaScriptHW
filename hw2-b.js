let Original = 93784;
let Second = Original % 60;
let Minute = ((Original - Second) / 60) % 60;
let Hour = ((Original - Second - Minute * 60) / 60 / 60) % 24;
let Day = (Original - Second - Minute * 60 - Hour * 60 * 60) / 60 / 60 / 24
console.log(Original + '秒 =' + Day + '天' + Hour + '小時' + Minute + '分' + Second + '秒');



