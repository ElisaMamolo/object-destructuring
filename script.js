//have a person object

let person = {
  name: "Ironhacker",
  age: 25,
  favoriteMusic: "Metal",
};

let name = person.name;
let age = person.age;
let favoriteMusic = person.favoriteMusic;

console.log(`Hello, ${name}.`);
console.log(`You are ${age} years old.`);
console.log(`Your favorite music is ${favoriteMusic}.`);

//same object with object destructuring
let person = {
  name: "Ironhacker",
  age: 25,
  favoriteMusic: "Metal",
};

let { name, age, favoriteMusic } = person;

console.log(`Hello, ${name}.`);
console.log(`You are ${age} years old.`);
console.log(`Your favorite music is ${favoriteMusic}.`);

// is creating variables using the same names as the properties of our object.
//Essentially, it comes to this:
// ES5 way:
let name = person.name;
let age = person.age;
let favoriteMusic = person.favoriteMusic;

// ES6 way (using destructuring)
let { name, age, favoriteMusic } = person;

//default values
let { name, age, favoriteMusic, country = "Spain" } = person;

//name:fullName means that the person.name is fullName variable
// let fullName = person.name
const { name: fullName, age, favoriteMusic } = person;
console.log(`Hello, ${fullName}.`); // => Hello, Ironhacker.

///////////////////////////nested object destructuring
const person = {
  name: "Ironhacker",
  age: 25,
  favoriteMusic: "Metal",
  address: {
    street: "Super Cool St",
    number: 123,
    city: "Miami",
  },
};

let {
  name,
  age,
  favoriteMusic,
  address: { street, number, city },
} = person;

console.log(`${name} lives in ${number} ${street}, city of ${city}.`);
// ==> Ironhacker lives in 123 Super Cool St, city of Miami.

//////////////////////arrays destructuring

const campuses = ["madrid", "barcelona", "miami"];

//First, we declare our variable(s) inside of array brackets
//and then assign them to the one we’re trying to destructure.

const [firstCampus, secondCampus, thirdCampus] = campuses;

console.log(thirdCampus); // miami

// Put the first item in the array in a variable:
const [first] = campuses;
console.log(first); // <== madrid

//Skip the first element, and take the second one only:
const [, second] = campuses;
console.log(second); // <== barcelona

//Skip the first and the second element, and take the third one only:
const [, , campus3] = campuses;
console.log(campus3); // <== miami

//default values
//if there are more variables than items in the array, it won’t throw an error, it will just be undefined
const [campus1, campus2, campus3, campus4] = campuses;
console.log(campus4); // ==> undefined

//But we can assign the value to the additional variable (campus4):
const [campus1, campus2, campus3, campus4 = "paris"] = campuses;
console.log(campus4); // ==> paris

//////////////////////////Nested arrays and destructuring
const europeanCampuses = [
  ["madrid", "es"],
  ["barcelona", "es"],
  ["berlin", "de"],
  ["paris", "fr"],
  ["amsterdam", "nl"],
  ["lisbon", "pt"],
];

const [[campusSpain1], [campusSpain2, country], [campus5, theCountry]] =
  europeanCampuses;

console.log(campusSpain1, campusSpain2, country, theCountry);
// ==> 'madrid' 'barcelona' 'es' 'de'

/////SPREAD OPERATOR
//when we use the spread operator we take each element of an array
const reptiles = ["snake", "lizard", "alligator"];
const mammals = ["puppy", "kitten", "bunny"];

// ES5 approach:

const animals = reptiles.concat(mammals);

console.log(animals);
// [ 'snake', 'lizard', 'alligator', 'puppy', 'kitten', 'bunny' ]

//Copying arrays When we need to copy an array, we often times use .slice().
const names = ["ana", "milo", "ivan"];
const names2 = names.slice();

console.log(names2); // => [ 'ana', 'milo', 'ivan' ]

//we can use ...
const names = ["ana", "milo", "ivan"];
const names3 = [...names];

console.log(names3); // => [ 'ana', 'milo', 'ivan' ]

//this is another approach but we will have a reference
const names = ["ana", "milo", "ivan"];
const names2 = names;

//if i do this
names2.push("elisa");
console.log(names); //["ana", "milo", "ivan"];
console.log(names2); //["ana", "milo", "ivan", "elisa"];

///////////////////REST PARAMETER
//Rest parameter collects all remaining elements into an array.

function myFunction(arg1, arg2) {
  console.log(arg1);
  console.log(arg2);
}

myFunction("first argument", "second argument", "3rd argument");
//Our program will completely ignore the 3rd argument because
//it is not part of the definition of our function.

//same example with workaround
function add() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log(arguments); // { 0: 1, 1: 2, 2: 5, 3: 8 }
  return sum;
}

add(); // 0
add(1); // 1
add(1, 2, 5, 8); // 16
//arguments is kind of magic word here:
// it represents a special array-like
// object that contains all arguments by their index.

//We will use ... in front of the argument name and they literally mean
// “gather the remaining parameters into an array”.
function add(...numbers) {
  // numbers represents the arguments passed when function gets invoked
  let sum = 0;
  for (let oneNumber of numbers) {
    sum += oneNumber;
  }
  return sum;
}

add(1); // 1
add(1, 2); // 3
add(1, 2, 5, 8); // 16

//same result of ... with reduce

Copy;
function add(...numbers) {
  let sum = 0;
  return numbers.reduce((sum, next) => {
    return sum + next;
  });
  return sum;
}

add(1, 2, 5, 8); // <== 16

function showMovie(title, year, ...actors) {
  console.log(
    `${title} is released in ${year} and in the cast are: ${actors[0]} and ${actors[1]}.`
  );
}

showMovie("Titanic", "1997", "Leonardo Di Caprio", "Kate Winslet");

////////////////MIXED DESTRUCTURING
const customer = {
  name: {
    firstName: "ivan",
    lastName: "zoro",
  },
  age: 32,
  preferences: [
    {
      tech: ["cameras", "smartwatches"],
      books: ["science fiction", "coding"],
    },
  ],
};

const {
  name: { firstName, lastName },
  age,
  preferences: [{ tech, books }],
} = customer;

console.log(firstName, lastName, age); // ==> 'ivan' 'zoro' 32
console.log(tech, books); // ==> [ 'cameras', 'smartwatches' ] [ 'science fiction', 'coding' ]

//if i want to change tech and books variable names into technology and literature
const {
  name: { firstName, lastName },
  age,
  preferences: [{ tech: technology, books: literature }],
} = customer;

console.log(firstName, lastName, age); // ==> 'ivan' 'zoro' 32
console.log(technology, literature); // ==> [ 'cameras', 'smartwatches' ] [ 'science fiction', 'coding' ]

/////////////////////////////Destructuring function parameters
function getFullName(user) {
  return `${user.firstName} ${user.lastName}`;
}

getFullName({ firstName: "ana", lastName: "martinez" });
// => ana martinez
