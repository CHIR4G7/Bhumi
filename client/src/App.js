
import { Routes } from 'react-router-dom';
import './App.css';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Heatmap from 'heatmap.js'
import { Route } from 'react-router-dom';
import ClientPage from './pages/ClientPage';
import AdminPage from './pages/AdminPage';
import { useEffect, useState } from "react";


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<ClientPage/>} />
        <Route path="/admin" element={<AdminPage/>} />
      </Routes>
    </>
  );
}

export default App;
