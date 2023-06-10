import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function FoodForm() {
  const { id } = useParams();
  const history = useNavigate();
  const [food, setFood] = useState({});
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    if (id) {
      axios.get(`http://127.0.0.1:9292/${id}`)
        .then(response => {
          setFood(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [id]);

  useEffect(() => {
    axios.get('http://127.0.0.1:9292')
      .then(response => {
        setFoods(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    setFood(prevFood => ({
      ...prevFood,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (id) {
      axios.put(`http://127.0.0.1:9292/${id}`, food)
        .then(response => {
          setFoods(prevFoods => prevFoods.map(f => f.id === id ? response.data : f));
          history.push('/');
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      axios.post('http://127.0.0.1:9292', food)
        .then(response => {
          setFoods(prevFoods => [...prevFoods, response.data]);
          history.push('/');
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  const handleDelete = () => {
    axios.delete(`http://127.0.0.1:9292/${id}`)
      .then(() => {
        setFoods(prevFoods => prevFoods.filter(f => f.id !== id));
        history.push('/');
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2>{id ? 'Edit Food' : 'Add Food'}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={food.name || ''} onChange={handleChange} />
        </label>
        <label>
          Description:
          <input type="text" name="description" value={food.description || ''} onChange={handleChange} />
        </label>
        <label>
          Image URL:
          <input type="text" name="image" value={food.image || ''} onChange={handleChange} />
        </label>
        <button type="submit">{id ? 'Update' : 'Add'}</button>
        {id && <button onClick={handleDelete}>Delete</button>}
      </form>

      <h2>Food List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {foods.map(food => (
            <tr key={food.id}>
              <td>{food.name}</td>
              <td>{food.description}</td>
              <td>
                <img src={food.image} alt={food.name} style={{ width: '100px' }} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FoodForm;
