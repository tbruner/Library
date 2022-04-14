let myLibrary = [];
const add_new_book = document.querySelector(".add-new-book");
const add_book = document.querySelector(".add-book");
const modal = document.querySelector(".modal");
const clModal = document.querySelector(".close");
const books_contianer = document.querySelector(".books-container");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addNewBook(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read));
  const card = document.createElement("div");
  const titleEl = document.createElement("div");
  titleEl.textContent = title;
  const authorEl = document.createElement("div");
  authorEl.textContent = author;
  const pagesEl = document.createElement("div");
  pagesEl.textContent = "Pages: " + pages;
  const readEl = document.createElement("div");
  readEl.textContent = read ? "Read" : "Not Read";
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  card.appendChild(titleEl);
  card.appendChild(authorEl);
  card.appendChild(pagesEl);
  card.appendChild(readEl);
  card.appendChild(removeBtn);
  books_contianer.appendChild(card);
}

add_new_book.addEventListener("click", () => {
  modal.style.display = "block";
});

// when user clicks anywhere outside the modal close it
window.onclick = (event) => {
  if(event.target == modal) {
    modal.style.display = "none";
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
  addNewBook(title, author, pages, read);
  modal.style.display = "none";
});

