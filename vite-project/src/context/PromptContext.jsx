import React, { createContext, useState, useEffect } from "react";
import { getPromptsFromAPI } from "../services/api"; // I use this to fetch prompts from the API.

const PromptContext = createContext(); 

export const PromptProvider = ({ children }) => {
  const [prompts, setPrompts] = useState([]); // I use this state to store the list of prompts.
  const [loading, setLoading] = useState(true); // I use this state to track the loading status.

  useEffect(() => {
    const fetchPrompts = async () => {
      try {
        const data = await getPromptsFromAPI(); // I fetch prompts from the API.
        setPrompts(data); // I update the state with the fetched prompts.
      } catch (error) {
        console.error("Error fetching prompts:", error); // I log any errors that occur.
      } finally {
        setLoading(false); // I set loading to false after the fetch is complete.
      }
    };
    fetchPrompts(); // I call the fetch function when the component mounts.
  }, []);

  return (
    <PromptContext.Provider value={{ prompts, loading }}>
      {children} {/* I render the children components wrapped in the context provider. */}
    </PromptContext.Provider>
  );
};

export default PromptContext; 
