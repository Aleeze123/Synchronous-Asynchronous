/*                              CALLBACK HELL
Callback hell in JavaScript refers to a situation where multiple nested callbacks
 make the code hard to read and maintain.
This typically occurs when performing asynchronous operations that depend on each other, 
leading to deeply nested function calls.
 
 
 //                              IN SIMPLE WORDS
Callback hell is when your code becomes hard to read and manage due to too many nested callback functions.  */
/*
setTimeout(()=>{
    console.log("Called to HR!");
    setTimeout(()=>{
        console.log("HR to Director!"); 
        setTimeout(()=>{
            console.log("Information Update!");
        },1000)
               
    },1000)
},2000)
*/
//-----------------------------------------------------------------------------------------------------------------//

/*                                   PROMISE
Promises are a powerful tool in JavaScript for handling asynchronous operations. 
They help in managing the complexities and potential pitfalls of asynchronous code,
 providing a more structured and readable approach compared to traditional callbacks. */


 let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Called to HR!");
        resolve("Calledl to HR!"); 
    }, 2000);
});

promise.then(() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("HR to Director!");
            resolve("HR to Director!"); 
        }, 1000);
    })
}).then(() => {
    setTimeout(() => {
        console.log("Information Update!");
    }, 1000);
})

