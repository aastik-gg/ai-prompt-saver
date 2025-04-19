import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addPrompt } from "../services/api";

const AddPrompt = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !category || !content) {
      alert("Please fill all fields!");
      return;
    }

    const newPrompt = { title, category, content, isUserAdded: true };
    try {
      await addPrompt(newPrompt);
      navigate("/");
    } catch (error) {
      console.error("Error adding prompt:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-900 via-black to-purple-900 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl w-full p-8 bg-white text-black rounded-lg shadow-xl space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-purple-900">
          Add New Prompt
        </h2>

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-4 border border-purple-700 rounded bg-gray-100 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-4 border border-purple-700 rounded bg-gray-100 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <textarea
          placeholder="Prompt content..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-4 border border-purple-700 rounded bg-gray-100 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 min-h-[120px]"
        />

        <button
          type="submit"
          className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 px-6 rounded w-full hover:bg-gradient-to-l hover:from-purple-700 hover:to-blue-600 transition"
        >
          Add Prompt
        </button>
      </form>
    </div>
  );
};

export default AddPrompt;
