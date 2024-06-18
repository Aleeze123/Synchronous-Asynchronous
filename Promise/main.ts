/*                                         PROMISE 
A Javascript Promise can be 
 • Pending
 • Resolve
 • Reject

Promise object supports two properties: state  &  result

• While a Promise object is "Pending" (working), the result is undefined.
• While a Promise object is "resolve" ,the result is a value.
• While a Promise object is "reject" ,the result is an error object.
*/

let aleezePromise = new Promise((resolve , reject)=>{
    console.log("Promise Pending.......");
    setTimeout(()=>{
        let data = ""
       if(data){
           console.log("Data fetched successfully, Promise resolved!");
        return resolve(data)  
       }   
       else{
          console.log("Data fetched failed, Promise rejected!");   
            return reject(new Error("Data fetched failed"))     
        }
},3000)
})
aleezePromise
.then((result)=>(console.log(result)))//Promise resolve
.catch((error)=>(console.log("Oh No! Data fetched failed")))//Promise reject

//                                 EXAMPLE 1 

let cityPromise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        let cityName = "Karachi"
        
        if(cityName == "Karachi"){
            console.log("Your city name is Karachi");
            return resolve(cityName)
        }
        else{
            console.log("Promise rejected");
            
          return reject(new Error)
        }
    },2000) 
})
cityPromise
.then((resolve)=>(console.log("Promise resolved")))
.catch((reject)=>(console.log("Oh no! Promise rejected")))


