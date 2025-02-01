
// Empty arrayList containing all library books
const myLibrary = [];

function book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function(){
        return(title + " by " + author + ", " + pages + " pages, " + read); 
    }
}

function addBookToLibrary(title, author, pages, read){

    let bookToAdd = new book(title, author, pages, read)
    myLibrary.push(bookToAdd);
}

const theHobbit = new book("The Hobbit", "J.R.R Tolkien", "300", "Not read yet");

console.log(theHobbit.info());
addBookToLibrary("DuckBook", "Mr.Duck", "300", "Not read yet");

console.log(myLibrary); // Works by adding new
console.log(myLibrary[0].info()); // Works by adding old