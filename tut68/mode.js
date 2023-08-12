console.log("this is mode.js")

function average(arr){
    let sum=0;
    arr.forEach(element => {
        sum+=element;
    });
    return sum;
}

// to export this function

module.exports = average;