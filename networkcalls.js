//FETCH API DETAILS
/*
fetch('https://api.github.com/users/uqutub/repos')
.then((response) => response.json())
.then((data) => console.log(data))
// OR
var apiUrl = 'https://api.github.com/users/uqutub/repos';
fetch(apiUrl)
.then((response) => response.json())
.then(d => console.log(d))
*/


// RESPONSE DETAILS
/*
var apiUrl = 'https://api.github.com/users/uqutub/repos';
fetch(apiUrl)
.then(response => {
    console.log('Response ' , response)
})
*/


// TO FETCH THE NAME OF THE REPOS VIA DATA MAP
/*
fetch('https://api.github.com/users/uqutub/repos')
.then((response) => response.json())
// .then((data) => console.log(data)) //Full API Details
.then((data) => {
    console.log(data.map(v => v.name)) // Short Lambda Function
})
*/
// OR 
// TO FETCH THE NAME OF THE REPOS VIA DATA MAP
/*
fetch('https://api.github.com/users/uqutub/repos')
.then((response) => response.json())
// .then((data) => console.log(data)) //Full API Details
.then((data) => {
    console.log(data.map((v)=>{ // Full Lambda Function
        return v.name;
    }))
})
*/




// SET TIMEOUT RUN ONLY ONE TIME AFTER 1.5 SEC
/*
console.log('line 1');
setTimeout(function(){
    console.log('line 2');
}, 1500)
console.log('line 3');
*/

// SET INTERVAL RUN CONTINOUS 1.5 SEC
/*
console.log('line 1');
setInterval(function(){
    console.log('line 2');
}, 1500)
console.log('line 3');
*/




// CHAINED PROMISE WITH .THEN .CATCH
/*
function login(user, password){
    const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
     if(user === 'admin' && password === 'admin'){
        resolve('Login Success'); //console.log('Successfully Login');
     }
     else{
        reject('Try Again'); //console.log('Retry');
     }
    }, 2000)
    })
    // myPromise.then((d)=>console.log('Login Success')).catch((d)=>console.log('Try Again'));
    // OR 
    return myPromise;
}

login('admin', 'admin')
.then((d) => console.log(d))
.catch((e) => console.log(e))
*/
// OR
/*
function abc(u,p){
        return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(u === 'Ali' && p === 'admin'){
                resolve('Successfully Login');
            }
            else{
                reject('Retry');
            }
        }, 300);
    });
}

abc('Ali', 'admin')
.then((d) => console.log(d))
.then(() => new Promise(res => res ('welcome to the dashboard')))
.catch((b) => console.log(b))
.finally(() => console.log('Finally Completed'))
*/





// SYNC AND ASYNC METHODS:
/*
console.log('line 1');
new Array(10).fill('A').forEach((v)=> console.log('line 2', v));
console.log('line 3');
*/


// ASYNC METHOD EXECUTION(line 1, line 3, then line 2 FETCH)
/*
console.log('line 1');
fetch('https://api.github.com/users/uqutub/repos')
    .then((response) => response.json())
    .then((d) => console.log('line 2' , d))
console.log('line 3');
*/


// SYNC METHOD EXECUTION(line 1, then line 2 FETCH, line 3)
/*
var l3 = 'line 3';
function foo(){
    console.log('line 1');
        fetch('https://api.github.com/users/uqutub/repos')
        .then((response) => response.json())
        .then((d) => { //Creating sync {}
            console.log('line 2' , d);
            console.log(l3);
        })
}
foo();
*/
// OR
/*
function completed (){
    console.log('line 3');
}
console.log('line 1');
fetch('https://jsonplaceholder.typicode.com/posts/')
.then((response) => response.json())
.then((d) => {
    console.log('line 2', d);
    completed();
})
*/
// OR
/*
function abc (){
fetch('https://jsonplaceholder.typicode.com/comments/1')
.then((response) => response.json())
.then((d) => {
    console.log('line 1', d);
        fetch('https://jsonplaceholder.typicode.com/albums/1')
        .then((response) => response.json())
        .then((b) => {
            console.log('line 2', b);
                fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
                .then((response) => response.json())
                .then((c) => {
                    console.log('line 3', c)
            })
        })
    })
}
abc();
*/


// NEW PROMISE WITH ASYNC FUNCTION KEYWORD USED WITH AWAIT TO MAKE A SYNC METHOD
/*
function abc(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res('line 2')
        },2000)
    })
}

async function asyncCall(){
    console.log('line 1');
    var awaitUse = await abc();
    console.log(awaitUse, 'line 3');
}
asyncCall();
*/


// FETCHING API WITH ASYNC AWAIT TO MAKE IT SYNC
/*
async function asyncFetch(){
    try{
    console.log('line 1');
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await response.json()
    console.log('line 2', data);
    console.log('line 3')
    }
    catch(err){
        console.log('error', err)
    }
}
asyncFetch();
*/



/*
var userName = 'Ameen Alam';
let age = 40;
const skills = 'js';

if (true) {
    // userName is in the local scope because of the 'let' keyword
    let userName = 'John Martin';
    console.log(userName); // output 'John Martin'
    // age is in the local scope because of the 'let' keyword
    let age = 20;
    console.log(age); // output 20
    // skills is in the local scope because of the 'const' keyword
    const skills = 'JavaScript';
    console.log(skills); // output 'JavaScript'
 }
 console.log(userName); // output 'Ameen Alam'
 console.log(age); // output 40
 console.log(skills); // output 'js'

 function func1() {
    var userName = 'John';
    // likes is not accessible here
    function parent() {
        // userName is accessible here
        // likes is not accessible here
        function child() {
            // Innermost level of the scope chain
            // userName is also accessible here
            var likes = 'Coding';
        }
    }
 }
*/
 
//  DESTRUTURING
// DESTRUCTURING FROM ARRAY TO VARIABLE
/*
var fruits = ['banana', 'mango', 'pineapple', 'orange']; //Array
console.log(fruits);

var[fruit1='grapes', fruit2='avacado']; // Default Values set on Array
var[fruit1, fruit2, ...rest] = fruits; //Destruturing //...Spread Operator
console.log(fruit1);
console.log(...rest);
console.log(fruits);
*/


// DESTRUCTURING FROM OBJECT TO VARIABLE
/*
var contact = { //Object
    name: 'Ali',
    age: 20,
    email: 'ali@gmail.com'
}
// console.log(contact);

var {name,
    age:birth, //Key change in an Object
    phone=1234567890, //  Default Values set in an Object
    email} = contact; //Destructuring
console.log(name,birth,phone,email);
*/




// CLASS
/*
class Students2 {
   constructor() {
       console.log("constructor running")
   }
}
let a = new Students2()
// console.log(a)
*/
/*
class Students3 {
    constructor(name, age, address) {
        console.log("constructor running", name, age, address)
    }
 }
 let abc = new Students3('faraz', 22, 'address...')
//  console.log(abc)
*/
/*
class Parent {
    constructor(age){
        this.age = age
        this.name = "name"
        this.address = "Address........"
    }
 }
 class Child1 extends Parent{
   constructor(age){
       super(age)
   }
 }
 var _child1 = new Child1(50)
 console.log(_child1)
*/




// FOR OF LOOP
/*
const array1 = ['a', 'b', 'c'];
for (const element of array1) {
  console.log(element);
}
*/




// CLOSURES
/*
function company(){

    var myName = "Ameen";
    console.log('company',myName);
 
    function employee(){
      console.log('employee',myName);
    }
    employee(); 
}
company();
*/
/*

 function myScore (){
   var score = 1;
   function abc(){
     console.log(score++);
   }
   abc();
 }
  myScore();
*/




// COPY OBJECT ASSIGN & SPREAD OPERATOR
/*
const obj1 = { a: 1 };
const copy1 = Object.assign({}, obj1);
console.log(copy1); // { a: 1 }
// By spread operator
const obj2 = { a: 1 };
const copy2 = {...obj2};
console.log(copy2); // { a: 1 }
*/
 

// SET
/*
let mySet = new Set()
mySet.add(1)           // Set [ 1 ]
mySet.add(5)           // Set [ 1, 5 ]
mySet.add(5)           // Set [ 1, 5 ]
mySet.add('some text') // Set [ 1, 5, 'some text' ]
let o = {a: 1, b: 2}
mySet.add(o)
mySet.add({a: 1, b: 2})   // o is referencing a different object, so this is okay
mySet.has(1)              // true
mySet.has(3)              // false, since 3 has not been added to the set
mySet.has(5)              // true
mySet.has(Math.sqrt(25))  // true
mySet.has('Some Text'.toLowerCase()) // true
mySet.has(o)       // true
mySet.size         // 5
mySet.delete(5)    // removes 5 from the set
mySet.has(5)       // false, 5 has been removed
mySet.size         // 4, since we just removed one value
console.log(mySet)
// logs Set(4) [ 1, "some text", {…}, {…} ] in Firefox
// logs Set(4) { 1, "some text", {…}, {…} } in Chrome
*/




// CONDITIONAL OPERATOR ?
// syntax: condition ? exprIfTrue : exprIfFalse
/*
function getFee(isMember) {
    return (isMember ? '$2.00' : '$10.00');
  }
  console.log(getFee(true));
  // expected output: "$2.00"
  console.log(getFee(false));
  // expected output: "$10.00"
  console.log(getFee(1));
  // expected output: "$2.00"
  */




//   ARROW FUNCTION / LAMBDA FUNCTION
/*
// ES5
var multiplyES5 = function(x, y) {
    return x * y;
  };
  // ES6
  const multiplyES6 = (x, y) => { return x * y };
*/


// SCROLL TO BUILT-IN FUNCTION
/*
element.scrollTo({
    top: 100,
    left: 100,
    behavior: 'smooth'
  });
*/


// LEXICAL SCOPE MEANS NESTED GROUP OF FUNCTIONS
/*
function func1() {
    var userName = 'John';
    // likes is not accessible here
    function parent() {
        // userName is accessible here
        // likes is not accessible here
        function child() {
            // Innermost level of the scope chain
            // userName is also accessible here
            var likes = 'Coding';
        }
    }
 }
*/

// CALLBACK FUNCTION
// function
/*
function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}

// callback function
function callMe() {
    console.log('I am callback function');
}

// passing function as an argument
greet('Peter', callMe);
*/
/*
function greet(name, callback){
    console.log(name);
    console.log(callback());
}
function abc(){
    return 1+2;
}
greet('Ali', abc);
*/