import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";
import SearchBar from "./components/SearchBar";
import { getBooks, addBook } from "./services/api";

function App() {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getBooks().then((data) => setBooks(data));
  }, []);

  const handleAddBook = (book) => {
    addBook(book).then(() => {
      setBooks([...books, book]);
    });
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Header />
      <SearchBar onSearch={handleSearch} />
      <AddBook onAdd={handleAddBook} />
      <BookList books={filteredBooks} />
    </div>
  );
}

export default App;
