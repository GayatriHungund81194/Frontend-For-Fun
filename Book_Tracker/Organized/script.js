/* ===================================
   BOOK TRACKER - JAVASCRIPT
   All functions for the app
   =================================== */

// ===================================
// INITIALIZE - Get DOM elements
// ===================================

const button = document.getElementById("addBtn");
const input = document.getElementById("bookInput");
const authorInput = document.getElementById("authorInput");
const bookList = document.getElementById("bookList");
const searchInput = document.getElementById("searchInput");

// ===================================
// SEARCH/FILTER FUNCTIONS
// ===================================

/**
 * Search books by name
 * Shows books that match the search term, hides others
 */
function searchBooks(searchTerm) {
  const allBooks = document.querySelectorAll(".bookItem");

  allBooks.forEach(function(bookElement) {
    const bookText = bookElement.textContent.toLowerCase();
    const searchLower = searchTerm.toLowerCase();

    if (bookText.includes(searchLower)) {
      bookElement.style.display = "flex";  // Show
    } else {
      bookElement.style.display = "none";  // Hide
    }
  });
}

// Listen for typing in search box
searchInput.addEventListener("keyup", function() {
  const searchTerm = searchInput.value;
  searchBooks(searchTerm);
});

// ===================================
// LOCAL STORAGE FUNCTIONS
// ===================================

/**
 * Save a book to local storage
 * Keeps data persistent after page refresh
 */
function saveBookToLocalStorage(bookName, authorName, rating) {
  let books = JSON.parse(localStorage.getItem("books")) || [];

  books.push({
    bookName,
    authorName,
    rating
  });

  localStorage.setItem("books", JSON.stringify(books));
}

/**
 * Load all saved books from local storage
 * Runs when page first loads
 */
function loadBooksFromLocalStorage() {
  let books = JSON.parse(localStorage.getItem("books")) || [];
  books.forEach(function(book) {
    displayBook(book.bookName, book.authorName, book.rating);
  });
}

/**
 * Update a book's name in local storage
 * Called when user edits a book
 */
function updateBookInLocalStorage(oldBookName, newBookName) {
  let books = JSON.parse(localStorage.getItem("books")) || [];

  books = books.map(function(book) {
    if (book.bookName === oldBookName) {
      return {
        bookName: newBookName,
        authorName: book.authorName,
        rating: book.rating
      };
    }
    return book;
  });

  localStorage.setItem("books", JSON.stringify(books));
}

/**
 * Delete a book from local storage
 * Called when user clicks delete
 */
function deleteBookFromLocalStorage(bookNameToDelete) {
  let books = JSON.parse(localStorage.getItem("books")) || [];

  books = books.filter(function(book) {
    return book.bookName !== bookNameToDelete;
  });

  localStorage.setItem("books", JSON.stringify(books));
}

// ===================================
// DISPLAY FUNCTIONS
// ===================================

/**
 * Create and display a single book card
 * Handles all the HTML structure and event listeners
 */
function displayBook(bookName, authorName, bookRating) {
  // Main card container
  const bookItem = document.createElement("div");
  bookItem.className = "bookItem";

  // 3D Flipper container
  const flipper = document.createElement("div");
  flipper.className = "flipper";

  // FRONT SIDE - shows book info
  const front = document.createElement("div");
  front.className = "front";

  const bookText = document.createElement("span");
  bookText.textContent = bookName + " by " + authorName + " [Rating: " + bookRating + "/5]";

  // BACK SIDE - shows review placeholder
  const back = document.createElement("div");
  back.className = "back";
  back.textContent = "Your review here";

  // Add front and back to flipper
  flipper.appendChild(front);
  flipper.appendChild(back);

  // Create buttons
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "deleteBtn";

  const updateBtn = document.createElement("button");
  updateBtn.textContent = "Update";
  updateBtn.className = "updateBtn";

  // Group buttons together
  const buttonContainer = document.createElement("div");
  buttonContainer.className = "buttonContainer";
  buttonContainer.appendChild(updateBtn);
  buttonContainer.appendChild(deleteBtn);

  // Add elements to front side
  front.appendChild(bookText);
  front.appendChild(buttonContainer);

  // Add flipper to card
  bookItem.appendChild(flipper);

  // Add card to page
  bookList.appendChild(bookItem);

  // ===================================
  // EVENT LISTENERS FOR THIS CARD
  // ===================================

  /**
   * Delete button - remove book from page and storage
   */
  deleteBtn.addEventListener("click", function() {
    bookItem.remove();
    deleteBookFromLocalStorage(bookName);
  });

  /**
   * Update button - edit book name
   */
  updateBtn.addEventListener("click", function() {
    const editInput = document.createElement("input");
    editInput.type = "text";
    editInput.value = bookText.textContent;

    front.replaceChild(editInput, bookText);
    editInput.focus();

    editInput.addEventListener("keypress", function(event) {
      if (event.key == "Enter") {
        bookText.textContent = editInput.value;
        front.replaceChild(bookText, editInput);

        const newBookName = editInput.value.split(" by ")[0];
        updateBookInLocalStorage(bookName, newBookName);
      }
    });
  });
}

// ===================================
// ADD BOOK FUNCTION
// ===================================

/**
 * Add a new book when user clicks "Add Book" button
 */
button.addEventListener("click", function() {
  const bookName = input.value;
  const authorName = authorInput.value;
  const rating = document.getElementById("ratingInput").value;

  // Only add if all fields are filled
  if (bookName && authorName && rating) {
    displayBook(bookName, authorName, rating);
    saveBookToLocalStorage(bookName, authorName, rating);

    // Clear input boxes
    input.value = "";
    authorInput.value = "";
    document.getElementById("ratingInput").value = "";
  } else {
    alert("Please fill in all fields!");
  }
});

// ===================================
// PAGE LOAD
// ===================================

// Load saved books when page first opens
loadBooksFromLocalStorage();
