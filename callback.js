//the function that can take other functions as argument are called higher order function.

//SYNCHRONOUS CALLBACK FUNCTION

/*function parentFunction(name, callback){
    callback();
    console.log("Hey "+name);
}

function randomFunction(){
    console.log("Hey I am callbackFunction");
}

parentFunction("Random String",randomFunction);*/


//ASYNCHRONOUS CALLBACK FUNCTION
// 1 way
/*function parentFunction(name, callback){
    setTimeout(callback,1000);
    console.log("Hey "+name);
}

function randomFunction(){
    console.log("Hey I am callbackfunction");
}

parentFunction("Random String",randomFunction);*/


// 2 way
function parentFunction(name, callback){
    setTimeout(callback,1000);
    console.log("Hey "+name);
}

parentFunction("Random String",function(){
    console.log("Hey I am callbackfunction");
});