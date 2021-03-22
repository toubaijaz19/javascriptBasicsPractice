/* // /** Number DataType */
// let numberInt = 20;
// // typeof tells the datatype of numberInt
// console.log(numberInt,typeof numberInt);

// let numberFloat = 18.976;
// // typeof tells the datatype of numberFloat
// console.log(numberFloat,typeof numberFloat);
//--------------------------------------------------

// /**String DataType */

// //single quoted declaration
// let string1 = 'This is single quoted string.';
// console.log(string1);
// //double quoted declaration
// let string2 = "This is double quoted string.";
// console.log(string2);
// let variable = 'Template Literals';
// //template literals declaration
// let string3 = `This is ${variable} string.`; //enclose by backtick (` `) 
// console.log(string3);
//---------------------------------------------------------------------------

// /**Boolean Datatype */
// let bool = true;
// console.log(bool);
// console.log(!bool);
//---------------------------------------------------------------------------- 

// /**Object */
// var employee = {
//     //key : value
//     myName: "Ivan Colton",
//     Age: 22,
//     department: 'Sales Management',
//     myIntro: function() {
//         console.log(`My name is ${this.myName}.`);
//         console.log(`I am ${this.Age} years old.`);
//         console.log(`I work in ${this.department} department.`);
//     }
// };
// let detail = employee.myIntro();
//------------------------------------------------------------------------

/** Array */
//array having different datatype elements
let array1 = ['Touba Ijaz', 20, true ];
console.log(array1);
console.log('Datatype of array1: ',typeof array1);
//array having elements of same datatype
let numArray = [10, 24, 76, 5, 12];
//push() add value at the end of array
numArray.push(70, 80, 45);
console.log('After adding values at the end : ', numArray);
//pop() delete 1 value at the end
numArray.pop();
console.log('After deleting last value at the end : ', numArray);

