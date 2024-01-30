function examplefunction(){
    if (true) {
        var functionScopeVar = "I am function-scoped";
    }
    console.log(functionScopeVar);
    // var is a function level scope
}
examplefunction();
console.log(functionScopeVar);  //error functionscoped is not defined