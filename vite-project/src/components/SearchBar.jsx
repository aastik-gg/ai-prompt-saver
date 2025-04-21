import { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa'; // I use this for the search icon.

const SearchBar = ({ prompts, setFilteredPrompts }) => {
  const [searchQuery, setSearchQuery] = useState(''); // I use this state to store the search query.

  useEffect(() => {
    // I filter prompts based on the search query.
    const filtered = prompts.filter(
      (prompt) =>
        prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prompt.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPrompts(filtered); // I update the filtered prompts.
  }, [searchQuery, prompts, setFilteredPrompts]);

  return (
    <div className="mb-6 relative">
      {/* I display the search icon */}
      <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
      <input
        type="text"
        value={searchQuery} // I bind the search query state to this input.
        onChange={(e) => setSearchQuery(e.target.value)} // I update the search query when the user types.
        placeholder="Search prompts by title or category..."
        className="w-full p-3 pl-10 border border-[#3a1d60] rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3a1d60] transition"
      />
    </div>
  );
};

export default SearchBar; 
