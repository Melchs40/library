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

    // inserts new table rows into table
    insertTable = () => {

        let table = document.getElementById("table-data");
        table.innerHTML = "";
        let tr = "";

        myLibrary.forEach(x => {
           tr += "<tr>";
           tr += "<td>" + x.title + "</td>" + "<td>" + x.author + "</td>" + "<td>" + x.read+ "</td>" + "<td>" + x.rating + "</td>";
           tr +='</tr>'
        });

        table.innerHTML += tr;

        let bookCells = document.querySelectorAll("td:nth-child(1)");
        for(var i = 0 ; i < bookCells.length ; i++) {
            bookCells[i].classList.add("book");
        }

        let authorCells = document.querySelectorAll("td:nth-child(2)");
        for(var i = 0 ; i < authorCells.length ; i++) {
            authorCells[i].classList.add("author");
        }

        let readCells = document.querySelectorAll("td:nth-child(3)");
        for(var i = 0 ; i < readCells.length ; i++) {
            readCells[i].classList.add("read");
        }

        let ratingCells = document.querySelectorAll("td:nth-child(4)");
        for(var i = 0 ; i < ratingCells.length ; i++) {
            ratingCells[i].classList.add("rating");
        }
    };

    // clears the text from the form within click event
    clearText = () => {
        document.getElementById("book-title").value = "";
        document.getElementById("author-name").value = "";
        document.getElementById("rating").value = 3;
        document.querySelector(".rating-output").value = 3;
    }
    // creates alert on no title, adds unknown to author when missing, blank rating when not read
    if (title == "") {
        alert("Title necessary, please enter the book's title")
    } else if (author == "" && read == "Not Read") {
        myLibrary.push(new Book(title, "Unknown", read, "-"));
        insertTable(), clearText();
    } else if (author == "") {
        myLibrary.push(new Book(title, "Unknown", read, rating));
        insertTable(), clearText();
    } else if (read == "Not Read") {
        myLibrary.push(new Book(title, author, read, "-"));
        insertTable(), clearText();
    } else myLibrary.push(new Book(title, author, read, rating)), insertTable(), clearText();
});

// create visual output for rating system in form
const rating = document.querySelector("#rating");
const output = document.querySelector(".rating-output");

output.textContent = rating.value;

rating.addEventListener("input", () => {
  output.textContent = rating.value;
});