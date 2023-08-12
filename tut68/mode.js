console.log("this is mode.js")

function average(arr){
    let sum=0;
    arr.forEach(element => {
        sum+=element;
    });
    return sum;
}

// to export this function

// module.exports = average;

// we also make a object in this 

module.exports ={
    avg:average,
    name:'umar hayat',
    class:6
} ;

// module.exports.name="Ali Hamza"=>--it is also used as an object
