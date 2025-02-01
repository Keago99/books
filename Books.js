

function book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function(){
        return(title + " by " + author + ", " + pages + " pages, " + read); 
    }
}

const theHobbit = new book("The Hobbit", "J.R.R Tolkien", "300", "Not read yet");

console.log(theHobbit.info());