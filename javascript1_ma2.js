//MODULE ASSIGNMENT 2 - LEVEL 1
//1. Create a function that displays prototypal inheritance

function Furniture() {
  this.make = "Chair";
}

Furniture.prototype.model = function() {
  console.log("Rocking chair is a type of " + this.make)
}

var rockingChair = new Furniture();
rockingChair.model();

//2. Create an array of numbers from 1 - 10; slice the 5th number in the array
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var singleNumber = numbers.slice(4, 5);

//3. Delete the last number in the array that you created above.

numbers.splice(9, 1);
console.log(numbers);


//4. Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana
// and strawberries to bananas:
/*Strawberries are a popular part of spring and summer diets throughout America.
Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes.
They announce the impending arrival of the ruby red berries that so many people crave.
Ripe strawberries taste sweet and have only a slight hint of tartness.
They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry,
but many people prefer to eat them fresh and unaccompanied.*/

function changeText (paragraph) {
  newParagraph1 = paragraph.replace(/strawberry|Strawberry/g, "banana");
  newParagraph2 = newParagraph1.replace(/strawberries|Strawberries/g, "bananas");

//4. Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas:
Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.
  return newParagraph2;
}

changeText("Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.")

//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.
//5. Create an array and a button. The array should contain 4 football clubs names.
// When the button is clicked, remove all elements out of the array that we just created.
// There after add in 4 names of cars inside that array. Log it to the console.

var myArr = ["Manchester United", "Arsenal", "Chelsea", "Liverpool"];

function changeArray() {
  myArr.splice(0, 4, "Volvo", "Subaru", "Audi", "Toyota");
  console.log(myArr);
}

//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.

var people = [
  {name:"Michael", job: "Manager"},
  {name:"Lily", job: "Witch"},
  {name:"James", job: "Wizard"}
  ]

var names = people.filter(function(name) {
  return (name.name === "Lily");
})

console.log(names);

//7. Create a simple function that logs the date.

function logDate() {
  var today = new Date();

  console.log("Todays date is: " + today.getDate() + "." + (today.getMonth()+1) + "." + today.getFullYear());
}

logDate()
