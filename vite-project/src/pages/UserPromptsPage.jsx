import React, { useState, useEffect, useContext } from 'react';
import PromptContext from '../context/PromptContext';
import PromptCard from '../components/PromptCard';
import { deletePrompt } from '../services/api';

const UserPromptsPage = () => {
  const { prompts, setPrompts } = useContext(PromptContext); // I get prompts and the function to update them from the context.
  const [userPrompts, setUserPrompts] = useState([]); // I use this state to store prompts added by the user.

  useEffect(() => {
    const filteredPrompts = prompts.filter(prompt => prompt.isUserAdded); // I filter prompts to show only user-added ones.
    setUserPrompts(filteredPrompts); // I update the state with the filtered prompts.
  }, [prompts]);

  const handleDelete = async (id) => {
    try {
      await deletePrompt(id); // I delete the prompt from the API.
      const updatedPrompts = prompts.filter(prompt => prompt.id !== id); // I remove the deleted prompt from the state.
      setPrompts(updatedPrompts); // I update the global prompts state.
    } catch (error) {
      console.error("Error deleting prompt:", error); // I log any errors that occur.
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-white">Your Prompts</h1>
      {userPrompts.length === 0 ? (
        <p className="text-gray-500">You haven't added any prompts yet.</p> // I show a message if no user prompts exist. 
      ) : (
        userPrompts.map(prompt => (
          <PromptCard key={prompt.id} prompt={prompt} onDelete={handleDelete} /> // I render a card for each user-added prompt.
        ))
      )}
    </div>
  );
};

export default UserPromptsPage; 
