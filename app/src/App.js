import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import './App.css';

function App() {
  const [git, setGit] = useState();

  useEffect(() => {
    axios
      .get('https://api.github.com/users/aricrepp')
      .then((res) => {
        console.log(res.data);
        setGit(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="_root">
      <Header data={git} />
    </div>
  );
}

export default App;
