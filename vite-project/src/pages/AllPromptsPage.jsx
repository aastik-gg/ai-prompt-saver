import React, { useContext, useState } from 'react';
import PromptContext from '../context/PromptContext';
import PromptCard from '../components/PromptCard';
import SearchBar from '../components/SearchBar';
import { deletePrompt } from '../services/api';

const AllPromptsPage = () => {
  const { prompts, loading, setPrompts } = useContext(PromptContext); // I get prompts and loading state from the context.
  const [filteredPrompts, setFilteredPrompts] = useState(prompts); // I use this state to manage filtered prompts.
  const [selectedCategory, setSelectedCategory] = useState(""); // I use this state to track the selected category.

  const handleDelete = async (id) => {
    try {
      await deletePrompt(id); // I delete the prompt from the API.
      const updatedPrompts = prompts.filter((prompt) => prompt.id !== id); // I remove the deleted prompt from the state.
      setPrompts(updatedPrompts);
      setFilteredPrompts(updatedPrompts);
    } catch (error) {
      console.error("Error deleting prompt:", error); // I log any errors that occur.
    }
  };

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category); // I update the selected category.
    if (category === "") {
      setFilteredPrompts(prompts); // I reset to all prompts if no category is selected.
    } else {
      const filtered = prompts.filter(p => p.category.toLowerCase() === category.toLowerCase());
      setFilteredPrompts(filtered); // I filter prompts by the selected category.
    }
  };

  if (loading) return <div className="text-center mt-10 text-white">Loading...</div>; // I show a loading message while data is being fetched.

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-900 via-black to-purple-800 text-white p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">All Prompts</h2>
      <SearchBar prompts={prompts} setFilteredPrompts={setFilteredPrompts} /> {/* I include a search bar for filtering prompts. */}

      <div className="mb-6">
        <label className="mr-2 font-medium">Filter by Category:</label>
        <select
          value={selectedCategory}
          onChange={(e) => handleCategoryFilter(e.target.value)} // I handle category selection.
          className="p-3 border rounded-xl bg-black text-white border-purple-600 focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">All</option>
          {[...new Set(prompts.map(p => p.category))].map((cat, index) => (
            <option key={index} value={cat}>{cat}</option> // I dynamically generate category options.
          ))}
        </select>
      </div>

      {filteredPrompts.length === 0 ? (
        <p className="text-gray-400 text-center">No prompts found.</p> // I show a message if no prompts match the filter.
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredPrompts.map(prompt => (
            <PromptCard key={prompt.id} prompt={prompt} onDelete={handleDelete} /> // I render a card for each filtered prompt.
          ))}
        </div>
      )}
    </div>
  );
};

export default AllPromptsPage;
