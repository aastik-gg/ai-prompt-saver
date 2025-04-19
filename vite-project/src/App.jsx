import React from 'react';
import { PromptProvider } from './context/PromptContext';
import Navbar from './components/Navbar'; 
import { Routes, Route } from 'react-router-dom'; 
import Home from './pages/Home'; 
import AddPromptPage from './pages/AddPromptPage'; 
import EditPromptPage from './pages/EditPromptPage'; 
import PromptDetail from './pages/PromptDetail'; 
import AllPromptsPage from './pages/AllPromptsPage'; 
import UserPromptsPage from './pages/UserPromptsPage';

function App() {
  return (
    <PromptProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/all-prompts" element={<AllPromptsPage />} /> 
        <Route path="/add-prompt" element={<AddPromptPage />} />
        <Route path="/edit-prompt/:id" element={<EditPromptPage />} />
        <Route path="/prompt/:id" element={<PromptDetail />} />
        <Route path="/user-prompts" element={<UserPromptsPage />} />
      </Routes>
    </PromptProvider>
  );
}

export default App;
