import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import MyProfile from './components/MyProfile '

import './style.css';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
          <li>
              <Link to='/'>Home </Link>
            </li>
            <li>
              <Link to='/my-profile'>My Profile </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-profile" element={<MyProfile />} />

        </Routes>
      </div>
    </Router>
  );
}
