// we change this in broweser console and update the value

let main=document.getElementById('main')
console.log(main)
let nav=document.getElementById('nav')
console.log(nav)

// we also use classes to access in the broweser
let container=document.getElementsByClassName('container')
console.log(container)

// we also use CSS selectors

// let sel=document.querySelector('#nav')
// console.log("jo bi first ho ga wo return kar dy ga",
// sel)


// to call first child


// let sel=document.querySelector('#nav>li');
// console.log("to call the first child",
// sel);


// use of queryslectorsAll which return all matching elements

let sel=document.querySelectorAll('#nav>li')
console.log("to call the all matching elements",
sel)