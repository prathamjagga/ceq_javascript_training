// on the basis of syntax

// simple functions
function hello() {
  console.log("hello");
  return true;
}

// arrow functions

const hello = () => {
  console.log("hello");
  return true;
};

// small/one line
const hello = () => console.log("hello");

// on the basis of visibility

() => {};
// or this way
setTimeout(function () {
  // anonymous/unnamed/unassigned
  console.log("hello");
  return true;
}, 1000);

// on the basis of return value

function hello() {
  return 1;
}

function hello() {
  // logic
  // ....
  // ....
  // returns nothing
}

// on the basis of arguments

// single
function hello(arg1) {
  console.log(arg1);
  return;
}

// multiple
function hello(arg2, arg1) {
  console.log(arg2 + arg1);
}

// no args
function hello() {
  console.log("hello");
}

// other type: direct invoked function

// const a = (function () {
//   // logic
//   return 10;
// })();

// callback functions, which is to be executed after another has completed its execution

// callback 👇
function showAlert(arg) {
  alert(arg);
}

function customLogic(argument, callback) {
  // ...logic
  callback(argument);
  return;
}

// higher order : returns a function or takes in a function as an argument or both

function higherOrder(callback) {
  return callback();
}

function higherOrder2() {
  return function () {
    console.log("hello");
  };
}

function higherOrder3(callback) {
  return function (callback) {
    // some kind of logic
  };
}
hello();
var a = (function () {
  return 1;
})();

function hello() {
  console.log("hello");
}

console.log(a);

//GENERATOR

function* gen() {
  var index = 0;
  while (true) {
    yield index++;
  }
}

const g = gen();
console.log(g.next().value);
console.log(g.next().value);

// new function

const s = (sum = Function("numa", "numb", "return numa + numb"));
console.log(sum(10, 20));

// First-class functions are functions that are treated as variables. They can also be parsed into other functions as arguments.

const Person = {
  play: (name) => {
    return `Hey ${name} is playing`;
  },
  dance: (name) => {
    return `${name} can dance`;
  },
  walk: (name) => {
    return `I am sure ${name} can walk `;
  },
};

console.log(Person.play("Chibueze"));
console.log(Person.dance("Chibueze"));
console.log(Person.walk("Chibueze"));
