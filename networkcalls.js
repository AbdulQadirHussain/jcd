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




// PROMISE ALL
// INDIVIDUAL PROMISES RETURN
/*
const getUser = () => {
    return Promise.resolve({id: 12, name: `Ali`});
}
const getPosts = (id) => {
    return Promise.resolve({id, posts: []});
}
const getGroups = (id) => {
    return Promise.resolve({id, groups: []});
}
const getResults = (id) => {
    return Promise.resolve({id, results: []});
}
getUser()
.then((user) => {
    console.log(user);
})
*/


// PROMISE.ALL
/*
const getUser = () => {
    return Promise.resolve({id: 12, name: `Ali`});
}
const getPosts = (id) => {
    return Promise.resolve({id, posts: []});
}
const getGroups = (id) => {
    return Promise.resolve({id, groups: []});
}
const getResults = (id) => {
    return Promise.resolve({id, results: []});
}

getUser()
.then(async(user)=>{
    console.log(user)
let allPromises = await Promise.all([getPosts(user?.id), 
    getGroups(user?.id), getResults(user?.id)]);
    let [posts, groups, results] = allPromises;
    console.log(`All Promise `, allPromises); 
})
*/


// PROMISE.ALLSETTLED
/*
const getUser = () => {
    return Promise.resolve({id: 12, name: `Ali`});
}
const getPosts = (id) => {
    return Promise.resolve({id, posts: []});
}
const getGroups = (id) => {
    return Promise.resolve({id, groups: []});
}
const getResults = (id) => {
    return Promise.resolve({id, results: []});
}

getUser()
.then(async(user)=>{
    console.log(user)
let allPromisesSettled = await Promise.allSettled([getPosts(user?.id), 
    getGroups(user?.id), getResults(user?.id)]);
    let [posts, groups, results] = allPromisesSettled;
    console.log(`All Promise `, allPromisesSettled); 
})
*/