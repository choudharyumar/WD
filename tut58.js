// set timeout is only run for once in a given time when it calls 

// function abc(name,age=19){
//     console.log("this is set time out  "+name+" "+age)
// }
//    setTimeout(abc,3000,"umar");
   
   
   
   
   
   
   //    to clear the time


//    function abc(name,age=19){
//     console.log("this is set time out  "+name+" "+age)
// }

// // timeout gives us a uniqe id
// timeOut=setTimeout(abc,3000,"umar");
//    console.log(timeOut)
// clearTimeout(timeOut)



// set interval  run repeatedly in a given time when it calls

// function abc(name,age=19){
//     console.log("this is set time out  "+name+" "+age)
// }
//     setInterval(abc,3000,"umar");

// working of clear timeinterval

// function abc(name,age=19){
//     console.log("this is set time out  "+name+" "+age)
// }
//     intervalId=setInterval(abc,3000,"umar");
//     console.log(intervalId)
//     clearInterval(intervalId)



// display time application
function displaytime(){
    time=new Date()
    console.log(time)
    document.getElementById("time").innerHTML=time
}
 setInterval( displaytime,2000)