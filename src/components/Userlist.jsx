import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddUser from './AddUser';
import EditUser from './EditUser';
import DeleteUser from './DeleteUser';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the users!', error);
      });
  }, []);

  const handleAddUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  const handleEditUser = (updatedUser) => {
    setUsers(users.map(user => user.id === updatedUser.id ? updatedUser : user));
  };

  const handleDeleteUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  return (
    <div className='userlist'>
     <div className='heding'> <h1>User List</h1></div>
      <div className='add'><AddUser onAddUser={handleAddUser} /></div>
      {users.map(user => (
        <div className='card' key={user.id}>
          <p>NAME :{user.name} </p>
          <p>E-MAIL:({user.email})</p>
       <div className='btn'>   <EditUser user={user} onEditUser={handleEditUser} />
          <DeleteUser userId={user.id} onDeleteUser={handleDeleteUser} /></div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
