
// ------------------------------------ TRY & CATCH --------------------------------------------//

//                                         try
/*console.log("Start");
try{
    let a = "Aleeze"
console.log(a);

}catch(error){
    console.log("Error");
    
}

console.log("Stop");    //output Start Aleeze Stop*/
//-----------------------------------------------------------------------------------------------------------//

            
//                                             catch
/*console.log("Start");
try{
    lett a = "Aleeze" // syntax error
console.log(a); //error 

}catch(error){
    console.log("Error");
    
}

console.log("Stop");    //output Start Error Stop
//-------------------------------------------------------------------------------------------------------------//

//                                              try
console.log("Start");

async function func1(){
   try{
    let fetchData = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    let response = await fetchData.json()
    console.log(response);
   }catch(error){
    console.log("Error in API");
    
   }
    
}
func1()
console.log("End")
*/
//------------------------------------------------------------------------------------------------------------//

//                                             catch
console.log("Start");

async function func1(){
   try{
    let fetchData = await fetch("https://sonplaceholder.typicode.com/posts/1") // mistake in API 
    let response = await fetchData.json()
    console.log(response);
   }catch(error){
    console.log("Error in API");
    
   }
    
}
func1()
console.log("End");


