import React, { useContext, useState } from 'react';
import PromptContext from '../context/PromptContext';
import PromptCard from '../components/PromptCard';
import SearchBar from '../components/SearchBar';
import { deletePrompt } from '../services/api';

const AllPromptsPage = () => {
  const { prompts, loading, setPrompts } = useContext(PromptContext);
  const [filteredPrompts, setFilteredPrompts] = useState(prompts);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleDelete = async (id) => {
    console.log(`Attempting to delete prompt with ID: ${id}`);

    try {
      await deletePrompt(id);
      console.log(`Prompt with ID: ${id} deleted from API`);

      const updatedPrompts = prompts.filter((prompt) => prompt.id !== id);
      setPrompts(updatedPrompts);
      setFilteredPrompts(updatedPrompts);
      console.log(`Prompt with ID: ${id} removed from state`);
    } catch (error) {
      console.error("Error deleting prompt:", error);
    }
  };

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    if (category === "") {
      setFilteredPrompts(prompts);
    } else {
      const filtered = prompts.filter(p => p.category.toLowerCase() === category.toLowerCase());
      setFilteredPrompts(filtered);
    }
  };

  if (loading) return <div className="text-center mt-10 text-white">Loading...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-900 via-black to-purple-800 text-white p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">All Prompts</h2>
      <SearchBar prompts={prompts} setFilteredPrompts={setFilteredPrompts} />

      <div className="mb-6">
        <label className="mr-2 font-medium">Filter by Category:</label>
        <select
          value={selectedCategory}
          onChange={(e) => handleCategoryFilter(e.target.value)}
          className="p-3 border rounded-xl bg-black text-white border-purple-600 focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">All</option>
          {[...new Set(prompts.map(p => p.category))].map((cat, index) => (
            <option key={index} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {filteredPrompts.length === 0 ? (
        <p className="text-gray-400 text-center">No prompts found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredPrompts.map(prompt => (
            <PromptCard key={prompt.id} prompt={prompt} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllPromptsPage;
