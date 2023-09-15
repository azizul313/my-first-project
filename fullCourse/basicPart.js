// variables part 1

const accountId = 144553
let accountEmail = "azizul313@.com"
var accountPassword = "12345"
let accountCity = "Nesarabad"
let accountState;

// accountId = 2 // not allowed


accountEmail = "azizul313@.com"
accountPassword = "21212121"
accountCity = "Barishal"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

// different data type chapter 2

"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

console.log(3 
    +
     3) // code readability should be high

console.log("azizul")


let name = "azizul"
let age = 23
let isLoggedIn = false
let state;

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique


// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object


// chapter three - operators

let score = "azizul"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedInn = "azizul"

let booleanIsLoggedIn = Boolean(isLoggedInn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "azizul" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " azizul"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

// <=========== chapter 4 ============>

// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === 

console.log("2" === 2);

// ============> chapter 5 string <=============

const myName = "azizul"
const repoCount = 0

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${myName} and my repo count is ${repoCount}`);

const gameName = new String('azizul-love-shetu')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   azizul    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://facebook.com/azizulhkhan"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));

// ===============> chapter 6 number and maths <=================

let gameScore = 500
console.log(gameScore);

let balance = new Number(300)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

let otherNumber = 235.45

console.log(otherNumber.toPrecision(3));

let hundreds = 10000000
console.log(hundreds.toLocaleString('en-BD'));

// ===========> maths <================
// console.log(Maths);
console.log(Math.abs(-5));
console.log(Math.round(6.7));
console.log(Math.ceil(7.8));
console.log(Math.floor(8.9));
console.log(Math.min(8,9,2,3));
console.log(Math.max(8,9,10,3,2,7));

console.log(Math.random());
console.log(Math.random() * 10 +1);

let min = 10
let max = 20;


console.log(Math.floor(Math.random(max - min +1))+min);

// chapter seven dates

let myDate = new Date()
console.log(myDate.toLocaleTimeString());
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());

let newDate = new Date()
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMonth());

newDate.toLocaleString('default', {
    weekday: "long"
})