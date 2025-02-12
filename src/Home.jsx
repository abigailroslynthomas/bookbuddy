import React from "react";
import { useGetBooksQuery } from "./bookSlice.js";
import { Link } from "react-router-dom";

const Home = () => {
  const { data: books, error, isLoading } = useGetBooksQuery();

  if (isLoading) return <p>Loading books...</p>;
  if (error) return <p>Error loading books!</p>;

  return (
    <div>
      <h1>Book Catalog</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <Link to={`/books/${book.id}`}>{book.title}</Link> by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
