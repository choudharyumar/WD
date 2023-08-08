// let name="umar hayat"
// // this name2=khizar is a global variable
// let name2="khizar"
// let name3="hamza"
// let gmr="Good morning "
// function greeting(name,gmr){
//     let name2="saqib"//this is a local variable
//     console.log( gmr+name+" is a good boy")
//     console.log(name2)
// }
// greeting(name,gmr)
// greeting(name2,gmr)
// greeting(name3,gmr)


// when we give a value to a parameter in inside function


let name="umar hayat"
// this name2=khizar is a global variable
let name2="khizar"
let name3="hamza"
let gmr="Good morning "
function greeting(name,gmr="hyyyyyyyyyyyyyyyyyyyy "){
    let name2="saqib"//this is a local variable
    console.log( gmr+name+" is a good boy")
    console.log(name2)
}
greeting(name,gmr)
greeting(name2,gmr)
greeting(name3) 


