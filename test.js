// create array called myLibrary
let myLibrary = [];


// create object constructor to be placed into myLibrary array
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}


// create function on Book prototype
Book.prototype.info = function() {
    return this.title + " by " + this.author + " is " + this.pages + " pages and I have " + this.read + " this.";
};


//  create object to be added to myLibrary with click event
document.getElementById("enter-info").addEventListener("click", function() {;

    let title = document.getElementById("book-title").value;
    let author = document.getElementById("author-name").value;
    let pages = document.getElementById("total-pages").value;

    if (document.getElementById("yes").checked) {
        read = "Read"
    } else read = "Not Read";
    myLibrary.push(new Book(title, author, pages, read));

    // create new div within click event
    addElement = () => {
        let newDiv = document.createElement("div");
        newContent = document.createTextNode("Title: " + title + "\n" + "Author: " + author + "\n" + "Total Pages: " + pages + "\n" + "Read/Not Read: " + read);
        newDiv.appendChild(newContent);
        // newDiv.setAttribute("id", "book-1")
        let currentDiv = document.getElementById("content-div");
        document.body.insertBefore(newDiv, currentDiv);
    };

    // clears the text from the form within click event
    clearText = () => {
        document.getElementById("book-title").value = "";
        document.getElementById("author-name").value = "";
        document.getElementById("total-pages").value = "";
        document.getElementById("yes").checked = false;
        document.getElementById("no").checked = false;
    }
    // creates alert on no title, adds unknown to author/pages when missing
    if (title == "") {
        alert("Title necessary, please enter the book's title")
    } else if (author == "" && pages == "") {
        author = "Unknown";
        pages = "Unknown";
        addElement(), clearText();
    } else if (author == "") {
        author = "Unknown";
        addElement(), clearText();
    } else if (pages == "") {
        pages = "unknown";
        addElement(), clearText();
    } else addElement(), clearText();
});




