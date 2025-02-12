import React from "react";
import { useParams } from "react-router-dom";
import { useGetBookByIdQuery, useCheckoutBookMutation, useReturnBookMutation } from "./bookSlice.js";
import { useSelector } from "react-redux";
import "./BookDetails.css";

const BookDetails = () => {
  const { id } = useParams();
  const { data: book, error, isLoading } = useGetBookByIdQuery(id);
  const [checkoutBook] = useCheckoutBookMutation();
  const [returnBook] = useReturnBookMutation();
  const user = useSelector((state) => state.auth.user);

  if (isLoading) return <p>Loading book details...</p>;
  if (error) return <p>Error fetching book details!</p>;

  const handleCheckout = async () => {
    if (!user) {
      alert("You must be logged in to check out a book.");
      return;
    }
    await checkoutBook(book.id).unwrap();
    alert("Book checked out successfully!");
  };

  const handleReturn = async () => {
    if (!user) {
      alert("You must be logged in to return a book.");
      return;
    }
    await returnBook(book.id).unwrap();
    alert("Book returned successfully!");
  };

  return (
    <div className="book-details">
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Availability:</strong> {book.available ? "Available" : "Checked Out"}</p>

      {book.available ? (
        <button onClick={handleCheckout}>Checkout Book</button>
      ) : (
        <button onClick={handleReturn}>Return Book</button>
      )}
    </div>
  );
};

export default BookDetails;
