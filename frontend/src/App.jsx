import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import BookCyclePage from './components/BookCyclePage';
import Header from './components/Header';
import Category from './components/Category';
import Productsgrid from './components/Productsgrid';
import Footer from './components/Footer';
import Repair from './components/Repair';
import Services from './components/Services';
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
      <Header/>
        <nav className="bg-red-500 text-white p-4">
          <Link to="/" className="mr-4">Home</Link>
          <Link to="/book-cycle">Book Cycle</Link>
        </nav>
        <Services/>
        <div className="p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/book-cycle" element={<BookCyclePage />} />
          </Routes>
        </div>
        <Repair/>
        <Category/>
        <Productsgrid/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
