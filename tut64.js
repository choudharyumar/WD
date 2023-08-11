// first to include module 

// example to include built in module and read a file 

// const fs=require("fs");
// const text=fs.readFileSync("umar.txt","utf-8")
// console.log("The data in the text file is as given below:");
// console.log(text);


// example to include built in module and change a data in a file 

// const fs=require("fs");
// let text=fs.readFileSync("umar.txt","utf-8");
// text=text.replace("working","coding");
// console.log("The changing word is as given below:");
// console.log(text);


// now we create a new file in which we store a new text

const fs=require("fs");
let text=fs.readFileSync("umar.txt","utf-8");
text=text.replace("working","hayat");
console.log("The changing word is as given below:");
console.log(text);

console.log("creating a new file")
fs.writeFileSync("umar2.txt",text)






