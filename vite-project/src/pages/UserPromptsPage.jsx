import React, { useState, useEffect, useContext } from 'react';
import PromptContext from '../context/PromptContext';
import PromptCard from '../components/PromptCard';
import { deletePrompt } from '../services/api';

const UserPromptsPage = () => {
  const { prompts, setPrompts } = useContext(PromptContext);
  const [userPrompts, setUserPrompts] = useState([]);

  useEffect(() => {
    const filteredPrompts = prompts.filter(prompt => prompt.isUserAdded);
    setUserPrompts(filteredPrompts);
  }, [prompts]);

  const handleDelete = async (id) => {
    try {
      await deletePrompt(id);
      const updatedPrompts = prompts.filter(prompt => prompt.id !== id);
      setPrompts(updatedPrompts);
    } catch (error) {
      console.error("Error deleting prompt:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-white">Your Prompts</h1>
      {userPrompts.length === 0 ? (
        <p className="text-gray-500">You haven't added any prompts yet.</p>
      ) : (
        userPrompts.map(prompt => (
          <PromptCard key={prompt.id} prompt={prompt} onDelete={handleDelete} />
        ))
      )}
    </div>
  );
};

export default UserPromptsPage;
