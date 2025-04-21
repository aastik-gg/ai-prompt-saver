import React from 'react';
import PromptCard from './PromptCard'; // I import the PromptCard component to display individual prompts.

const PromptList = ({ prompts }) => {
  return (
    <div>
      {prompts.length > 0 ? (
        // I map through the prompts and render a PromptCard for each one.
        prompts.map((prompt) => (
          <PromptCard key={prompt.id} prompt={prompt} />
        ))
      ) : (
        // I display a message if no prompts are found.
        <p>No prompts found.</p>
      )}
    </div>
  );
};

export default PromptList; 
