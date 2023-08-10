// arrow functions

// let ab=()=>console.log("here is arrow function")
// ab()

// return arrow function

// let rt=(a,b)=>a+b;
// console.log("the sum of two numbers is",rt(3,4))


// working of settimeout in arrow function


// setTimeout(() => {
//     console.log("here is arrow function")
// }, 3000);


// example

// let dalay=4000;
// let ma=(a,b)=>{
//     console.log("here is the sum of both",a+b)
// }
// setTimeout(ma,dalay,3,4)



// working of foreach as an arrrow function in object

// let obj={
//     names:["umar","hamza","khizar"],

//  abc(){
//     this.names.forEach((a) => {
//         console.log("hello ",a)
//     });

// }
// }
// obj.abc()


// working of this in arrow function

// let obj={
//     age:23,
//     names:["umar","hamza","khizar"],

//  abc(){
//     this.names.forEach((a) => {
//         console.log(this.age,"hello ",a)
//     });

// }
// }
// obj.abc()


// Note-->this only works in arrow functions but not in simple functions


// example

// const myObject = {
//     name: "John",
//     age: 30,
//     hobbies: ["reading", "gaming", "cooking"]
//   };
  
//   Object.keys(myObject).forEach(key => {
//     console.log(`Property: ${key}, Value: ${myObject[key]}`);
//   });
 


// exmple
const myObject = {
    name: "John",
    age: 30,
    hobbies: ["reading", "gaming", "cooking"]
  };
  
  myObject.hobbies.forEach(hobby => {
    console.log(hobby);
  });
  