import React, { createContext, useState, useEffect } from "react";
import { getPromptsFromAPI } from "../services/api";

const PromptContext = createContext();

export const PromptProvider = ({ children }) => {
  const [prompts, setPrompts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrompts = async () => {
      try {
        const data = await getPromptsFromAPI();
        setPrompts(data);
      } catch (error) {
        console.error("Error fetching prompts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPrompts();
  }, []);

  return (
    <PromptContext.Provider value={{ prompts, loading }}>
      {children}
    </PromptContext.Provider>
  );
};

export default PromptContext;
