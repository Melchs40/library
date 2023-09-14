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




















let newRating = document.querySelectorAll(".rating");
            let newRatingArr = Array.from(newRating);
            
            button.addEventListener("click", function() {

                let textContent = button.textContent;
                if (textContent === "Read") {
                    button.textContent = "Not Read";
                    newRatingArr[readButtons[i].id].textContent = "-";
                    myLibrary[readButtons[i].id].changeStatus();
                    myLibrary[readButtons[i].id].rating = "-";
                    console.log(myLibrary);

                } else {
                    let readDialog = document.getElementById("readDialog");
                    let selectEl = readDialog.querySelector("select");
                    let confirmBtn = readDialog.querySelector("#confirmBtn");

                    readDialog.showModal();

                    selectEl.addEventListener("change", (e) => {
                        confirmBtn.value = selectEl.value;
                      });

                    readDialog.addEventListener("close", (e) => {
                        newRatingArr[readButtons[i].id].textContent =
                            readDialog.returnValue === "default"
                            ? "-"
                            : readDialog.returnValue;
                        selectEl.value = "default";
                    });

                    confirmBtn.addEventListener("click", (event) => {
                        event.preventDefault();
                        myLibrary[readButtons[i].id].changeStatus();
                        readDialog.close(selectEl.value);
                        myLibrary[readButtons[i].id].rating = readDialog.returnValue;  
                        button.textContent = "Read";
                        selectEl.value = "default";
                    });
                }
                button.removeEventListener("click", this);
            });








            createNewRating = () => {

                let readButtons = document.querySelectorAll(".read-button");
                let readButtonsArr = Array.from(readButtons);
                let newRating = document.querySelectorAll(".rating");
                let newRatingArr = Array.from(newRating);
        
                for (let i = 0; i < readButtonsArr.length; i++) {
                    readButtonsArr[i].addEventListener("click", function() {
                        let button = readButtonsArr[i];
                        let textContent = button.textContent;
                        if (textContent === "Read") {
                            button.textContent = "Not Read";
                            newRatingArr[i].textContent = "-";
                            myLibrary[i].changeStatus();
                            myLibrary[i].rating = "-";
                            console.log(myLibrary);
        
                        } else {
                            let readDialog = document.getElementById("readDialog");
                            let selectEl = readDialog.querySelector("select");
                            let confirmBtn = readDialog.querySelector("#confirmBtn");
        
                            readDialog.showModal();
        
                            selectEl.addEventListener("change", (e) => {
                                confirmBtn.value = selectEl.value;
                              });
        
                            readDialog.addEventListener("close", (e) => {
                                newRatingArr[i].textContent =
                                    readDialog.returnValue === "default"
                                    ? "-"
                                    : readDialog.returnValue;
                                selectEl.value = "default";
                            });
        
                            confirmBtn.addEventListener("click", (event) => {
                                event.preventDefault();
                                myLibrary[i].changeStatus();
                                readDialog.close(selectEl.value);
                                myLibrary[i].rating = readDialog.returnValue;  
                                button.textContent = "Read";
                                selectEl.value = "default";
                            });
                        }
                    })
                }
            }







            readButton.addEventListener("click", function(event) {
                let button = event.target;
                let newRating = document.querySelectorAll(".rating");
                let newRatingArr = Array.from(newRating);
                let id = button.getAttribute("id");
                let textContent = button.textContent;
                if (textContent === "Read") {
                    button.textContent = "Not Read";
                    newRatingArr[id].textContent = "-";
                    myLibrary[id].changeStatus();
                    myLibrary[id].rating = "-";
                    console.log(myLibrary);

                } else {
                    let readDialog = document.getElementById("readDialog");
                    let selectEl = readDialog.querySelector("select");
                    let confirmBtn = readDialog.querySelector("#confirmBtn");

                    readDialog.showModal();

                    selectEl.addEventListener("change", (e) => {
                        confirmBtn.value = selectEl.value;
                      });

                    readDialog.addEventListener("close", (e) => {
                        myLibrary[id].read = "Read";
                        button.textContent = "Read";
                        selectEl.value = "default";
                        myLibrary[id].rating =
                            readDialog.returnValue === "default"
                            ? "-"
                            : readDialog.returnValue;
                        document.querySelectorAll(".rating").item(readButton[i]).textContent = readDialog.returnValue;
                        e.stopPropagation;
                    });

                    confirmBtn.addEventListener("click", (event) => {
                        event.preventDefault();
                        readDialog.close(selectEl.value);
                        
                        // myLibrary[id].changeStatus();
                        // myLibrary[id].rating = readDialog.returnValue;  
                        // button.textContent = "Read";
                        // selectEl.value = "default";
                        
                    });
                button.removeEventListener("click", this);
                }
                
            });








             // inserts read button and adds id
    insertRead = () => {
        let readRow = document.querySelectorAll(".read");
        let readButton = document.createElement("button");
        readButton.classList.add("read-button");
       
        readRow.forEach((readRow) => readRow.appendChild(readButton));

        let readButtons = document.querySelectorAll(".read-button");
        let readButtonsArr = Array.from(readButtons);

        for (let i = [readButtons.length -1]; i < readButtons.length; i++) {
            let button = readButtonsArr[i];
            button.setAttribute("id", i);
            button.textContent = myLibrary[i].read;
        };
    };

    changeRead = () => { 

        let readButtons = document.querySelectorAll(".read-button");
        let readButtonsArr = Array.from(readButtons);

        readButtons.forEach((readButton) => {
            readButton.addEventListener("click", function(event) {
                let thisThing = event.target
                let newRating = document.querySelectorAll(".rating");
                let newRatingArr = Array.from(newRating);
              
                if (readButton.textContent === "Read") {
                    readButton.textContent = "Not Read";
                    newRatingArr[readButton.id].textContent = "-";
                    myLibrary[readButton.id].changeStatus();
                    myLibrary[readButton.id].rating = "-";
                    console.log(thisThing);

                } else {
                    let readDialog = document.getElementById("readDialog");
                    let selectEl = readDialog.querySelector("select");
                    let confirmBtn = readDialog.querySelector("#confirmBtn");

                    readDialog.showModal();

                    selectEl.addEventListener("change", (e) => {
                        confirmBtn.value = selectEl.value;
                      });

                    readDialog.addEventListener("close", (e) => {
                       
                    });

                    confirmBtn.addEventListener("click", (event) => {
                        event.preventDefault();
                        readDialog.close(selectEl.value);
                        myLibrary[readButton.id].read = "Read";
                        readButton.textContent = "Read";
                        selectEl.value = "default";
                        myLibrary[readButton.id].rating = readDialog.returnValue;
                        newRatingArr[readButton.id].textContent =
                            readDialog.returnValue === "default"
                            ? "-"
                            : readDialog.returnValue;
                        if (myLibrary[readButton.id].rating === "default") {
                            myLibrary[readButton.id].rating = "-";
                        }
                        console.log(thisThing);
                        event.stopImmediatePropagation;
                    });
                
                }
            
            });
        });
    }