import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FoodCard from './FoodCard';

function Home() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:9292')
      .then(response => {
        setFoods(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="home">
      {foods.map(food => (
        <FoodCard key={food.id} food={food} />
      ))}
    </div>
  );
}

export default Home;
