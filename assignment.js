// my books
const books = [
  {
    title: "The Darkest Minds",
    author: "Alexandra Bracken",
    pages: 496,
    year: 2012,
    genre: "Young Adult"
  },
  {
    title: "Smile",
    author: "Raina Telgemeier",
    pages: 224,
    year: 2010,
    genre: "Autobiography"
  },
  {
    title: "The Hate U Give",
    author: "Angie Thomas",
    pages: 444,
    year: 2017,
    genre: "Young Adult"
  },
  {
    title: "The Hunger Games",
    author: "Suzanne Collins",
    pages: 374,
    year: 2008,
    genre: "Science Fiction"
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    pages: 540,
    year: 1965,
    genre: "Science Fiction"
  },
  {
    title: "They Both Die at the End",
    author: "Adam Silvera",
    pages: 384,
    year: 2017,
    genre: "Young Adult"
  },
  {
    title: "Coraline",
    author: "Neil Gaiman",
    pages: 208,
    year: 2002,
    genre: "Dark Fantasy"
  },
  {
    title: "Gone Girl",
    author: "Gillian Flynn",
    pages: 422,
    year: 2012,
    genre: "Mystery"
  }
];

function render(booksToRender) {

  document.getElementById("book-list").innerHTML =
    booksToRender.map(book => `
          <div class="book">
            <h2>${book.title}</h2>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Year: ${book.year}</p>
            <p>Genre: ${book.genre}</p>
          </div>
        `).join("");

  document.getElementById("count").textContent =
    `Showing ${booksToRender.length} of ${books.length} books`;
}

//sorting the books by their title
function sortByTitle() {
  const sortedBooks = [...books].sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  render(sortedBooks);
}

//to sort the books by their amount of pages
function sortByPages() {
  const sortedBooks = [...books].sort((a, b) =>
    a.pages - b.pages
  );

  render(sortedBooks);
}

//sorts th ebooks by their year
function sortByYear() {
  const sortedBooks = [...books].sort((a, b) =>
    a.year - b.year
  );

  render(sortedBooks);
}

//filters the books by their genre
function filterBooks() {
  const selectedGenre = document.getElementById("genre").value;

  const filteredBooks = books
    .filter(book =>
      selectedGenre === "All" || book.genre === selectedGenre
    )
    .sort((a, b) =>
      a.title.localeCompare(b.title)
    );

  render(filteredBooks);
}

render(books);
