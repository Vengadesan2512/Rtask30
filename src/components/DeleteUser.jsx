import React from 'react';
import axios from 'axios';

const DeleteUser = ({ userId, onDeleteUser }) => {
  const handleDelete = () => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(() => {
        onDeleteUser(userId);
      })
      .catch(error => {
        console.error('There was an error deleting the user!', error);
      });
  };

  return (
    <button onClick={handleDelete}>Delete</button>
  );
};

export default DeleteUser;
