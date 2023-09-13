


// Task: Design an online bookstore system using object-oriented principles.
// Instructions:
// Create constructor functions for Book and Author to represent books and authors.
// The Author constructor should take name, birthYear, and nationality as arguments.
// The Book constructor should take title, author (an Author object), genre, and price as arguments.
// Implement methods in the Book prototype:
// getBookInfo - to print the book's title, author's name, genre, and price.
// Create an online bookstore by creating instances of Book and Author objects.
// Display the book details for each book in the bookstore.
// Submit your GitHub link after completing the problem.



function author(name, birthYear, nationality) {
    this.name = name;
    this.birthYear = birthYear;
    this.nationality = nationality;


}

function book(title, author, genre, price) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.price = price;

    this.getBookInfo = function() {
        console.log(this.title);
        console.log(this.author.name);
        console.log(this.genre);
        console.log(this.price);
    }


}

let author1 = new author("Nikhil", 1994, "Indian");
console.log(author1);

// console.log(author1.name);
// console.log(author1.birthYear);
// console.log(author1.nationality);

let book1 = new book("ABC", author1.name, "thriller", 499);
console.log(book1);



// let getBookInfo1 = book1.getBookInfo()
// console.log(getBookInfo1);



let author2 = new author("Divya", 1998, "Canadian");
console.log(author2);

let book2 = new book("XYZ", author2.name, "Horror", 1499);
console.log(book2);



let author3 = new author("Broodie", 2017, "American");
console.log(author3);

let book3 = new book("DOG'S Life", author3.name, "Comedy", 1999);
console.log(book3);
