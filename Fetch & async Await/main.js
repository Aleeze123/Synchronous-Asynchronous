"use strict";
/*                             FETCH
 • Fetch is a predefine function that return Promise
 • Fetch function require API

 Question: What is API?
 Answer: The API client acts as a bridge between the server and the client, facilitating the exchange of data.
*/ 
let url = "https://jsonplaceholder.typicode.com/posts/1"

let fetchData = fetch(url).then((response)=>(response.json()))
.then(data=>console.log(data))
.catch(error=>console.log(error))

console.log(fetchData);

//--------------------------------------------------------------------------------------------------------//
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/*                          Async Await
 • Fetch is a predefine function that return Promise
 • Return promise
 */
let url = "https://jsonplaceholder.typicode.com/posts/1";
let func1 = () => __awaiter(void 0, void 0, void 0, function* () {
    let fetchData = yield fetch(url);
    let response = yield fetchData.json();
    console.log(response);
});
func1();
//---------------------------------------------------------------------------------------------------------//
