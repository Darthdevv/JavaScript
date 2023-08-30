function isPrime(number) {

    if (number <= 1) return false;

    for (let i = 2; i < number; i++){
      if (number % i == 0) return false;
    }
    return true;
  }


isPrime(11) ? console.log("true") : console.log("false");
  

function nameString(name) {
  let result = ''
	return result += name+"Edabit"
}

console.log(nameString("yousef"));



function greeting(name) {
  if (name == "Mubashir") return "Hello, my Love!";
  return "Hello, " + name + "!";
}

console.log(greeting('Mubashir'));
console.log(greeting('Yousef'));


function boolToString(flag) {
  return String(flag);
}

console.log(typeof true)
console.log(boolToString(true));
console.log(typeof boolToString(true))
console.log(boolToString(false));


function normal(a, b) {
  console.log(a, b);
}

console.log(normal("a", "b"));


function currying(a) {
  return function (b) {
    console.log(a, b);
  }
}
console.log(currying(4)(5));

//local storage:
localStorage.setItem('name', 'bob');
console.log(localStorage.getItem('name'));
localStorage.removeItem('name');
console.log(localStorage.getItem('name'));

//session storage:
sessionStorage.setItem('job', 'manager');
console.log(sessionStorage.getItem('job'));

//cookies:
document.cookie = 'name=Yousef; expires=' + new Date(2024, 1, 1).toUTCString();
document.cookie = 'job=manager; expires=' + new Date(9999, 0, 1).toUTCString();


function area(base,height) {
  return (base * height) / 2;
}

console.log(area(2, 3));

function cubic(number) {
  return number ** 3;
}

console.log(cubic(5));