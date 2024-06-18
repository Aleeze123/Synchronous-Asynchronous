"use strict";
// ------------------------------------ TRY & CATCH --------------------------------------------//
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
function func1() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let fetchData = yield fetch("https://sonplaceholder.typicode.com/posts/1"); // mistake in API 
            let response = yield fetchData.json();
            console.log(response);
        }
        catch (error) {
            console.log("Error in API");
        }
    });
}
func1();
console.log("End");
