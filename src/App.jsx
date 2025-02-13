import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import BookDetails from "./BookDetails.jsx";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import Account from "./Account.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import "./global.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/books" />} />
        <Route path="/books" element={<Home />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<PrivateRoute><Account /></PrivateRoute>} />
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>
    </>
  );
}

export default App;
