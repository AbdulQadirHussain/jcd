export {};
// STRING / NUMBER
var a: string = `frisby`;
var b: number = 123;


// ARRAY
var arrstr: Array<string> = ['abc', 'def'];
var arrnum: number[] = [1,2,3];




// FUNCTION
function sum(sum1: number, sum2: number){
    return sum1 + sum2;
}
sum(2, 2);


function abc(a: string, b: string): Promise<string>{
    return new Promise(res => res(`Promise Function`));
}
abc('ab', 'cd');



//  OBJECT
var student: {
    name: string,
    age: number | string,
    courses: Array<string>,
    dept: number[],
    [key:number]: string,
    id: number,
} =
{name: 'Ali', age: 20, courses: ['isl', 'physics'], dept: [2], 
5: 'abc', id: 1};


