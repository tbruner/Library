let myLibrary = [];

const add_new_book = document.getElementsByClassName("add-new-book");
const add_book = document.querySelector(".add-book");
const modal = document.querySelector(".modal");
const clModal = document.querySelector(".close");
const books_contianer = document.querySelector(".books-container");
const titleErr = document.querySelector(".title-err");
const authorErr = document.querySelector(".author-err");
const form = document.querySelector("form");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleRead = function() {
  this.read = !this.read;
  displayBooks(myLibrary);
}

function addNewBook(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read));

  displayBooks(myLibrary);
}

function displayBooks(library) {
  books_contianer.textContent = '';
  for(let i=0; i < library.length; ++i) {
    const card = document.createElement("div");
    card.className = "card";
    const titleEl = document.createElement("h2");
    titleEl.textContent = library[i]["title"];
    titleEl.className = "title";
    const authorEl = document.createElement("div");
    authorEl.textContent = "by " + library[i]["author"];
    authorEl.className = "author";
    const pagesEl = document.createElement("div");
    pagesEl.textContent = "Pages: " + library[i]["pages"];
    pagesEl.className = "pages";
    const readEl = document.createElement("div");
    readEl.textContent = library[i]["read"] ? "Read" : "Not Read";
    readEl.className = "read";
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    const toggleReadBtn = document.createElement("button");
    toggleReadBtn.textContent = library[i]["read"] ? "I haven't read this" : "I've read this";

    const cardBtns = document.createElement("div");
    cardBtns.className = "card-buttons";

    removeBtn.addEventListener("click", () => {
      myLibrary.splice(i, 1);
      displayBooks(myLibrary);
    });

    toggleReadBtn.addEventListener("click", () => {
      myLibrary[i].toggleRead();
    })

    card.appendChild(titleEl);
    card.appendChild(authorEl);
    card.appendChild(pagesEl);
    card.appendChild(readEl);

    cardBtns.appendChild(removeBtn);
    cardBtns.appendChild(toggleReadBtn);

    card.appendChild(cardBtns);
    books_contianer.appendChild(card);
  }
}

for(let i=0; i < add_new_book.length; ++i) {
  add_new_book[i].addEventListener("click", () => {
    modal.style.display = "block";
  });
}

// when user clicks anywhere outside the modal close it
window.onclick = (event) => {
  if(event.target == modal) {
    modal.style.display = "none";
    titleErr.style.display = 'none';
    authorErr.style.display = 'none';
  }
}

clModal.addEventListener("click", () => {
  console.log("hi");
  modal.style.display = "none";
});

add_book.addEventListener("click", () => {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;
  if(title && author) {
    addNewBook(title, author, pages, read);
    modal.style.display = "none";
    titleErr.style.display = "none";
    authorErr.style.display = "none";
    form.reset();
  }
  else {
    if(!title) titleErr.style.display = "block";
    else titleErr.style.display = "none";
    if(!author) authorErr.style.display = "block";
    else authorErr.style.display = "none";
  }
});