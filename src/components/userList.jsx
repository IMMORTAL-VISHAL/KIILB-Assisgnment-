import React from 'react';
import { Link } from 'react-router-dom';

const UserList = ({ users, filterEmail }) => {
  const filtered = filterEmail
    ? users.filter((u) => u.email === filterEmail)
    : users;

  return (
    <ul className='min-w-full bg-white rounded overflow-hidden mt-2'>
      {filtered.map((user) => (
        <li className='border-b hover:bg-gray-100 mt-2' key={user.id}>
          <strong>{user.fullName}</strong> - {user.email} - {user.phone}
          <Link className="text-green-900 hover:underline"  to={`/edit/${user.id}`}> Edit</Link>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
