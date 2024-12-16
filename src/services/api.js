// This file contains mock functions for API calls.

export const getBooks = async () => {
    return [
      { title: "1984", author: "George Orwell" },
      { title: "To Kill a Mockingbird", author: "Harper Lee" },
      { title: "Pride and Prejudice", author: "Jane Austen" },
    ];
  };
  
  export const addBook = async (book) => {
    console.log("Book added: ", book);
  };
  