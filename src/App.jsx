import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddUserPage from './pages/addUserPage';
import EditUserPage from './pages/editUserPage';
import UserList from './components/userList';
import SearchBar from './components/searchBar';

const App = () => {
  const [users, setUsers] = useState([]);
  const [emailQuery, setEmailQuery] = useState('');

  const suggestions = users.filter((u) =>
    u.email.toLowerCase().includes(emailQuery.toLowerCase())
  );

  return (
    <Router>
      <h1 className='flex justify-center text-3xl font-semibold items-center'>User Management</h1>
      <br/>
      <Routes>
        <Route path="/" element={<AddUserPage users={users} setUsers={setUsers} />} />
        <Route path="/edit/:id" element={<EditUserPage users={users} setUsers={setUsers} />} />
      </Routes>
      <SearchBar
        emailQuery={emailQuery}
        setEmailQuery={setEmailQuery}
        suggestions={suggestions}
        onSelect={setEmailQuery}
      />
      <UserList users={users} filterEmail={emailQuery} />
    </Router>
  );
};

export default App;
