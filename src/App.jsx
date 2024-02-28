import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CreateUserPage } from './components/CreateUserPage';
import { UserPage } from './components/UserPage';
import { MoviePage } from './components/MoviePage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/user" element={<UserPage />} />
        <Route path="/movie" element={<MoviePage />} />
        <Route path="/" element={<CreateUserPage />} />
      </Routes>
    </Router>
  );
}

export default App;
