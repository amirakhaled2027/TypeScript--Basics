var character = 'amira';
var age = 23;
var isBlackBelt = false;
// character = 23;
character = '23';
// age = 'amira';
age = 27;
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(13));
//ARRAYS IN TYPESCRIPT//
var names = ['amira', 'sara', 'jessica'];
names.push('liz');
// names.push(2); wrong coz it's a number not a string
names.unshift('amira');
names[0] = 'hey';
console.log(names);
//MIXED ARRAYS: ARRAYS WITH DIFFERENT TYPES//
var mixed = [1, 'amira', 5, 'code', 3, 24];
mixed.push('alex');
mixed.unshift(8);
console.log(mixed);
//OBJECTS IN TYPESCRIPT//
var x = {
    name: 'amira',
    cont: 'Egypt',
    age: 23
};
// console.log(x);
x.name = 'developer';
x.age = 30;
// x.cont = 5; wrong coz cont was firslty decalred as a string
console.log(x);
//EXPLICIT TYPES//
var first;
var second;
var third;
first = 'hello';
second = 13;
// second = '13'; error
third = false;
console.log(first);
console.log(second);
console.log(third);
//EXPLICIT ARRAYS//
var arrayTest = [];
arrayTest.push('amira');
console.log(arrayTest);
var arrayMixed = [];
arrayMixed.unshift(60, 'old', true);
console.log(arrayMixed);
//EXPLICIT UNION TYPES//
var code;
// code= true;
code = 'TypeScript';
console.log(code);
//EXPLICIT OBJECTS//
var objectTest;
objectTest = { myName: 'amira', myAge: 23, favClr: 'black' };
console.log(objectTest);
var objectTest2;
objectTest2 = {
    name2: 'amira',
    age2: 23,
    favclr2: 'black'
    // favclr2: 2
};
console.log(objectTest2);
