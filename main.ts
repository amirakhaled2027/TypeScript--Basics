let character = 'amira';
let age = 23;
let isBlackBelt = false;

// character = 23;
character = '23';

// age = 'amira';
age = 27;

const circ = (diameter: number) => {
    return diameter * Math.PI;
}
console.log(circ(13));



//ARRAYS IN TYPESCRIPT//
let names = ['amira', 'sara', 'jessica'];
names.push('liz');
// names.push(2); wrong coz it's a number not a string
names.unshift('amira')
names[0] = 'hey'
console.log(names);



//MIXED ARRAYS: ARRAYS WITH DIFFERENT TYPES//
let mixed = [1, 'amira', 5, 'code', 3, 24];
mixed.push('alex');
mixed.unshift(8);
console.log(mixed);



//OBJECTS IN TYPESCRIPT//
let x = {
    name: 'amira',
    cont: 'Egypt',
    age: 23
}
// console.log(x);
x.name = 'developer';
x.age = 30;
// x.cont = 5; wrong coz cont was firslty decalred as a string
console.log(x);




//EXPLICIT TYPES//
let first: string;
let second: number;
let third: boolean;

first = 'hello';
second = 13;
// second = '13'; error
third = false;

console.log(first)
console.log(second)
console.log(third)



//EXPLICIT ARRAYS//
let arrayTest: string[] = [];
arrayTest.push('amira');
console.log(arrayTest);

let arrayMixed: (string|number|boolean)[] = [];
arrayMixed.unshift(60, 'old', true);
console.log(arrayMixed);



//EXPLICIT UNION TYPES//
let code: boolean|string;
// code= true;
code= 'TypeScript' ;
console.log(code);



//EXPLICIT OBJECTS//
let objectTest: object;
objectTest = { myName: 'amira', myAge: 23, favClr: 'black'};
console.log(objectTest);

let objectTest2: {
    name2: string,
    age2: number,
    favclr2: string
}

objectTest2 = {
    name2: 'amira',
    age2: 23,
    favclr2: 'black'
    // favclr2: 2
}
console.log(objectTest2);