import React, {useState} from "react";
import { Link } from 'react-router-dom';


function FoodCard({ food }) {
    const [showDetails, setShowDetails] = useState(false);
  
    const toggleDetails = () => {
      setShowDetails(!showDetails);
    };
  
    return (
      <div className="food-card">
        <img src={food.image} alt={food.name} />
        <h3>{food.name}</h3>
        <p className={`food-description ${showDetails ? 'expanded' : ''}`}>
          {food.description}
        </p>
        <p>Likes: {food.likes}</p>
        <button onClick={toggleDetails}>Toggle Details</button>
        <Link to={`/edit/${food.id}`}>Edit</Link>
        <button>Delete</button>
      </div>
    );
  }

  export default FoodCard