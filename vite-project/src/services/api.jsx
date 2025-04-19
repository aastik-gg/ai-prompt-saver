import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getPromptsFromAPI = async () => {
  const res = await axios.get(`${BASE_URL}/prompts`);
  return res.data;
};

export const createPrompt = async (newPrompt) => {
  const res = await axios.post(`${BASE_URL}/prompts`, newPrompt);
  return res.data;
};

export const updatePrompt = async (id, updatedPrompt) => {
  const res = await axios.put(`${BASE_URL}/prompts/${id}`, updatedPrompt);
  return res.data;
};

export const deletePrompt = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/prompts/${id}`, {
      method: 'DELETE',
    });
    console.log(`Delete response for ID: ${id} - Status: ${response.status}`);
    
    if (!response.ok) {
      throw new Error('Failed to delete prompt');
    }

    return await response.json(); 
  } catch (error) {
    console.error('Error deleting prompt:', error);
    throw error;
  }
};




export const addPrompt = async (newPrompt) => {
  const res = await fetch(`${BASE_URL}/prompts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newPrompt),
  });
  return res.json();
};

export const getPromptById = async (id) => {
  const res = await fetch(`${BASE_URL}/prompts/${id}`);
  return await res.json();
};