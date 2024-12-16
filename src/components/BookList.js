import React from "react";
import BookCard from "./BookCard";

function BookList({ books }) {
  return (
    <div>
      <h2>Book List</h2>
      <div className="book-list">
        {books.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    </div>
  );
}

export default BookList;
