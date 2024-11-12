import React, { useState } from 'react';

const CampaignForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [goal, setGoal] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description, goal });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="mb-2 w-full p-2 border rounded"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="mb-2 w-full p-2 border rounded"
      />
      <input
        type="number"
        placeholder="Goal Amount"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        className="mb-4 w-full p-2 border rounded"
      />
      <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded">Submit</button>
    </form>
  );
};

export default CampaignForm;
