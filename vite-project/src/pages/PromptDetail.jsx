import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // I use this to get the prompt ID from the URL.
import { getPromptById } from "../services/api"; // I use this to fetch the prompt details from the API.

const PromptDetail = () => {
  const { id } = useParams(); // I get the prompt ID from the URL.
  const [prompt, setPrompt] = useState(null); // I use this state to store the prompt details.

  useEffect(() => {
    const fetchPrompt = async () => {
      try {
        const data = await getPromptById(id); // I fetch the prompt details by its ID.
        setPrompt(data); // I update the state with the fetched data.
      } catch (error) {
        console.error("Error fetching prompt:", error); // I log any errors that occur.
      }
    };

    fetchPrompt(); // I call the fetch function when the component mounts.
  }, [id]);

  if (!prompt) {
    return (
      <div className="text-center mt-20 text-lg text-gray-500">
        Loading prompt details... {/* I show a loading message while the data is being fetched. */}
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md border border-gray-200">
      <h1 className="text-4xl font-bold text-indigo-700 mb-2">{prompt.title}</h1>
      
      <p className="text-sm text-gray-400 mb-1">Prompt ID: {prompt.id}</p>
      <p className="text-sm text-gray-600 italic mb-4">Category: {prompt.category}</p>

      {prompt.description && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-1">Description</h3>
          <p className="text-gray-700 leading-relaxed">{prompt.description}</p>
        </div>
      )}

      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-1">Prompt Content</h3>
        <p className="text-gray-900 bg-gray-50 p-4 rounded-md leading-relaxed">
          {prompt.content} {/* I display the main content of the prompt. */}
        </p>
      </div>
    </div>
  );
};

export default PromptDetail; 
