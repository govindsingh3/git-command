//object constructor function
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}
//creating instances of the object
let book1 = new Book("The Catcher in the Rye", "J.D. Salinger", 1951);
let book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
console.log(book1.title);
console.log(book1.year);
console.log(book2.author);