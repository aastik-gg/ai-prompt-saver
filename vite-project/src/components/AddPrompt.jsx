import { useState } from "react";
import { useNavigate } from "react-router-dom"; // I use this to navigate the user after adding a prompt.
import { addPrompt } from "../services/api"; // I call this API function to handle adding a new prompt.

const AddPrompt = () => {
  const [title, setTitle] = useState(""); // I use this state to store the prompt title.
  const [category, setCategory] = useState(""); // I use this state to store the prompt category.
  const [content, setContent] = useState(""); // I use this state to store the prompt content.
  const navigate = useNavigate(); // I use this to redirect the user after submission.

  const handleSubmit = async (e) => {
    e.preventDefault(); // I prevent the default form submission behavior.

    if (!title || !category || !content) {
      alert("Please fill all fields!"); // I alert the user if any field is empty.
      return;
    }

    const newPrompt = { title, category, content, isUserAdded: true }; // I create a new prompt object.
    try {
      await addPrompt(newPrompt); // I call the API to add the new prompt.
      navigate("/"); // I redirect the user to the home page on success.
    } catch (error) {
      console.error("Error adding prompt:", error); // I log any errors that occur.
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-900 via-black to-purple-900 flex justify-center items-center">
      <form
        onSubmit={handleSubmit} // I handle the form submission here.
        className="max-w-3xl w-full p-8 bg-white text-black rounded-lg shadow-xl space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-purple-900">
          Add New Prompt
        </h2>

        <input
          type="text"
          placeholder="Title"
          value={title} // I bind the title state to this input.
          onChange={(e) => setTitle(e.target.value)} // I update the title state when the user types.
          className="w-full p-4 border border-purple-700 rounded bg-gray-100 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <input
          type="text"
          placeholder="Category"
          value={category} // I bind the category state to this input.
          onChange={(e) => setCategory(e.target.value)} // I update the category state when the user types.
          className="w-full p-4 border border-purple-700 rounded bg-gray-100 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <textarea
          placeholder="Prompt content..."
          value={content} // I bind the content state to this textarea.
          onChange={(e) => setContent(e.target.value)} // I update the content state when the user types.
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
