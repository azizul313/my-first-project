//if

// let temperature = 39

// if ( 2 == '2') {
//     console.log('executed');
// }

// if (temperature < 40) {
//     console.log('it is too cool');
// } else {
//     console.log('more hot');
// }
// console.log('how are you');


// let score = 200
// if (score > 100) {
//     let power = 'fly'
//     console.log(`super power: ${power}`);
// }


// let balance = 3000;

// if (balance < 300) {
//     console.log('too long');
// } else{
//     console.log('error');
// }


// let userLogged = true;
// let debitCard = true;
// let loggedInFromGoogle = false;
// let loggedInFromEmail = true;

// if (userLogged && debitCard && 2 == 3) {
//     console.log('you are passed');
// }

// if (loggedInFromGoogle || loggedInFromEmail) {
//     console.log('you are success');
// }


// // switch case
// let month = 5

// switch (month) {
//     case 1:
//     console.log('january');
//     break;
//     case 2:
//     console.log('february');
//     break;
//     case 3:
//     console.log('march');
//     break;
//     case 4:
//     console.log('april');
//     break;
//     case 5:
//     console.log('may');
//     break;
//     case 6:
//     console.log('june');
//     break;

//     default:
//         console.log('no more month');
//         break;
// }

// truthy or false value
// let userEmail = []

// if (userEmail) {
//     console.log('correct email');
// }else{
//     console.log('wrong email');
// }


// falsy value
// false , 0 , -0, BigInt, 0n, "", null, undefined, NaN

//truthy value
// "0", 'false', " " , [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log('array is empty');
// }

let val;
//val = 5 ?? 10
val = undefined ?? 15

console.log(val);

let iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log('less than 80') : console.log('more than 80');

let amrName = 'azizul'
let myAge = 24
console.log(`my name is ${amrName} and my age is ${24}`);