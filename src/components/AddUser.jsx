import React, { useState } from 'react';
import axios from 'axios';

const AddUser = ({ onAddUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { name, email };

    axios.post('https://jsonplaceholder.typicode.com/users', newUser)
      .then(response => {
        onAddUser(response.data);
      })
      .catch(error => {
        console.error('There was an error adding the user!', error);
      });
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
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
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
