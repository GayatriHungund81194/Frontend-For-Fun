# 🎯 JavaScript Primer for React

This guide covers everything you need to know about JavaScript for building React apps.

**Skip sections you already know.** Focus on areas that are fuzzy.

---

## Table of Contents

1. [Basics](#basics)
2. [Variables & Data Types](#variables--data-types)
3. [Functions](#functions)
4. [Objects & Arrays](#objects--arrays)
5. [Array Methods](#array-methods)
6. [ES6+ Features](#es6-features)
7. [Async JavaScript](#async-javascript)
8. [Common Patterns](#common-patterns)

---

## Basics

### Comments

```javascript
// Single line comment

/* 
  Multi-line comment
  Can span multiple lines
*/
```

### Console Output (for debugging)

```javascript
console.log('Print to console');
console.log(123);
console.log({name: "Alice"}); // Print objects
console.error('Error message'); // Print errors
console.warn('Warning message'); // Print warnings
```

Use `F12` in browser to open console and see these.

### Operators

```javascript
// Math
5 + 3    // 8 (addition)
5 - 3    // 2 (subtraction)
5 * 3    // 15 (multiplication)
5 / 3    // 1.666... (division)
5 % 3    // 2 (modulo - remainder)
5 ** 3   // 125 (exponent - power)

// Comparison (returns true/false)
5 > 3    // true (greater than)
5 < 3    // false (less than)
5 >= 5   // true (greater or equal)
5 <= 3   // false (less or equal)
5 == 5   // true (equal value)
5 === 5  // true (equal value AND type) ← use this!
5 != 3   // true (not equal)
5 !== "5" // true (not equal in value or type)

// Logical
true && true   // true (AND - both true)
true || false  // true (OR - at least one true)
!true          // false (NOT - opposite)

// Assignment
let x = 5;      // assignment
x += 3;         // x = x + 3  → x is 8
x -= 2;         // x = x - 2  → x is 6
x *= 2;         // x = x * 2  → x is 12
```

### String Basics

```javascript
// Create strings
"Hello"              // double quotes
'Hello'              // single quotes
`Hello ${name}`      // template literal - can use variables!

// String concatenation
"Hello" + " " + "World"  // "Hello World"

// Template literals (easier)
const name = "Alice";
const message = `Hello ${name}!`;  // "Hello Alice!"
console.log(`2 + 3 = ${2 + 3}`);   // "2 + 3 = 5"

// String methods
"hello".toUpperCase()      // "HELLO"
"HELLO".toLowerCase()      // "hello"
"hello world".includes("world")  // true
"hello".length             // 5
"hello".charAt(0)          // "h"
"hello".slice(1, 3)        // "el" (from index 1 to 3)
```

---

## Variables & Data Types

### Declaring Variables

```javascript
// let - use this most of the time (can change)
let age = 25;
age = 26;  // can reassign

// const - use when value won't change (can't reassign)
const name = "Alice";
name = "Bob";  // ERROR!

// var - old way, avoid it
var oldStyle = 42;  // don't use this

// ✅ Rule: Use const by default, let when you need to reassign, never var
```

### Data Types

```javascript
// Numbers
42
3.14
-10
Infinity
NaN  // "Not a Number"

// Strings
"Hello"
'World'
`Template literal`

// Booleans
true
false

// Objects (key-value pairs)
{
  name: "Alice",
  age: 25,
  city: "Portland"
}

// Arrays (ordered lists)
[1, 2, 3]
["apple", "banana", "cherry"]
[1, "hello", true, {name: "Alice"}]  // can mix types

// null and undefined
null       // "nothing" - intentional absence
undefined  // "not set" - unintentional absence

// Type checking
typeof 5           // "number"
typeof "hello"     // "string"
typeof true        // "boolean"
typeof {a: 1}      // "object"
typeof [1, 2, 3]   // "object" (arrays are objects)
typeof undefined   // "undefined"
```

### Type Conversion

```javascript
// String to number
Number("5")        // 5
parseInt("5")      // 5
parseFloat("3.14") // 3.14

// Number to string
String(5)          // "5"
(5).toString()     // "5"

// To boolean
Boolean(5)         // true
Boolean(0)         // false
Boolean("")        // false
Boolean("hello")   // true
!!5                // true (trick: double NOT)

// Truthiness/Falsiness
// These are falsy: false, 0, "", null, undefined, NaN
// Everything else is truthy

if (5) {
  console.log("runs - 5 is truthy");
}

if (0) {
  console.log("doesn't run - 0 is falsy");
}
```

---

## Functions

### Basic Function

```javascript
// Function declaration
function greet(name) {
  return `Hello, ${name}!`;
}

greet("Alice");  // "Hello, Alice!"

// Function with no parameters
function sayHi() {
  return "Hi!";
}

// Function with multiple parameters
function add(a, b) {
  return a + b;
}

add(5, 3);  // 8

// Function with default parameters
function multiply(a, b = 1) {
  return a * b;
}

multiply(5);     // 5 * 1 = 5
multiply(5, 3);  // 5 * 3 = 15
```

### Arrow Functions (Modern JavaScript)

Arrow functions are shorter syntax for functions. You'll see these a lot in React!

```javascript
// Regular function
function add(a, b) {
  return a + b;
}

// Arrow function - same thing
const add = (a, b) => {
  return a + b;
};

// Short arrow function (implicit return)
const add = (a, b) => a + b;

// One parameter - parentheses optional
const greet = name => `Hello, ${name}!`;
const greet = (name) => `Hello, ${name}!`;  // also valid

// No parameters - need parentheses
const sayHi = () => "Hi!";

// Multiple statements - need curly braces
const process = (x) => {
  const doubled = x * 2;
  return doubled + 5;
};

// Examples you'll see in React
const numbers = [1, 2, 3];
numbers.map(n => n * 2);           // [2, 4, 6]
numbers.filter(n => n > 1);        // [2, 3]

onClick={() => setShowForm(true)}  // common in React
```

### Anonymous Functions (no name)

```javascript
// Function without a name
const add = function(a, b) {
  return a + b;
};

// Arrow function (more common)
const add = (a, b) => a + b;

// Passed to other functions
// call it first and return the value basically the return value 
// of the function is being passed as a parameter to the setTimeout function 
setTimeout(function() {
  console.log("runs after 1 second");
}, 1000);


// Cleaner with arrow
setTimeout(() => {
  console.log("runs after 1 second");
}, 1000);
```

---

## Objects & Arrays

### Objects (Key-Value Pairs)

```javascript
// Create object
const person = {
  name: "Alice",
  age: 25,
  city: "Portland",
  hobbies: ["reading", "cooking"]
};

// Access properties
person.name        // "Alice"
person["name"]     // "Alice" (also works)
person.hobbies     // ["reading", "cooking"]

// Modify properties
person.age = 26;
person.name = "Bob";

// Add new property
person.email = "alice@example.com";

// Delete property
delete person.email;

// Check if property exists
"name" in person   // true
person.hasOwnProperty("name")  // true

// Get all keys
Object.keys(person)  // ["name", "age", "city", "hobbies"]

// Get all values
Object.values(person)  // ["Alice", 25, "Portland", [...]]

// Loop through object
for (let key in person) {
  console.log(key, person[key]);
}

// Nested objects (objects inside objects)
const user = {
  name: "Alice",
  address: {
    street: "123 Main St",
    city: "Portland"
  }
};

user.address.city  // "Portland"
```

### Arrays (Ordered Lists)

```javascript
// Create array
const fruits = ["apple", "banana", "cherry"];

// Access by index (starts at 0!)
fruits[0]    // "apple"
fruits[1]    // "banana"
fruits[2]    // "cherry"
fruits[10]   // undefined (doesn't exist)

// Length
fruits.length  // 3

// Add to end
fruits.push("date");  // returns 4
fruits  // ["apple", "banana", "cherry", "date"]

// Remove from end
fruits.pop();  // returns "date"
fruits  // ["apple", "banana", "cherry"]

// Add to start
fruits.unshift("apricot");
fruits  // ["apricot", "apple", "banana", "cherry"]

// Remove from start
fruits.shift();
fruits  // ["apple", "banana", "cherry"]

// Find index of item
fruits.indexOf("banana")  // 1
fruits.indexOf("grape")   // -1 (not found)

// Check if includes item
fruits.includes("apple")  // true
fruits.includes("grape")  // false

// Get slice (copy portion)
fruits.slice(0, 2)  // ["apple", "banana"] (doesn't modify original)

// Replace items
fruits.splice(1, 1, "blueberry");  // modifies original
fruits  // ["apple", "blueberry", "cherry"]

// Loop through array
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Loop with forEach (you'll use this a lot)
fruits.forEach(fruit => {
  console.log(fruit);
});
```

---

## Array Methods

These are CRITICAL for React. You'll use them constantly!

### .map() - Transform each item

```javascript
// Transform numbers
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
// doubled = [2, 4, 6, 8, 10]

// Transform strings
// map is usedto transform list of values into another list of values 
// here it transforms list of strings into another list of strings
const names = ["alice", "bob", "charlie"];
const capitalized = names.map(name => name.charAt(0).toUpperCase() + name.slice(1));
// capitalized = ["Alice", "Bob", "Charlie"]

// Transform objects
const recipes = [
  {name: "Cookies", prepTime: "15 mins"},
  {name: "Cake", prepTime: "30 mins"}
];

const recipeNames = recipes.map(r => r.name);
// recipeNames = ["Cookies", "Cake"]

// In React (you'll do this constantly)
{recipes.map(recipe => (
  <div key={recipe.name}>{recipe.name}</div>
))}
```

**Key insight:** `.map()` creates a NEW array. Original array unchanged.

### .filter() - Keep only items that match

```javascript
// Filter numbers
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(n => n % 2 === 0);
// evenNumbers = [2, 4]

// Filter objects
const recipes = [
  {name: "Cookies", prepTime: "15 mins"},
  {name: "Cake", prepTime: "30 mins"},
  {name: "Pie", prepTime: "45 mins"}
];

const quickRecipes = recipes.filter(r => r.prepTime.includes("15"));
// quickRecipes = [{name: "Cookies", prepTime: "15 mins"}]

// Filter with search
const searchTerm = "cake";
const filtered = recipes.filter(r =>
  r.name.toLowerCase().includes(searchTerm.toLowerCase())
);

// In React
const filteredRecipes = recipes.filter(recipe =>
  recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
);
```

### .find() - Get first item that matches

```javascript
const recipes = [
  {id: 1, name: "Cookies"},
  {id: 2, name: "Cake"},
  {id: 3, name: "Pie"}
];

const recipe = recipes.find(r => r.id === 2);
// recipe = {id: 2, name: "Cake"}

// Returns undefined if not found
recipes.find(r => r.id === 99);  // undefined
```

### .findIndex() - Get index of item that matches

```javascript
const recipes = [
  {id: 1, name: "Cookies"},
  {id: 2, name: "Cake"},
  {id: 3, name: "Pie"}
];

const index = recipes.findIndex(r => r.id === 2);
// index = 1

// -1 if not found
recipes.findIndex(r => r.id === 99);  // -1
```

### .reduce() - Combine into single value

```javascript
// Sum numbers
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((total, n) => total + n, 0);
// sum = 15

// Build object from array
const recipes = ["Cookies", "Cake", "Pie"];
const recipeMap = recipes.reduce((map, recipe) => {
  map[recipe] = recipe.length;
  return map;
}, {});
// recipeMap = {Cookies: 7, Cake: 4, Pie: 3}

// Syntax: reduce((accumulator, currentItem) => {...}, initialValue)
```

### .some() & .every() - Check conditions

```javascript
const numbers = [1, 2, 3, 4, 5];

// Does at least one match?
numbers.some(n => n > 3);  // true

// Do all match?
numbers.every(n => n > 0);  // true
numbers.every(n => n > 3);  // false
```

### .sort() - Reorder items

```javascript
// Sort numbers
const numbers = [3, 1, 4, 1, 5];
numbers.sort((a, b) => a - b);
// numbers = [1, 1, 3, 4, 5]

// Sort strings
const names = ["Charlie", "Alice", "Bob"];
names.sort();
// names = ["Alice", "Bob", "Charlie"]

// Sort objects
const recipes = [
  {name: "Cookies", prepTime: 15},
  {name: "Cake", prepTime: 30}
];
recipes.sort((a, b) => a.prepTime - b.prepTime);
// Cookies first (15 < 30)
```

### .join() - Convert array to string

```javascript
const ingredients = ["flour", "butter", "sugar"];
const ingredientText = ingredients.join(", ");
// ingredientText = "flour, butter, sugar"
```

---

## ES6+ Features

These are modern JavaScript features you'll use in React.

### Destructuring (Getting values from objects/arrays)

```javascript
// Object destructuring
const person = {name: "Alice", age: 25, city: "Portland"};

// Instead of:
const name = person.name;
const age = person.age;

// Do this:
const {name, age} = person;
// Now: name = "Alice", age = 25

// Rename while destructuring
const {name: personName} = person;
// personName = "Alice"

// Array destructuring
const colors = ["red", "green", "blue"];

// Instead of:
const first = colors[0];
const second = colors[1];

// Do this:
const [first, second] = colors;
// first = "red", second = "green"

// Skip items
const [primary, , tertiary] = colors;
// primary = "red", tertiary = "blue"

// In functions
function greet({name, age}) {
  console.log(`${name} is ${age}`);
}

const alice = {name: "Alice", age: 25};
greet(alice);  // "Alice is 25"
```

**You'll see this constantly in React:**
```javascript
// Getting props
function RecipeCard({recipe, onClick}) {
  // Instead of props.recipe and props.onClick
}

// Using state
const [recipes, setRecipes] = useState([]);
// recipes is array, setRecipes is function
```

### Spread Operator (...)

```javascript
// Spread arrays
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
// arr2 = [1, 2, 3, 4, 5]

// Spread objects
const person = {name: "Alice", age: 25};
const personWithCity = {...person, city: "Portland"};
// personWithCity = {name: "Alice", age: 25, city: "Portland"}

// Override properties
const updated = {...person, age: 26};
// updated = {name: "Alice", age: 26}

// In React (creating new arrays/objects)
setRecipes([...recipes, newRecipe]);  // add to array
setFormData({...formData, name: value});  // update object
```

### Template Literals (backticks)

```javascript
const name = "Alice";
const age = 25;

// Instead of: "Hello " + name + ", you are " + age + " years old"
// Do this:
const message = `Hello ${name}, you are ${age} years old`;

// Can use expressions
const total = `The sum is ${2 + 3}`;
// total = "The sum is 5"

// Multi-line strings
const text = `
  This is a
  multi-line string
  with multiple lines
`;
```

### Arrow Functions (already covered, but important!)

```javascript
// Regular
function add(a, b) {
  return a + b;
}

// Arrow - short form (implicit return)
const add = (a, b) => a + b;

// Arrow - with logic
const add = (a, b) => {
  console.log(`Adding ${a} and ${b}`);
  return a + b;
};

// Used in React
onClick={() => setShowForm(true)}
recipes.map(recipe => <RecipeCard recipe={recipe} />)
```

### Default Parameters

```javascript
function multiply(a, b = 1) {
  return a * b;
}

multiply(5);     // 5 * 1 = 5
multiply(5, 3);  // 5 * 3 = 15

// With arrow functions
const divide = (a, b = 1) => a / b;
```

### Rest Parameters (...)

```javascript
// Collect remaining arguments
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

sum(1, 2, 3, 4, 5);  // 15

// Mix with regular parameters
function greet(greeting, ...names) {
  names.forEach(name => console.log(`${greeting}, ${name}!`));
}

greet("Hello", "Alice", "Bob", "Charlie");
// Hello, Alice!
// Hello, Bob!
// Hello, Charlie!
```

---

## Async JavaScript

Async code runs later (like network requests, timers, etc.).

### setTimeout (delay code)

```javascript
console.log("Start");

setTimeout(() => {
  console.log("This runs after 2 seconds");
}, 2000);

console.log("End");

// Output:
// Start
// End
// This runs after 2 seconds
```

### Promises (handling async code)

```javascript
// Create a promise
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success!");
  }, 1000);
});

// Use a promise with .then()
myPromise.then(result => {
  console.log(result);  // "Success!" after 1 second
});

// Handle errors
myPromise
  .then(result => console.log(result))
  .catch(error => console.log("Error:", error));
```

### Fetch (get data from internet)

```javascript
// Get recipes from a server
fetch('http://localhost:5000/api/recipes')
  .then(response => response.json())  // parse JSON
  .then(data => console.log(data))     // use data
  .catch(error => console.log('Error:', error));

// Send data to server
fetch('http://localhost:5000/api/recipes', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({name: "Cookies", prepTime: "15 mins"})
})
  .then(response => response.json())
  .then(data => console.log("Saved:", data))
  .catch(error => console.log('Error:', error));
```

### Async/Await (cleaner syntax)

```javascript
// Instead of .then().then()
// Use async/await

async function getRecipes() {
  try {
    const response = await fetch('http://localhost:5000/api/recipes');
    const recipes = await response.json();
    console.log(recipes);
  } catch (error) {
    console.log('Error:', error);
  }
}

getRecipes();

// Breakdown:
// async - function will use await
// await - pause here until promise resolves
// try/catch - handle errors
```

**In React:**
```javascript
useEffect(() => {
  async function loadRecipes() {
    try {
      const response = await fetch('http://localhost:5000/api/recipes');
      const data = await response.json();
      setRecipes(data);
    } catch (error) {
      console.log('Error:', error);
    }
  }
  
  loadRecipes();
}, []);
```

---

## Common Patterns

### Checking if value exists

```javascript
// Bad
if (user !== undefined && user !== null) {
  // use user
}

// Good - optional chaining
if (user?.name) {
  // use user.name
}

// Even better
const name = user?.name || "Unknown";
```

### Setting default values

```javascript
// If recipes is null/undefined, use empty array
const recipes = data || [];

// Nullish coalescing (more precise)
const recipes = data ?? [];
```

### Creating copies (important for React!)

```javascript
// Create shallow copy of array
const newArray = [...array];
const newArray = array.slice();

// Create shallow copy of object
const newObj = {...obj};
const newObj = Object.assign({}, obj);

// Create deep copy (for nested objects)
const deepCopy = JSON.parse(JSON.stringify(obj));

// Update array without mutating original
const updated = array.map(item =>
  item.id === 2 ? {...item, name: "New"} : item
);

// Add to array without mutating original
const newArray = [...array, newItem];

// Remove from array without mutating original
const filtered = array.filter(item => item.id !== 2);
```

### Ternary Operator (conditional)

```javascript
// If condition ? true case : false case
const message = age >= 18 ? "Adult" : "Minor";

// Nested
const category = 
  age < 13 ? "Child" :
  age < 18 ? "Teen" :
  "Adult";

// In React
<div>
  {isLoggedIn ? <Dashboard /> : <Login />}
</div>
```

### Logical operators (shortcuts)

```javascript
// && (AND) - if left is true, return right
const user = data && data.user;  // null if data is falsy

// || (OR) - if left is falsy, return right
const theme = localStorage.getItem('theme') || 'dark';

// In React
{recipes.length > 0 && <RecipeList recipes={recipes} />}
// Only shows RecipeList if recipes has items
```

### Switch statement

```javascript
const day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of week");
    break;
  case "Friday":
    console.log("Almost weekend!");
    break;
  default:
    console.log("Middle of week");
}
```

---

## Summary Cheat Sheet

```javascript
// Variables
const value = 10;  // won't change
let value = 10;    // might change

// Functions
function add(a, b) { return a + b; }
const add = (a, b) => a + b;

// Objects
const obj = {name: "Alice", age: 25};
obj.name              // access
const {name, age} = obj;  // destructure

// Arrays
const arr = [1, 2, 3];
arr[0]                // access
const [first] = arr;  // destructure
arr.map(n => n * 2)   // transform
arr.filter(n => n > 1)  // filter
arr.find(n => n === 2)  // find one

// Strings
const str = "hello";
`Hello ${name}`       // template literal
str.includes("ell")   // check
str.toUpperCase()     // transform

// Booleans
true && true          // AND
true || false         // OR
!true                 // NOT

// Conditionals
condition ? true : false  // ternary
if (x > 5) { ... }
switch (value) { ... }

// Async
fetch(url).then(res => res.json()).catch(err => {})
async () => { const data = await fetch(url); }
setTimeout(() => {}, 1000)

// Immutability (important for React!)
[...array, newItem]   // add to array
{...object, key: value}  // add to object
array.map(...)        // transform array
array.filter(...)     // filter array
```

---

## Practice Exercises

Try these to practice:

### Exercise 1: Array Methods
```javascript
const numbers = [1, 2, 3, 4, 5];

// Use .map() to double each number
// Use .filter() to get only even numbers
// Use .reduce() to sum all numbers
// Use .find() to find the first number > 3
```

### Exercise 2: Objects
```javascript
const recipe = {
  name: "Cookies",
  prepTime: 15,
  servings: 12
};

// Add a new property `ingredients`
// Delete the `servings` property
// Use destructuring to get name and prepTime
// Create a new object with same properties + difficulty: "easy"
```

### Exercise 3: Functions
```javascript
// Create a function that takes a recipe object
// Returns a string like "Cookies (15 mins)"

// Use it:
const recipe = {name: "Cookies", prepTime: 15};
console.log(formatRecipe(recipe));  // "Cookies (15 mins)"
```

### Exercise 4: Async
```javascript
// Create a function that:
// 1. Fetches recipes from 'http://localhost:5000/api/recipes'
// 2. Logs the result
// 3. Handles errors
```

---

## Next Step

Now that you've reviewed JavaScript, you're ready for:
1. **VERSION_1_Guide.md** - Learn React with this JavaScript foundation
2. **VERSION_1_App.jsx** - See JavaScript patterns in actual React code

Good luck! 🚀
