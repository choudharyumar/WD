// working of JSON.stringfy
// it works on all type primitives

let obj={
    name:"umar",
    class:5,
    channel:"code with umar"
}
console.log(obj)
let jsonobj=JSON.stringify(obj)
console.log(jsonobj)


// working of JSON.parse
// it converts strings in to obj and also working on all type of string methods


let obj2={
    name:"umar",
    class:5,
    channel:"code with umar"
}
console.log(obj)
let jsonobj2=JSON.stringify(obj)
console.log(jsonobj2)
jsonobj2=JSON.parse(jsonobj2)
console.log(jsonobj2)
