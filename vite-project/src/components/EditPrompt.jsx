import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPromptById, updatePrompt } from "../services/api";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const EditPrompt = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [prompt, setPrompt] = useState({
    title: "",
    description: "",
    content: "",
    category: "",
  });

  useEffect(() => {
    const fetchPrompt = async () => {
      try {
        const data = await getPromptById(id);
        setPrompt(data);
      } catch (error) {
        console.error("Error fetching prompt:", error);
        toast.error("Failed to load prompt");
      }
    };
    fetchPrompt();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPrompt({ ...prompt, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!prompt.title || !prompt.content || !prompt.category) {
      toast.error("Please fill all required fields");
      return;
    }

    try {
      await updatePrompt(id, prompt);
      toast.success("Prompt updated successfully");
      navigate(`/prompt/${id}`);
    } catch (error) {
      console.error("Error updating prompt:", error);
      toast.error("Update failed");
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
              value={prompt.title}
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
              value={prompt.description}
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
              value={prompt.content}
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
              value={prompt.category}
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
