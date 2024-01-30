function examplefunction(){
    if (true) {
        let functionScopeVar = "I am function-scoped";
    }
    console.log(functionScopeVar);// error
    // let and cons are block level scope
}
examplefunction();
console.log(functionScopeVar);  //error functionscoped is not defined