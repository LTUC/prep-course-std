'use strict';

// Important Note: 
// Kindly use reduce instead of for in all of your solutions

// Resource:
// Reduce: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

// 1) ---------------------
// 
//  Given an array of objects, count the objects by using reduce method.

//  EX:
// var voters = [
//     {
//         voter_Name: "Adam Scott",
//         votes_To: "James",
//     },
//     {
//         voter_Name: "Abril Blake",
//         votes_To: "Jade",
//     },
//     {
//         voter_Name: "Ruby Andrews",
//         votes_To: "Jade",
//     },
//     {
//         voter_Name: "Junior Maxwell",
//         votes_To: "Bailey",
//     },
//     {
//         voter_Name: "Junior Maxwell",
//         votes_To: "Bailey",
//     }
// ]
//

// ------------------------

const objectCounter = (obj) => {
    // write your code here
}

// 2) ---------------------
// 
// Given a string input as an argument reverse it using reduce method.
//
//  EX:
// 'you shall not pass.' ==> 'pass not shall you.'
//
// ------------------------

const stringReverse = (str) => {
    // write your code here
}

// 3) ---------------------
// 
// Using the same array of object from the first question, create new object that contain the candidates name as keys (voting for),
// and how many times they got voted to as values using the reduce method.
//
// Input:
// let voters = [
//     {
//         voter_Name: "Adam Scott",
//         votes_To: "James",
//     },
//     {
//         voter_Name: "Abril Blake",
//         votes_To: "Jade",
//     },
//     {
//         voter_Name: "Ruby Andrews",
//         votes_To: "Jade",
//     },
//     {
//         voter_Name: "Junior Maxwell",
//         votes_To: "Bailey ",
//     },
//     {
//         voter_Name: "Junior Maxwell",
//         votes_To: "Bailey",
//     }
// ];
//
// Output:
// let res = {
//     James: 1,
//     Jade: 2,
//     Bailey: 2
// };
//
// ------------------------

const statistics = (obj) => {
    // write your code here
}

// 4) ---------------------
// 
// In a company the front-end developer is requesting the data from the backend to be cleaner and in a certain shape,
// help the backend developer by writing a function that gets rid of bad data, 
// and move all properties to the top level as in the example.
//
// Ex:
// var data = {
//     name: {
//         firstName: "Gordon",
//         lastName: "Ramsay"
//     },
//     favFood: "Salmon",
//     age: null,
//     phone: "5485188"
// }
//
//     ===>
//
// var data = {
//     firstName: "Gordon",
//     lastName: "Ramsay",
//     favFood: "Salmon",
//     phone: "5485188"
// }
// ------------------------

const cleanData = (obj) => {
    // write your code here
}

module.exports = { objectCounter, stringReverse, statistics, cleanData };

