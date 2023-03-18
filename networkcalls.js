
//Full API Details
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


// Response Details
/*
var apiUrl = 'https://api.github.com/users/uqutub/repos';
fetch(apiUrl)
.then(response => {
    console.log('Response ' , response)
})
*/





// // TO GET THE NAME OF THE REPOS
/*
fetch('https://api.github.com/users/uqutub/repos')
.then((response) => response.json())
// .then((data) => console.log(data)) //Full API Details
.then((data) => {
    console.log(data.map(v => v.name)) // Short Lambda Function
})
*/

// OR 

// TO GET THE NAME OF THE REPOS
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

