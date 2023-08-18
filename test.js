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
    } else if (author == "" && read == "Not Read") {
        myLibrary.push(new Book(title, "Unknown", read, "-"));
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




