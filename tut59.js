// showing of new date

let date = new Date();
console.log(date);

// showing of refrence date

let date1 = new Date(1000); //this figure gives us the time passing by 1970 and 1000 is 1sec
console.log(date1);

// showing of time by giving the date
//let d2=new Date("year-month-date")

let d2 = new Date("2029-12-23"); //new Date is a constructor
console.log(d2);

//let d2=new Date(year,month,date,hours,minutes,sec,milliseconds)

let d3 = new Date(2028, 6, 7, 8, 45, 26, 34); //new Date is a constructor
console.log(d3);

// functions

let yr = d3.getFullYear();
console.log("this is a year of d3", yr);

// date function
let date3 = d3.getDate();
console.log("this is the date of d3", date3);

// month function
let month = d3.getMonth();
console.log("this is the month of d3", month);

// there are gethours and etc
let hours = d3.getHours();
console.log("this is the hour of d3", hours);

let msec = d3.getMilliseconds();
console.log("this is the milisec of d3", msec);

// to set the new date
d3.setDate(9)
d3.setMonth(8)
console.log("this is the new date of d3",d3)

// to find the milisec of today from 1970
console.log(Date.now())

setInterval(updatetime,1000)
function updatetime(){
    time.innerHTML=new Date()
}