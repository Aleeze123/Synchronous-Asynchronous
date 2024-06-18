/*                             FETCH 
 • Fetch is a predefine function that return Promise
 • Fetch function require API

 Question: What is API?
 Answer: The API client acts as a bridge between the server and the client, facilitating the exchange of data.
*/ /*
let url = "https://jsonplaceholder.typicode.com/posts/1"

let fetchData = fetch(url).then((response)=>(response.json()))
.then(data=>console.log(data))
.catch(error=>console.log(error))

console.log(fetchData);
*/
//--------------------------------------------------------------------------------------------------------//

/*                          Async Await
 • Fetch is a predefine function that return Promise
 • Return promise
 */
let url = "https://jsonplaceholder.typicode.com/posts/1"
let func1 =  async()=>{
    let fetchData = await fetch(url)
    let response = await fetchData.json()
    console.log(response);
    
}
func1()
//---------------------------------------------------------------------------------------------------------//
