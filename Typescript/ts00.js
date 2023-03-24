"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// STRING / NUMBER
var a = "frisby";
var b = 123;
// ARRAY
var arrstr = ['abc', 'def'];
var arrnum = [1, 2, 3];
// FUNCTION
function sum(sum1, sum2) {
    return sum1 + sum2;
}
sum(2, 2);
function abc(a, b) {
    return new Promise(function (res) { return res("Promise Function"); });
}
abc('ab', 'cd');
//  OBJECT
var student = { name: 'Ali', age: 20, courses: ['isl', 'physics'], dept: [2],
    5: 'abc', id: 1 };
