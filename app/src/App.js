import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Quote from './components/Quote';
import './App.css';
import Tabs from './components/Tabs';

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
      <Quote />
      <Tabs />
    </div>
  );
}

export default App;
