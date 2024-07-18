import React, { useState } from 'react';
import axios from 'axios';

const EditUser = ({ user, onEditUser }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUser = { ...user, name, email };

    axios.put(`https://jsonplaceholder.typicode.com/users/${user.id}`, updatedUser)
      .then(response => {
        onEditUser(response.data);
        setIsEditing(false);
      })
      .catch(error => {
        console.error('There was an error editing the user!', error);
      });
  };

  return (
    <>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </form>
      ) : (
        <button onClick={() => setIsEditing(true)}>Edit</button>
      )}
    </>
  );
};

export default EditUser;
