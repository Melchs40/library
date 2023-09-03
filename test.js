// create array called myLibrary
let myLibrary = [];


// create object constructor to be placed into myLibrary array
function Book(title, author, read, rating) {
    this.title = title
    this.author = author
    this.read = read
    this.rating = rating

    Object.prototype.changeStatus = function() {

        if (this.read == "Read") {
            this.read = "Not Read";
        } else this.read = "Read"
    }
}


// create function on Book prototype
Book.prototype.info = function() {
    return this.title + " by " + this.author + ", I have " + this.read + " this, and rated it " + this.rating + " out of five.";
};


//  create object to be added to myLibrary with click event
document.getElementById("enter-info").addEventListener("click", function() {

    let title = document.getElementById("book-title").value;
    let author = document.getElementById("author-name").value;
    let read = document.getElementById("read").value;
    let rating = document.getElementById("rating").value;

    // insert new table rows into table
    function insertTable () {
        let table = document.getElementById("table-data");

        for(let i = [myLibrary.length -1]; i < myLibrary.length; i++) {
            let row = table.insertRow(i);
            row.id = "row-" + i;
            row.insertCell(0).innerHTML = myLibrary[i].title;
            row.insertCell(1).innerHTML = myLibrary[i].author;
            row.insertCell(2).innerHTML = "";
            row.insertCell(3).innerHTML = myLibrary[i].rating;
            row.insertCell(4).innerHTML = "";
        }
        
        // add class to each new cell in table
        let bookCells = document.querySelectorAll("td:nth-child(1)");
        for(let i = 0 ; i < bookCells.length ; i++) {
            bookCells[i].classList.add("book");
        }

        let authorCells = document.querySelectorAll("td:nth-child(2)");
        for(let i = 0 ; i < authorCells.length ; i++) {
            authorCells[i].classList.add("author");
        }

        let readCells = document.querySelectorAll("td:nth-child(3)");
        for(let i = 0 ; i < readCells.length ; i++) {
            readCells[i].classList.add("read");
        }

        let ratingCells = document.querySelectorAll("td:nth-child(4)");
        for(let i = 0 ; i < ratingCells.length ; i++) {
            ratingCells[i].classList.add("rating");
        }

        let deleteCells = document.querySelectorAll("td:nth-child(5)");
        for(let i = 0 ; i < deleteCells.length ; i++) {
            deleteCells[i].classList.add("delete");
        }
    }

    // clears the text from the form within click event
    clearText = () => {
        document.getElementById("book-title").value = "";
        document.getElementById("author-name").value = "";
        document.getElementById("read").selectedIndex = 0;
        document.getElementById("rating").value = 3;
        document.querySelector(".rating-output").value = 3;
    }

    // inserts delete button and adds id
    insertButton = () => {
        let lastRow = document.getElementsByClassName("delete");
        let lastRowArr = Array.from(lastRow);
        let newButton = document.createElement("button");
        newButton.textContent = "Delete";
        newButton.classList.add("delete-button");

        for (let i = 0; i < myLibrary.length; i++) {
            newButton.setAttribute("id", "delete-" + i);
        }

        lastRowArr.forEach((lastRow) => lastRow.appendChild(newButton))
        
        //adds delete button functionality
        newButton.addEventListener("click", event => {
            let readButtons = document.querySelectorAll(".read-button");
            let readButtonsArr = Array.from(readButtons);
            let index = 7;
            readButtonsArr.splice(newButton.id.slice(index), 1);
            let table = document.getElementById("table-data");
            table.deleteRow(newButton.id.slice(index));
            myLibrary.splice(newButton.id.slice(index), 1);
            
            for (let i = 0; i < myLibrary.length; i++) {
                document.getElementsByClassName("delete-button")[i].setAttribute("id", "delete-" + i);
                document.getElementsByClassName("read-button")[i].setAttribute("id", i);
                let button = readButtonsArr[i];
                button.removeEventListener("click", function() {

                    let textContent = button.textContent;
                    if (textContent === "Read") {
                        button.textContent = "Not Read";
                        let newRating = document.querySelectorAll(".rating");
                        let newRatingArr = Array.from(newRating);
                        newRatingArr[readButtons[i].id].textContent = "-";
                        myLibrary[readButtons[i].id].changeStatus();
                        myLibrary[readButtons[i].id].rating = "-";
                        console.log(myLibrary);
    
                    } else {
                        let newRating = document.querySelectorAll(".rating");
                        let newRatingArr = Array.from(newRating);
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
                        });
    
                        confirmBtn.addEventListener("click", (event) => {
                            event.preventDefault();
                            readDialog.close(selectEl.value);
                            setTimeout(function() {
                              myLibrary[readButtons[i].id].changeStatus();  
                            }, 0);
                            setTimeout(function() {
                                button.textContent = "Read";
                            }, 1);
                        });
                    }
                });
            };
        
            let tableRows = document.getElementById("table-data").children;
            for (let i = 0; i < tableRows.length; i++) {
                let tableChild = tableRows[i];
                tableChild.setAttribute("id", "row-" + i);
            }
        });
    }

    // inserts read button and adds id
    insertRead = () => {
        let readRow = document.querySelectorAll(".read");
        let readButton = document.createElement("button");
        readButton.classList.add("read-button");
       
        readRow.forEach((readRow) => readRow.appendChild(readButton));

        // for (let i = 0; i < myLibrary.length; i++)  {
        //     let readClass = document.getElementsByClassName("read-button");
        //     readClass[i].textContent = myLibrary[i].read;
        //     readClass[i].setAttribute("id", "read-" + i);
        //     // readClass[i].addEventListener("click", e => myLibrary[i].changeStatus());
        //     document.querySelectorAll(".read-button").forEach(button => {
        //         button.addEventListener("click", function () {
        //         if (button.textContent == "Not Read") {
        //            button.textContent = "Read";
        //             console.log("success");
        //             myLibrary[button.id].changeStatus();
        //         } else button.textContent = "Not Read", myLibrary[button.id].changeStatus();
        //     })});
        // };
        let readButtons = document.querySelectorAll(".read-button");
        let readButtonsArr = Array.from(readButtons);

        for (let i = [readButtons.length -1]; i < readButtons.length; i++) {
            let button = readButtonsArr[i];
            button.setAttribute("id", i);
            button.textContent = myLibrary[i].read;
            
            button.addEventListener("click", function() {

                let textContent = button.textContent;
                if (textContent === "Read") {
                    button.textContent = "Not Read";
                    let newRating = document.querySelectorAll(".rating");
                    let newRatingArr = Array.from(newRating);
                    newRatingArr[readButtons[i].id].textContent = "-";
                    myLibrary[readButtons[i].id].changeStatus();
                    myLibrary[readButtons[i].id].rating = "-";
                    console.log(myLibrary);

                } else {
                    let newRating = document.querySelectorAll(".rating");
                    let newRatingArr = Array.from(newRating);
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
                    });

                    confirmBtn.addEventListener("click", (event) => {
                        event.preventDefault();
                        readDialog.close(selectEl.value);
                        setTimeout(function() {
                          myLibrary[readButtons[i].id].changeStatus();  
                        }, 0);
                        setTimeout(function() {
                            button.textContent = "Read";
                        }, 1);
                    });
                }
            });
          }
    }


    // creates alert on no title, adds unknown to author when missing, blank rating when not read
    if (title == "") {
        alert("Title necessary, please enter the book's title")
    } else if (author == "" && read == "Not Read") {
        myLibrary.push(new Book(title, "Unknown", read, "-"));
        insertTable(), insertButton(), clearText(), insertRead();
    } else if (author == "") {
        myLibrary.push(new Book(title, "Unknown", read, rating));
        insertTable(), insertButton(), clearText(), insertRead();
    } else if (read == "Not Read") {
        myLibrary.push(new Book(title, author, read, "-"));
        insertTable(), insertButton(), clearText(), insertRead();
    } else myLibrary.push(new Book(title, author, read, rating)), insertTable(), insertButton(), clearText(), insertRead();
});

// create visual output for rating system in form
const rating = document.querySelector("#rating");
const output = document.querySelector(".rating-output");

output.textContent = rating.value;

rating.addEventListener("input", () => {
  output.textContent = rating.value;
});

[...document.querySelectorAll(".delete-button")].forEach(function(btn) {
    btn.addEventListener("click", function() {
      console.log("hello");
    });
});