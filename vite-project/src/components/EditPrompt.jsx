import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // I use this to get the prompt ID and navigate after editing.
import { getPromptById, updatePrompt } from "../services/api"; // I call these API functions to fetch and update the prompt.
import toast from "react-hot-toast"; // I use this to show success or error messages.
import { motion } from "framer-motion"; // I use this for animations.

const EditPrompt = () => {
  const { id } = useParams(); // I get the prompt ID from the URL.
  const navigate = useNavigate(); // I navigate the user after updating the prompt.
  const [prompt, setPrompt] = useState({
    title: "",
    description: "",
    content: "",
    category: "",
  }); // I store the prompt details in this state.

  useEffect(() => {
    const fetchPrompt = async () => {
      try {
        const data = await getPromptById(id); // I fetch the prompt data by its ID.
        setPrompt(data); // I update the state with the fetched data.
      } catch (error) {
        toast.error("Failed to load prompt"); // I show an error message if the fetch fails.
      }
    };
    fetchPrompt();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPrompt({ ...prompt, [name]: value }); // I update the corresponding field in the state.
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // I prevent the default form submission behavior.

    if (!prompt.title || !prompt.content || !prompt.category) {
      toast.error("Please fill all required fields"); // I show an error if required fields are empty.
      return;
    }

    try {
      await updatePrompt(id, prompt); // I call the API to update the prompt.
      toast.success("Prompt updated successfully"); // I show a success message.
      navigate(`/prompt/${id}`); // I navigate to the updated prompt's detail page.
    } catch (error) {
      toast.error("Update failed"); // I show an error message if the update fails.
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-900 via-black to-purple-900 flex justify-center items-center">
      <div className="max-w-3xl w-full p-8 bg-white text-black rounded-lg shadow-xl space-y-6">
        <motion.h2
          className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#3a1d60] to-[#0e0e0e] text-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Edit Prompt
        </motion.h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-gray-700 font-medium">Title</label>
            <input
              type="text"
              name="title"
              value={prompt.title} // I bind the title state to this input.
              onChange={handleChange}
              placeholder="Enter prompt title"
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-gray-700 font-medium">
              Description
            </label>
            <textarea
              name="description"
              value={prompt.description} // I bind the description state to this textarea.
              onChange={handleChange}
              placeholder="Short description (optional)"
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-gray-700 font-medium">
              Prompt Content
            </label>
            <textarea
              name="content"
              value={prompt.content} // I bind the content state to this textarea.
              onChange={handleChange}
              placeholder="Prompt content..."
              className="w-full p-3 border border-gray-300 rounded-xl min-h-[120px] focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-gray-700 font-medium">Category</label>
            <input
              type="text"
              name="category"
              value={prompt.category} // I bind the category state to this input.
              onChange={handleChange}
              placeholder="e.g., Storytelling"
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          <motion.button
            type="submit"
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition duration-200"
            whileHover={{ scale: 1.05 }}
          >
            Update Prompt
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default EditPrompt;
