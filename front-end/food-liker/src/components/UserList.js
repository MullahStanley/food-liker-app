import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FoodCard = ({ food }) => {
  const [likes, setLikes] = useState(food.likes);

  const handleLike = () => {
    axios.post('/likes', { food_id: food.id })
      .then(response => {
        setLikes(likes + 1);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="food-card">
      <img src={food.image} alt={food.name} />
      <div>
        <h3>{food.name}</h3>
        <p>{food.description}</p>
        <button onClick={handleLike}>Like ({likes})</button>
      </div>
    </div>
  );
};

const UserList = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axios.get('/foods')
      .then(response => {
        setFoods(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      <h2>Food List</h2>
      <div className="food-container">
        {foods.map(food => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
