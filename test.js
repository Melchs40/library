let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return this.title + " by " + this.author + " is " + this.pages + " pages and I have " + this.read + " this.";
    }
    // this.addBookToLibrary = function() {
    //     myLibrary.push(this);
    // }
    // this.addBookToLibrary();
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

