import { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ prompts, setFilteredPrompts }) => {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const filtered = prompts.filter(
      (prompt) =>
        prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prompt.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPrompts(filtered);
  }, [searchQuery, prompts, setFilteredPrompts]);

  return (
    <div className="mb-6 relative">
      <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" /> 
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search prompts by title or category..."
        className="w-full p-3 pl-10 border border-[#3a1d60] rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3a1d60] transition"
      />
    </div>
  );
};

export default SearchBar;
