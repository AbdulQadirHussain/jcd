// OBJECT ARRAY (Not Useful)
/*
var student = {
    name: 'Akbar',
    age: 30,
}
var std = [student, ['Ali', 20]];
console.log(std);
*/




// OBJECT WITH FUNCTION
/*
var plan1 = {
    name: `Basic`,
    price: 100,
    features: [`50GB`, `70Mbps`],
    websites: undefined,
    plus: function(months){
       return this.price * months;
    }
}
delete plan1.websites;
plan1.discount = 10;


// var annualcost = plan1.plus(12);
// console.log(annualcost);

// console.log(plan1);
// console.log(plan1.features[0]);
*/




/*
function hello(){
    alert('hello world');
}
var a = hello();
console.log(a);

var b = new hello();
console.log(b);
*/


// CONSTRUCTOR FUNCTION
/* 
function student (name, age){
    this.name = name;
    this.age = age;
}
var abc = student('sam', 25);
console.log(abc);

var abc = new student('sam', 25);
console.log(abc);
console.log(abc.name);
*/


/*
function Plan(name, price, items, brand){
    this.name = name;
    this.price = price;
    this.items = items;
    this.brand = brand;
    this.quaterly = function(){
        return this.price*3;
    };
}
Plan.prototype.calculateCustom = function(months){
    return this.price * months;
}


var deal1 = new Plan('Deal One', 3.99, 'Burger and Fries', 'Mcdonalds');
var deal2 = new Plan('Deal Two', 4.99, 'Burger Curly Fries', 'Mcdonalds');
var deal3 = new Plan('Deal Three', 5.99, 'Burger Fries and Nuggets', 'Mcdonalds');


console.log(deal1);
console.log(deal2['price']);
console.log(deal3.name);

var cal = deal1.quaterly(); 
console.log(cal);
var calulate = deal2.calculateCustom(12);
console.log(calulate);
*/