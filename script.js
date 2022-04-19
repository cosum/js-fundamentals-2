'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive');

// //const interface = 'audio';

// function logger() {
//     console.log('My name is Cosmin');
// }

// //calling / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(3, 4);
// console.log(appleOrangeJuice);



// //function declaration

// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(1992);
// console.log(age1);


// //function expression
// const calcAge2 = function(birthYear) {
//     return 2037 - birthYear;
// }

// const age2 = calcAge2(1992);
// console.log(age2);


// Arrow function

// const calcAge3 = birthYear => 2037 - birthYear;

// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1980, 'Bob'));



// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     const juice = `Juice with ${applePieces} and pieces of apples and ${orangePieces} pieces of oranges`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));


// const calcAge = function(birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = function(birthYear, firstName) {
//     const retirement = 65 - calcAge(birthYear);
//     if (retirement > 0) {
//         return retirement;
//     } else {
//         return -1;
//     }
// }

// console.log(yearsUntilRetirement(1992, 'Cosmin'));
// console.log(yearsUntilRetirement(1970, 'Mike'));



// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const years1 = new Array(1991, 1992, 1984, 2008, 2022);
// console.log(years1);

// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends.length)
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends);

// const firstName = 'Jonas';
// const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
// console.log(jonas);


// //Exercise
// const calcAge = function(birthYear) {
//     return 2037 - birthYear;
// }
// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);


// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);



// const friends = ['Michael', 'Steven', 'Peter'];

// //add elements
// const newLength = friends.push('Jay');
// console.log(friends);
// console.log(newLength);

// friends.unshift('John');
// console.log(friends);


// //remove elements
// friends.pop(); //remove last element
// const popped = friends.pop();
// console.log(friends);
// console.log(popped);

// friends.shift(); //remove first element
// console.log(friends);

// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob'));

// friends.push(23);
// console.log(friends.includes('Steven'));
// console.log(friends.includes(23));

// if (friends.includes('Steven')) {
//     console.log(`You have a friend called Steven`);
// }


// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// };

// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas['lastName']);

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

// // const interstedIn = prompt(`What do you want to know about Jonas? Choose between fisrtName, lastName, age, job and friends`);

// // if (jonas[interstedIn]) {
// //     console.log(jonas[interstedIn]);
// // } else {
// //     alert('Wrong request! Choose between fisrtName, lastName, age, job and friends');
// // }


// jonas.location = 'Cluj';
// jonas['twitter'] = '@jonasschmedtman';
// console.log(jonas);

// //Challenge 
// // Jonas has 3 friends and his best friend is called Michael

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is caled ${jonas.friends[0]}`);



const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // calcAge: function(birthYear) {
    //     return 2037 - birthYear;
    // }
    // calcAge: function() {
    //     console.log(this);
    //     return 2037 - this.birthYear;
    // }
    calcAge: function() {
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()} years old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
    }
};

console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

console.log(jonas.getSummary());


//Challenge

// Jonas is a 46 year old teacher, and he has a driver license