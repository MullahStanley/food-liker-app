import React, { useState } from 'react';

const FoodForm = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const foodData = {
      name: name,
      image: image,
      description: description
    };

    ('http://127.0.0.1:9292/foods', foodData)
      .then(response => response.data)
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <h2>Create Food</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={e => setName(e.target.value)} required />
        <label>Image URL:</label>
        <input type="text" value={image} onChange={e => setImage(e.target.value)} required />
        <label>Description:</label>
        <textarea value={description} onChange={e => setDescription(e.target.value)} required />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default FoodForm;
