import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import AddPromptPage from './pages/AddPromptPage';
import EditPromptPage from './pages/EditPromptPage';
import PromptDetail from './pages/PromptDetail';
import Navbar from './components/Navbar';

function App() {
  

  return (
    <Router>
      <div className="App">
        <Navbar />

       
        <div className="container mx-auto mt-6">
          <Routes>
            <Route 
              path="/" 
              element={<Home />} 
            />

            <Route 
              path="/add-prompt" 
              element={<AddPromptPage />} 
            />

            <Route 
              path="/edit-prompt/:id" 
              element={<EditPromptPage />} 
            />

            <Route 
              path="/prompt/:id" 
              element={<PromptDetail/>} 
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
