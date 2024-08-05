// src/pages/Home.jsx

import React from 'react';
import { Header } from '../components/Header/Header';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Header />
      <h1>Home</h1>
      <p>Welcome to the home page.</p>
       <Outlet />
    </div>
  );
};

export default Home;
