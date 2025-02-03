
// Empty arrayList containing all library books
const myLibrary = [];
const addBookButton = document.getElementById("addBookButton");
const bookDialog = document.getElementById("bookDialog");
const closeBookDialog = document.getElementById("closeBookDialog");
const addBookDialogButton = document.getElementById("addBookDialog");

function book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    }

function addBookToLibrary(title, author, pages, read){

    let bookToAdd = new book(title, author, pages, read)
    myLibrary.push(bookToAdd);
}

function updateTable(){
    const mainTable = document.getElementById("tbody");
    tbody.innerHTML = "";
    for (let x = 0; x < myLibrary.length; x++){
        let tableTitle = myLibrary[x].title;
        let tableAuth = myLibrary[x].author;
        let tablePages = myLibrary[x].pages;
        let tableRead = myLibrary[x].read;
;
            
        let row = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");

        td1.innerHTML = tableTitle;
        td2.innerHTML = tableAuth;
        td3.innerHTML = tablePages;
        td4.innerHTML = tableRead;
        td5.innerHTML = `<button type="button" class="removeBookButton">Remove from Library</button>`;

        row.appendChild(td1);
        row.appendChild(td2);
        row.appendChild(td3);
        row.appendChild(td4);
        row.appendChild(td5);
        mainTable.appendChild(row);
    }
}

function addBookDialog(){
    let dialogBkName = document.getElementById("bookName").value;
    let dialogBkAuth = document.getElementById("bookAuthor").value;
    let dialogBkPages = document.getElementById ("bookPages").value;
    let dialogBkRead = document.getElementById("bookRead").value;

    if (dialogBkRead !== "yes" && dialogBkRead !== "no"){
        alert("Please select whether you have read this book or not");
        return false;
    }
    else{
        let newBook = new book(dialogBkAuth,dialogBkName,dialogBkPages,dialogBkRead)
        myLibrary.push(newBook);
    }
}

addBookButton.addEventListener("click", () => {
    bookDialog.showModal();
    bookDialog.classList.add()
});

closeBookDialog.addEventListener("click", (e) => {
    e.preventDefault();
    bookDialog.close();
});

addBookDialogButton.addEventListener("click", (e) => {
    addBookDialog();
    e.preventDefault();
    updateTable();
    bookDialog.close();
});

addBookToLibrary("TestoBook", "Mr Test", "300", "yes");

updateTable();