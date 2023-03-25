// Template Literals / Backticks
/*
var firstName = `Abdul`;
var lastName = `Qadir`;
console.log(`My fisrt name is ${firstName} & my last name is ${lastName}`);
*/


// VAR / LET / CONST DIFFERENCE
/*
// VAR
var aname = 'Ali';
console.log(aname);
var aname = 'Asad'; // It can declare again
console.log(aname);
aname = 'Ahmed'; // It can be updated
console.log(aname);

// LET
let bname = 'Ali';
console.log(bname);
// let bname = 'Asad'; //error LET will not declare again
// console.log(bname); 
bname = 'Ahmed'; //Can be update
console.log(bname);

const updateName = (n) => {
    return bname = n;
}
console.log(updateName('Hussain')); //Only work on LET / VAR 

// CONSTANT
const cname = 'Ali';
console.log(cname);
// const cname = 'Asad'; //error CONSTANT cannot change
// console.log(cname);
// cname = 'Ahmed'; //error CONSTANT cannot update
// console.log(cname);
*/


// TERNARY OPERATOR (Condition) ? true : false
/*
const checkTernaryCondition = (2<4) ? "yes":"no";
console.log(checkTernaryCondition);

const isStudent = true;
const isDiscount = () => {
    return isStudent === !true ? 20 : 0;
}
var result = isDiscount();
console.log(result);
*/



// ARRAY FOR / FOREACH WITH LAMBDA FUNCTION
/*
var arrnum = [5,3,7,43,44,56,78,87];

for(var i = 0; i < arrnum.length; i++){
     console.log(i , arrnum[i]);
}
// OR ForEach Function
arrnum.forEach(function(value, index){
    console.log(value , index);
})
// OR Can be done with forEach LAMBDA FUNCTION
arrnum.forEach((value, index) => {
   console.log(value, index)
})
// OR compulsory Foreach Function
function printname(a,b){
    console.log(a,b);
}
arrnum.forEach(printname);
*/


// MAP / FILTER / FIND / REDUCE / FILL
/*
var names = ['Ali', 'Ahmed', 'Asad'];
names.forEach((v, i) => {
    console.log(`Mr. ` + v); //Not a Good Way
})
*/

/*
//To Enter PREFIX with forEach Lamda Push
var names = ['Ali', 'Ahmed', 'Asad'];
var newNames = [];
names.forEach((v,i) => {
    newNames.push(`Mr. `+ v); //Push Prefix in Null Array
})
console.log(newNames);

// SAME WORK ON MAP FUNCTION
var mapNames = names.map(function(value, index) {
    return `Mr. ` + value;
})
console.log(mapNames);
console.log(names); //Still the same it isn't mutate
*/


/*
// To Skip the value with forloop if continue push
var names = ['Ali', 'Ahmed', 'Asad'];
var newfilternames = []; //Null Array
for(var i = 0; i < names.length; i++){
    if(names[i] === 'Ahmed'){
       continue;
    }
    newfilternames.push(names[i]); //Push Remaining values in Null Array
}
console.log(newfilternames);

// SAME WORK ON FILTER FUNCTION
var filternames = names.filter((v,i)=>{
    return v !== 'Ahmed';
})
console.log(filternames);
*/

/*
// To Find the value from
var names = ['Ali', 'Ahmed', 'Asad'];

// WORK ON FIND FUNCTION
var findname = names.find((v)=>{
    return v === 'Asad';
})
console.log(findname);
*/


/*
// WORK DONE ON REDUCE FUNCTION
//To Calculate Plus Accumulator with Reduce
var Calculate = [23,54,65,98,13];
var calreduce = Calculate.reduce((acc, v)=>{
    console.log(`acc`, acc);
    console.log(`value`, v)
    return acc + v;

}, 0)//add value in accumulator to plus
console.log(calreduce);

//Creating Object from Array
var names = ['Ali', 'Ahmed', 'Asad'];
var namesreduce = names.reduce((accumulator, v)=>{
    accumulator[v]=v;
    return accumulator;
}, {})
console.log(namesreduce);


// ADD NAME WITH REDUCE AND PUSH
var names = ['Ali', 'Ahmed', 'Asad'];
var addnamesreduce = names.reduce((acc,v)=>{
    acc.push(`Mr `+ v);
    return acc;
}, [])
console.log(addnamesreduce);
*/


// FILL FUNCTION
/*
console.log(new Array(10));
console.log(new Array(10).fill('A'));
*/


/*
// Higher Order Function
function abc(){
    console.log('Higher Order Function')
    return function(){
        console.log('Second Function')
    }
}
abc()();
// OR
var foo = abc();
foo();
*/


/*
//Lambda Function in Short
const sum = (sum1, sum2) => sum1 * sum2;
console.log(sum(2,5));

const multi = (factor, num1, num2) => factor*sum(num1,num2);
var ab = multi(8,2,4);
console.log(ab);

num.map(v => v * v);
*/


// TO PRINT EACH VALUE VIA FOREACH & LAMBDA
/*
['A','B','C'].forEach((v) => console.log(v));
// OR
const print = (e) => console.log(e);
['A','B','C'].forEach(print);
//OR
function print2(e){
    console.log(e)
}
['A','B','C'].forEach(print2);
*/





//  DESTRUCTURING
// DESTRUCTURING FROM ARRAY TO VARIABLE
/*
var fruits = ['banana', 'mango', 'pineapple', 'orange']; //Array
console.log(fruits);

var[fruit1='grapes', fruit2='avacado']; // Default Values set on Array
var[fruit1, fruit2, ...rest] = fruits; //Destructuring //...Spread Operator
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


// DESTURCTURING OBJECT TO COPY AND AUTO UPDATE OLD OBJECT
/*
var obj1 = {a:'a', b:'b'};
console.log(obj1);
var obj2 = obj1; //Copied obj1
console.log(obj2); //Same Result as obj1 
obj2['objectkey'] = 'value'; //Destructuring adding in obj2
console.log(obj2); //Updated obj2
console.log(obj1); //Auto Updated obj1 because of obj2
obj1['d'] = 'd'; //Destructuring adding in obj1
console.log(obj1); //Updated obj1
console.log(obj2); //Auto Updated obj2 because of obj1
*/

// DESTRUCTURING CONST
/*
const firstName = 'Ali';
console.log(firstName);

var abc = {};
abc['nameChange'] = firstName;
console.log(abc);
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




// SPREAD OPERATOR ... & COPY OBJECT ASSIGN
/*
const obj1 = { a: 1 };
const copy1 = Object.assign({}, obj1);
console.log(copy1); // { a: 1 }
// By spread operator
const obj2 = { a: 1 };
const copy2 = {...obj2};
console.log(copy2); // { a: 1 }
*/




// TERNARY OPERATOR  //syntax: (condition) ? True : False
/*
const checkTernaryCondition = (2<4) ? "yes":"no";
console.log(checkTernaryCondition);

const isStudent = true;
const isDiscount = () => {
    return isStudent === true ? 20 : 0;
}
var result = isDiscount();
console.log(result);
*/
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







// SCROLL TO BUILT-IN FUNCTION
/*
element.scrollTo({
    top: 100,
    left: 100,
    behavior: 'smooth'
  });
*/



// FOR OF LOOP
/*
const array1 = ['a', 'b', 'c'];
for (const element of array1) {
  console.log(element);
}
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



