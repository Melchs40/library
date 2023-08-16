let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return this.title + " by " + this.author + " is " + this.pages + " pages and I have " + this.read + " this.";
    };
}

document.getElementById("enter-info").addEventListener("click", function() {;

    title = document.getElementById("book-title").value;
    author = document.getElementById("author-name").value;
    pages = document.getElementById("total-pages").value;
    if (document.getElementById("yes").checked) {
        read = "read"
    } else read = "not read";
    myLibrary.push(new Book(title, author, pages, read));
    document.getElementById("book-content").textContent = title + " by " + author + " is " + pages + " pages and I have " + read + " this."


});




