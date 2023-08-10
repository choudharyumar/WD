

// printing the math object
let m=Math;
console.log(m)


// printing the constants from math objects

console.log("The value of Math.E is  ",Math.E)
console.log("The value of Math.PI is  ",Math.PI)

// printing the functions from math objects

// Rounded the values
let a=64.65478;
let b=78;
console.log("the value of a and b  after round off is ",Math.round(a),Math.round(b))

// power function

console.log("the value of 4 raised to the power 9 is  ",Math.pow(4,9))


// Square root function

console.log("the square root of 36 is  ",Math.sqrt(36))
console.log("the square root of 50 is  ",Math.sqrt(50))


// working of ceil and floor

console.log("the ceil of 6.8 is ",Math.ceil(6.8))
console.log("the floor of 6.8 is ",Math.floor(6.8))

// Absolute function

console.log("the absolute value of 5.66 is ",Math.abs(5.66))
console.log("the absolute value of -5.66 is ",Math.abs(-5.66))


// working of trignomatric function

// we give value of trignometric functions in radians
console.log("the value of sin(PI) is ",Math.sin(Math.PI/2))


// min max functions

console.log("Minimum value of 4,5,6 is ",Math.min(4,5,6))
console.log("Maximum value of 4,5,6 is ",Math.max(4,5,6))

// Generating of a random number

let r=Math.random()
console.log("the random number is ",r)

// if we generate random number btween 1 and 100 is 

let a1=1;
let b1=100;
let ran=a1+(b1-a1)*Math.random()
console.log("the random number between 1 and 100 is ",ran)
console.log("the round of above random number is",Math.round(ran))


