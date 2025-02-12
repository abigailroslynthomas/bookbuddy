import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useGetUserQuery } from "./userSlice.js";
import { logout } from "./authSlice.js";
import { useNavigate } from "react-router-dom";
import "./Account.css";

const Account = () => {
  const user = useSelector((state) => state.auth.user);
  const { data: userData, error, isLoading } = useGetUserQuery(user?.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!user) return <p>You must be logged in to view this page.</p>;
  if (isLoading) return <p>Loading account details...</p>;
  if (error) return <p>Error fetching user data.</p>;

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="account-container">
      <h2>My Account</h2>
      <p><strong>Name:</strong> {userData.name}</p>
      <p><strong>Email:</strong> {userData.email}</p>

      <h3>Checked-Out Books</h3>
      {userData.checkedOutBooks.length > 0 ? (
        <ul>
          {userData.checkedOutBooks.map((book) => (
            <li key={book.id}>
              <p><strong>{book.title}</strong> by {book.author}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>You have no books checked out.</p>
      )}

      <button className="logout-btn" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Account;
