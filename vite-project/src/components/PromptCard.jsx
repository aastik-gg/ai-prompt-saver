import React from 'react';
import { Link } from 'react-router-dom'; // I use this for navigation links.
import { Eye, Pencil, Trash2 } from 'lucide-react'; // I use these icons for actions.

const PromptCard = ({ prompt, onDelete }) => {
  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this prompt?")) {
      await onDelete(prompt.id); // I call the delete function if the user confirms.
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-6 mb-6">
      <div className="flex justify-between items-start mb-3">
        <h2 className="text-2xl font-semibold text-gray-800">{prompt.title}</h2>
        <span className="text-xs font-medium px-3 py-1 bg-purple-100 text-purple-600 rounded-full">
          {prompt.category} {/* I display the category of the prompt */}
        </span>
      </div>

      <p className="text-gray-600 mb-4 text-sm leading-relaxed">{prompt.content}</p> {/* I display the prompt content */}

      <div className="flex items-center gap-4 text-sm">
        {/* I link to view the prompt */}
        <Link to={`/prompt/${prompt.id}`} className="flex items-center gap-1 text-blue-600 hover:underline">
          <Eye size={16} /> View
        </Link>
        {/* I link to edit the prompt */}
        <Link to={`/edit-prompt/${prompt.id}`} className="flex items-center gap-1 text-green-600 hover:underline">
          <Pencil size={16} /> Edit
        </Link>
        {/* I show a button to delete the prompt, visible only for user-added prompts */}
        {prompt.isUserAdded && (
          <button
            onClick={handleDelete}
            className="flex items-center gap-1 text-red-500 hover:underline"
          >
            <Trash2 size={16} /> Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default PromptCard; 
