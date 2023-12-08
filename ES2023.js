const sayHi = function(){
  return 'hello';
}

let func = sayHi();

console.log(func);
console.log(sayHi());

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  'Do you agree?',
  function () {
    alert('You agreed.');
  },
  function () {
    alert('You canceled the execution.');
  }
);