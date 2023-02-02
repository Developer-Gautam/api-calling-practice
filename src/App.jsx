import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const Navbar = ({ getUsers }) => {
  return (
    <nav className="navbar">
      <h1 className="brand-name">My Brand</h1>
      <button className="get-users-btn" onClick={getUsers}>Get Users</button>
    </nav>
  );
};

const UserCard = ({ name, email, id, avatar }) => {
  return (
    <div className="user-card">
      <img src={avatar} alt="" />
      <h2 className="user-name">{name}</h2>
      <p className="user-email">{email}</p>
      <p className="user-id">ID: {id}</p>
    </div>
  );
};

const UserCardGrid = ({ users }) => {
  return (
    <div className="user-card-grid">
      {users.map(user => (
        <UserCard key={user.id} name={user.first_name} email={user.email} id={user.id} img={user.avatar} />
      ))}
    </div>
  );
};

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    setLoading(true);
    const response = await axios.get("https://reqres.in/api/users?page=1");
    setUsers(response.data.data);
    setLoading(false);
  };

  return (
    <div className="app">
      <Navbar getUsers={getUsers} />
      {loading ? (
        <p className="loading">Loading...</p>
      ) : (
        <UserCardGrid users={users} />
      )}
    </div>
  );
};

export default App;

//Project for aDMe Company, created by Gautam Kumar, 02.02.2023
//Chaibasa, Jharkhand 
