import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Main from './pages/Main';
import Answers from './pages/Answers';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/main' element={<Main />} />
        <Route path='/answers' element={<Answers />} />
      </Routes>
    </Router>
  );
}

export default App;
