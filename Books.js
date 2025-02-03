
// Empty arrayList containing all library books
const myLibrary = [];
const addBookButton = document.getElementById("addBookButton");
const bookDialog = document.getElementById("bookDialog");
const closeBookDialog = document.getElementById("closeBookDialog");

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

addBookButton.addEventListener("click", () => {
    bookDialog.showModal();
    bookDialog.classList.add()
});

closeBookDialog.addEventListener("click", (e) => {
    e.preventDefault();
    bookDialog.close();
});