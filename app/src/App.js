import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Dashboard from './components/Dashboard';

function App() {
  const [git, setGit] = useState();
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
      axios
      .get('https://api.github.com/users/aricrepp/repos')
      .then((res) => {
          setGit(res.data);
          setIsFetching(true);
      })
      .catch((err) => {
          console.log(err);
      });
  }, []);

  return (
    <div className="wrapper">
      <Dashboard repo={git} isFetching={isFetching}/> 
    </div>
  );
}

export default App;
