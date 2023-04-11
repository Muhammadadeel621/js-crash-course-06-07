// // Objects

// let person = {
//   name: "Nadir",
//   cnic: 1234567890,
//   eyesColor: "black",
//   canSpeakEnglish: false,
//   speak: function (sentence) {
//     console.log(sentence + this.name);
//   },
// };

// let person2 = {
//   // person2 = Object
//   name: "Ameen", // name: "Ameen" = Property
//   cnic: 1234567890, // cnic = key
//   eyesColor: "black", // "black" = value
//   canSpeakEnglish: false,
//   speak: function (sentence) {
//     console.log(sentence + this.name);
//   },
// };

// person2.speak("Hello, I'm ");
// console.log(person.name);

// let Student1 = {
//   name: "Adeel",
//   rollno: 425,
//   teacher: "Ishaq",
//   className: "CSS",
// };

// let Student2 = {
//   name: "hamza",
//   rollno: 428,
//   teacher: "Ishaq",
//   className: "JS",
// };

// let students = [Student1, Student2];
// console.log(students);

// function provideStudent(name, rollno, teacher, className) {
//   return {
//     name: name,
//     rollno: rollno,
//     teacher: teacher,
//     className: className,
//   };
// }

// let Students = [
//   provideStudent("Muhammad Adeel", 426, "Ishaq Bhojani", "JS"),
//   provideStudent("Muhammad bilal", 486, "Ishaq Bhojani", "CSS"),
//   provideStudent("Muhammad Ashar", 446, "Ishaq Bhojani", "HTML"),
// ];
// console.log(Students);

// let Students = [];

// function provideStudent() {
//   let std = {
//     name: prompt("Enter Your Name : "),
//     rollno: +prompt("Enter Your Roll# : "),
//     teacher: prompt("Enter Your TeacherName : "),
//     className: prompt("Enter Your ClassName : "),
//   };
//   Students.push(std);
//   console.log(Students);
// }

// let prevStudents = localStorage.getItem("students");
// let Students = prevStudents ? JSON.parse(prevStudents) : [];

// function provideStudent() {
//   let std = {
//     name: prompt("Enter Your Name : "),
//     rollno: +prompt("Enter Your Roll# : "),
//     teacher: prompt("Enter Your TeacherName : "),
//     className: prompt("Enter Your ClassName : "),
//   };
//   Students.push(std);
//   console.log(Students);
//   let stringify = JSON.stringify(Students);
//   localStorage.setItem("students", stringify);
// }

// localStorage.setItem("name", "Adeel");
// localStorage.getItem("name")

//   Class 07

// let myPara = document.getElementById("my-para");
// myPara.innerText = "Hello";

// let myPara = document.querySelector("p");
// myPara.innerHTML = "<b>Pakistan Zindabad</b>";
// console.log(myPara);

// let myPara = document.querySelector("#my-para");
// myPara.innerHTML = "<b>Pakistan Zindabad</b>";
// myPara.style.backgroundColor = "#000";
// myPara.style.color = "#fff";

// setInterval(function () {
//   if (myPara.style.display === "none") {
//     myPara.style.display = "block";
//   } else {
//     myPara.style.display = "none";
//   }
// }, 500);

// let yourPara = document.querySelector("#your-para");
// yourPara.innerHTML = "<b>Pakistan Zindabad</b>";
// yourPara.style.backgroundColor = "#000";
// yourPara.style.color = "#fff";
// yourPara.style.width = "100%";

// setInterval(function () {
//   let width = yourPara.style.width;
//   if (width === "100%") {
//     yourPara.style.width = "10%";
//   } else {
//     // "30%"
//     width = +width.replace("%", ""); // "30%" => "30" => 30
//     yourPara.style.width = width + 10 + "%"; // 30 + 10 = 40 + "%" = "40%""
//   }
// }, 500);

// const myPara = document.getElementById("my-para");
// myPara.innerHTML = "<b>Pakistan Zindabad</b>";
// setInterval(function () {
//   let color1 = Math.floor(Math.random() * 16777215).toString(16);
//   let color2 = Math.floor(Math.random() * 16777215).toString(16);
//   myPara.style.backgroundColor = "#" + color1;
//   myPara.style.color = "#" + color2;
// }, 500);
