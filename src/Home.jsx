import React, { useState } from "react";
import { useGetBooksQuery } from "./bookSlice.js";
import { Link } from "react-router-dom";

const Home = () => {
  const { data: books, error, isLoading } = useGetBooksQuery();
  const [searchTerm, setSearchTerm] = useState("");

  if (isLoading) return <p>Loading books...</p>;
  if (error) return <p>Error loading books!</p>;
  console.log(books);

  // Filter books based on search input
  const filteredBooks =books ? books.books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  ): null;

  return (
    <div>
      <h1>Book Catalog</h1>
      <input
        type="text"
        placeholder="Search books..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      <ul>
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <li key={book.id}>
              <Link to={`/books/${book.id}`}>{book.title}</Link> by {book.author}
            </li>
          ))
        ) : (
          <p>No books found.</p>
        )}
      </ul>
    </div>
  );
};

export default Home;
