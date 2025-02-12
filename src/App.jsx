import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import BookDetails from "./BookDetails.jsx";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import Account from "./Account.jsx";
import Navbar from "./Navbar.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import "./global.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/books" element={<Home />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<PrivateRoute><Account /></PrivateRoute>} />
      </Routes>
    </Router>
  );
}

export default App;

