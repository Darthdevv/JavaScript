console.log(1);
console.time();
console.timeLog();
document.getElementById('greeting').innerHTML = 'yousef';

document.getElementById("submit").onclick=() => {
  let vala = document.getElementById("a").value;
  vala = Number(vala);
  let valb = document.getElementById("b").value;
  valb = Number(valb);
  valc = Math.sqrt(Math.pow(vala, 2) + Math.pow(valb, 2));
  console.log(vala);
  console.log(valb);
  console.log('the hypotenuse is ' + valc);
}
let word = 'Yousef';
let adjutedword = word.toLowerCase().trim();
console.log(adjutedword);
