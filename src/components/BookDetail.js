import React from "react";

function BookDetail({ book }) {
  if (!book) return <p>Select a book to view its details.</p>;

  return (
    <div>
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
    </div>
  );
}

export default BookDetail;
