import React from 'react';
import PromptCard from './PromptCard'; 

const PromptList = ({ prompts }) => {
  return (
    <div>
      {prompts.length > 0 ? (
        prompts.map((prompt) => (
          <PromptCard key={prompt.id} prompt={prompt} />
        ))
      ) : (
        <p>No prompts found.</p>
      )}
    </div>
  );
};

export default PromptList;
