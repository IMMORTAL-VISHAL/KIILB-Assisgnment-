import React from 'react';
import UserForm from '../components/userForm';

const AddUserPage = ({ users, setUsers }) => {
  const handleAdd = (newUser) => {
    setUsers([...users, newUser]);
  };

  return (
    <div className='justify-center' >
      <h2 className='text-xl font-semibold mb-1 text-gray-900'>Add User</h2>
      <UserForm onSubmit={handleAdd} existingEmails={users.map((u) => u.email)} />
    </div>
  );
};

export default AddUserPage;