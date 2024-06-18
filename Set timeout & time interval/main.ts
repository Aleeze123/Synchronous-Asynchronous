//                                  Set Timeout & Time interval

//Set Time out

console.log("Hey Dear!");
setTimeout(function(){
    console.log("Aleeze!");
    
}, 1000)
setTimeout(function(){
    console.log("Senior Student at GIAIC!");
    
},2000)

//-------------------------------------------------------------------------------------------------------------//

//Time interval 
console.log("Her dear!");
let count = 0;
let func = setInterval(function(){
    count++;
    console.log(`${count}: Aleeze`);
    if(count >=5){
        clearInterval(func)
    }
    

},1000)

//---------------------------------------------------------------------------------------------------------------//
