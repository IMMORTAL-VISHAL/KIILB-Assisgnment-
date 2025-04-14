import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import UserForm from '../components/userForm';

const EditUserPage = ({ users, setUsers }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = users.find((u) => u.id === id);

  if (!user) return <div>User not found</div>;

  const handleEdit = (updatedUser) => {
    const updatedUsers = users.map((u) =>
      u.id === updatedUser.id ? updatedUser : u
    );
    setUsers(updatedUsers);
    navigate('/');
  };

  return (
    <div>
      <h2 className='text-xl font-semibold mb-1 '>Edit User</h2>
      <UserForm
        onSubmit={handleEdit}
        initialData={user}
        existingEmails={users.map((u) => u.email)}
      />
    </div>
  );
};

export default EditUserPage;
