//available show book in library
const books = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self Help",
    available: true,
    image: "image book.webp"
  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    genre: "Finance",
    available: false,
    image: "rich dad poor dad.jpg"
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fiction",
    available: false,
    image: "TheAlchemist.webp"
  },
  {
    title: "bhagwat gita",
    author: "Vyasa",
    genre: "self help",
    available: true,
    image: " shreemaat bhagwatgita.jpg"
  },
];

const container = document.getElementById("booksContainer");

function displayBooks() {
  container.innerHTML = "";

  books.forEach(book => {
    const card = document.createElement("div");
    card.classList.add("book-card");

    card.innerHTML = `
      <img src="${book.image}" alt="Book">
      <h3>${book.title}</h3>
      <p>${book.author}</p>
      <button style="background-color: ${book.available ? 'green' : 'red'}; 
      color:white; padding:8px; border:none;">
      ${book.available ? 'Available' : 'Not Available'}
      </button>
    `;

    container.appendChild(card);
  });
}
displayBooks();


//Title + Author + Genre sab check
