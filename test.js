// create array called myLibrary
let myLibrary = [];


// create object constructor to be placed into myLibrary array
function Book(title, author, read, rating) {
    this.title = title
    this.author = author
    this.read = read
    this.rating = rating
}


// create function on Book prototype
Book.prototype.info = function() {
    return this.title + " by " + this.author + ",  I have " + this.read + " this, and rated it " + this.rating + " stars.";
};


//  create object to be added to myLibrary with click event
document.getElementById("enter-info").addEventListener("click", function() {;

    let title = document.getElementById("book-title").value;
    let author = document.getElementById("author-name").value;
     let read = document.getElementById("read").value;
     let rating = document.getElementById("rating").value;
    
    myLibrary.push(new Book(title, author, read, rating));

    // create new div within click event
    addElement = () => {
        let newDiv = document.createElement("div");
        newContent = document.createTextNode("Title: " + title + "\n" + "Author: " + author + "\n" + "Rating: " + rating + "\n" + "Read/Not Read: " + read);
        newDiv.appendChild(newContent);
        newDiv.classList.add("book-div");
        let currentDiv = document.getElementById("content-div");
        document.body.insertBefore(newDiv, currentDiv);
    };

    // clears the text from the form within click event
    clearText = () => {
        document.getElementById("book-title").value = "";
        document.getElementById("author-name").value = "";
        document.getElementById("rating").value = 3;
    }
    // creates alert on no title, adds unknown to author/pages when missing
    if (title == "") {
        alert("Title necessary, please enter the book's title")
    } else if (author == "") {
        author = "Unknown";
        addElement(), clearText();
    } else addElement(), clearText();
});

// create visual output for rating system in form
const rating = document.querySelector("#rating");
const output = document.querySelector(".rating-output");

output.textContent = rating.value;

rating.addEventListener("input", () => {
  output.textContent = rating.value;
});




