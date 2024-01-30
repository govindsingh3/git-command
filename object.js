//object is the collection of key value pair
//key are strings, and values can be of any data type, including other object.

let person = {
    name: "Alice",
    age: 30,
    isStudent:false
};
console.log(person.name);


let car = {
    make: "Toyota",
    model: "Camry",
    year: 2022,
    isELectric: false,
    start: function(){
        console.log("Engine started!");
    }
};
    console.log(car.make);
    console.log(car.model);
    console.log(car.year);
    car.start();
