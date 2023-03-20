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