import './App.css';
import Home from './Home';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SearchPage from './SearchPage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className='app'>
      <Router>
        <Header />

        <Routes>
          
          {/* if we are at search page then render SearchPage */}
          <Route path="/search" element={<SearchPage />} />


          {/* if we are at home page then render Home */}
          <Route path="/" element={<Home />} />
        </Routes>


        <Footer />

      </Router>

      {/* Home */}
      {/* Header */}
      {/* Banner */}
      {/* Search */}
      {/* Cards */}
      {/* Footer */}
    </div>
  );
}

export default App;
