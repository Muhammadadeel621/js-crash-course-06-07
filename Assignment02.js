// Task 01

// function baseAdderFunction(baseNumber) {
//   return function (numberToAdd) {
//     return baseNumber + numberToAdd;
//   };
// }

// const addFive = baseAdderFunction(5);
// const addSix = baseAdderFunction(6);

// console.log(addFive(2));
// console.log(addSix(5));

// Task 02

// function searchArrayForValueRecursively(array, value) {
//   if (array.length === 0) {
//     return false;
//   }

//   if (array[0] === value) {
//     return true;
//   }

//   return searchArrayForValueRecursively(array.slice(1), value);
// }

// let result = searchArrayForValueRecursively([1, 5, 9, 6, 8, 7, 3, 2], 2);
// console.log(result);

// Task 03
// function addParagraphToBody(text) {
//   const paragraph = document.createElement("p");
//   paragraph.textContent = text;
//   document.body.appendChild(paragraph);
// }

// addParagraphToBody("Hello, world!");
// addParagraphToBody("Bye Bye, world!");
// addParagraphToBody("today is tuesday");

// Task 04
// function addListItemToUnorderedList(list, text) {
//   const listItem = document.createElement("li");
//   listItem.textContent = text;
//   list.appendChild(listItem);
// }

// addListItemToUnorderedList(
//   document.getElementById("testList"),
//   "Append-Unordered-List-number"
// );

// task 05
// function changeBackgroundColorOfElement(element, color) {
//   element.style.backgroundColor = color;
// }

// changeBackgroundColorOfElement(document.getElementById("testList"), "red");

// task 06
// function addObjectToLocalStorage(key, objectToSave) {
//   localStorage.setItem(key, JSON.stringify(objectToSave));
// }

// addObjectToLocalStorage("user", {
//   name: "Rao",
//   age: 22,
//   hobbies: ["coding", "singing", "teaching"],
// });

// addObjectToLocalStorage("employee", {
//   name: "Adeel",
//   age: 22,
//   hobbies: ["singing", "cricket"],
// });

// addObjectToLocalStorage("todos", ["task 1", "task 2"]);

// task 07
// function getItemsFromLocalStorage(key) {
//   const rawData = localStorage.getItem(key);
//   return rawData ? JSON.parse(rawData) : "key doesn't exist";
// }

// console.log(getItemsFromLocalStorage("user"));
// console.log(getItemsFromLocalStorage("todos"));
// console.log(getItemsFromLocalStorage("employeee"));

// task 08

// function saveEachValueOfObjectInLocalStorage(object) {
//   // if (typeof object !== 'object') throw new Error('your data must be an object');

//   // if (Array.isArray(object)) throw new Error('your data must be an object (not an array)');

//   // for (const key in object) {
//   //   addObjectToLocalStorage(key, object[key]);
//   // }

//   const result = {};

//   for (const key in localStorage) {
//     const value = JSON.parse(localStorage.getItem(key));
//     if (value) result[key] = value;
//   }

//   return result;
// }

// const user = {
//   name: "Adeel",
//   age: 22,
//   hobbies: ["coding", "singing", "teaching"],
// };

// const res = saveEachValueOfObjectInLocalStorage([1, 2, 3, 4]);
// // console.log(addObjectToLocalStorage(user));
// console.log(res);
