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
    
    // myLibrary.push(new Book(title, author, read, rating));

    // create new div within click event
    // addElement = () => {
    //     let newDiv = document.createElement("div");
    //     newContent = document.createTextNode("Title: " + title + "\n" + "Author: " + author + "\n" + "Rating: " + rating + "\n" + "Read/Not Read: " + read);
    //     newDiv.appendChild(newContent);
    //     newDiv.classList.add("book-div");
    //     let currentDiv = document.getElementById("content-div");
    //     document.body.insertBefore(newDiv, currentDiv);
    // };

    insertTable = () => {
        let table = document.getElementById("table-data");
        table.innerHTML="";
        let tr="";
        myLibrary.forEach(x=>{
           tr+='<tr>';
           tr+='<td>'+x.title+'</td>'+'<td>'+x.author+'</td>'+'<td>'+x.read+'</td>'+'<td>'+x.rating+'</td>'
           tr+='</tr>'
      
        })
        table.innerHTML+=tr;
      }

    // clears the text from the form within click event
    clearText = () => {
        document.getElementById("book-title").value = "";
        document.getElementById("author-name").value = "";
        document.getElementById("rating").value = 3;
        document.querySelector(".rating-output").value = 3;
    }
    // creates alert on no title, adds unknown to author when missing
    if (title == "") {
        alert("Title necessary, please enter the book's title")
    } else if (author == "") {
        myLibrary.push(new Book(title, "Unknown", read, rating));
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






insertTable = () => {

    let table = document.getElementById("table-data");
    table.innerHTML = "";
    let tr = "";

    myLibrary.forEach(x => {
       tr += "<tr>";
       tr += "<td>" + x.title + "</td>" + "<td>" + x.author + "</td>" + "<td>" + "<button class='read-button'>" + x.read + "</button>" + "</td>" + "<td>" + x.rating + "</td>";
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