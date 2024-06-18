//Synchronous & Asynchronous Programming

// Synchronous Method
//code run line by line
//Example 1

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

//Example 2
let c = 1;
let d = 2;
console.log(c);
console.log(d);

//Asynchronous Method
//Example 1

console.log(1);
console.log(2);
console.log(3);
setTimeout(function(){
    console.log(4);
},2000)
console.log(5);
console.log(6);

//Example 2
console.log("a");
console.log("b");
setTimeout(function(){
    console.log("c");
    },4000)
console.log("d");
console.log("e");

//Example 3
let a = 1;
let b = 2

setTimeout(function(){
    console.log(a);
    },2000)
console.log(b);
a=10

//Example4
console.log(1);
console.log(2);
setTimeout(function(){
    console.log(3);
    },3000)
for(let i=1; i <= 7; i++){
console.log(`loop ${i}`);  
}






    

    











