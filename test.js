// Create array called myLibrary
let myLibrary = [];

// Create object constructor to be placed into myLibrary array
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return this.title + " by " + this.author + " is " + this.pages + " pages and I have " + this.read + " this.";
    };
}

//  Create object to be added to myLibrary with click event
document.getElementById("enter-info").addEventListener("click", function() {;

    title = document.getElementById("book-title").value;
    author = document.getElementById("author-name").value;
    pages = document.getElementById("total-pages").value;

    if (document.getElementById("yes").checked) {
        read = "read"
    } else read = "not read";
    myLibrary.push(new Book(title, author, pages, read));
    // document.getElementById("book-content").textContent += title + " by " + author + " is " + pages + " pages and I have " + read + " this."

    // Create new div within click event
    addElement = () => {
        let newDiv = document.createElement("div");
        newContent = document.createTextNode(title + " by " + author + " is " + pages + " pages and I have " + read + " this.");
        newDiv.appendChild(newContent);
        newDiv.setAttribute("id", "book-1");
        let currentDiv = document.getElementById("book-content");
        document.body.insertBefore(newDiv, currentDiv);
    };

    // Clears the text from the form within click event
    clearText = () => {
        document.getElementById("book-title").value = "";
        document.getElementById("author-name").value = "";
        document.getElementById("total-pages").value = "";
        document.getElementById("yes").checked = false;
        document.getElementById("no").checked = false;
    }

    if (title == "" || author == "" || pages == "") {
        alert("Please fill out all information")
    } else addElement(), clearText();

    });




