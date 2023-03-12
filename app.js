// FOR LOOP
/*
var cleanistCities = ["paris","london","newyork","dubai","istunbul"];

var checkCity = prompt("Type any city");
checkCity = checkCity.toLowerCase();

var matchFound = false;
for(var i = 0; i < cleanistCities.length; i++){
    if(checkCity === cleanistCities[i]){
        matchFound = true;
        alert("It is the cleanist city = " + checkCity);
        break;
    }
}
if (matchFound === false){
    alert("Its Not")
}
*/


// FOR NESTED LOOP
/*
var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
var fullNames = [];

for (var i = 0; i < firstNames.length; i++) {
    for (var j = 0; j < lastNames.length; j++) {
    fullNames.push(firstNames[i] + lastNames[j]);
    }
}
console.log(fullNames);
*/


// DICEROLL
/*
var bigDecimal = Math.random();
var improvedNum = (bigDecimal * 6) + 1;
var numberOfStars = Math.floor(improvedNum);
*/


// EVENT FUNCTION
function popup(message){
    alert(message);
}



// OBJECT
/*
 let abc = {
    a: 1,
    b: 2,
    c: "3",
    d: "hello",
 }
 console.log(abc);
 */
