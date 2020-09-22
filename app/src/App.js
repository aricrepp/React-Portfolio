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
      <div width="100%" height="100%" className="svg_con">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xlink="http://www.w3.org/1999/xlink"
          id="wave2"
          viewBox="0 0 1320 250"
        >
          <path
            fill="#73e9df"
            opacity="0.5"
            d="
          M0 67
          C 273,183
            822,-40
            1920.00,106 

          V 359 
          H 0 
          V 67
          Z"
          >
            <animate
              repeatCount="indefinite"
              fill="#73e9df"
              attributeName="d"
              dur="15s"
              values="
            M0 77 
            C 473,283
              822,-40
              1920,116 

            V 359 
            H 0 
            V 67 
            Z; 

            M0 77 
            C 473,-40
              1222,283
              1920,136 

            V 359 
            H 0 
            V 67 
            Z; 

            M0 77 
            C 973,260
              1722,-53
              1920,120 

            V 359 
            H 0 
            V 67 
            Z; 

            M0 77 
            C 473,283
              822,-40
              1920,116 

            V 359 
            H 0 
            V 67 
            Z
            "
            ></animate>
          </path>

          <path
            fill-opacity="0.6"
            d="
           M0,192
           C220,100,440,100,660,192
           C880,290,1100,290,1320,192
           L1320,500
           L0,500
           "
            fill="#FFFFFF"
          >
            <animate
              attributeName="d"
              begin="-15s"
              dur="30s"
              repeatCount="indefinite"
              keyTimes="0;
              0.25;
              0.50;
              0.75;
              1"
              values="
              M0,192 C220,100,440,100,660,192 C880,290,1100,290,1320,192 L1320,500 L0,500;
              M0,100 C220,100,440,292,660,292 C880,292,1100,100,1320,100 L1320,500 L0,500;
              M0,192 C220,290,440,290,660,192 C880,100,1100,100,1320,192 L1320,500 L0,500;
              M0,292 C220,292,440,100,660,100 C880,100,1100,292,1320,292 L1320,500 L0,500;
              M0,192 C220,100,440,100,660,192 C880,290,1100,290,1320,192 L1320,500 L0,500;
              "
            />
          </path>
          <path
            fill-opacity="0.6"
            d="
           M0,192
           C220,100,440,100,660,192
           C880,290,1100,290,1320,192
           L1320,500
           L0,500
           "
            fill="#E9737D"
          >
            <animate
              attributeName="d"
              dur="25s"
              repeatCount="indefinite"
              keyTimes="0;
              0.25;
              0.50;
              0.75;
              1"
              values="
              M0,192 C220,100,440,100,660,192 C880,290,1100,290,1320,192 L1320,500 L0,500;
              M0,100 C220,100,440,292,660,292 C880,292,1100,100,1320,100 L1320,500 L0,500;
              M0,192 C220,290,440,290,660,192 C880,100,1100,100,1320,192 L1320,500 L0,500;
              M0,292 C220,292,440,100,660,100 C880,100,1100,292,1320,292 L1320,500 L0,500;
              M0,192 C220,100,440,100,660,192 C880,290,1100,290,1320,192 L1320,500 L0,500;
              "
            />
          </path>
        </svg>
      </div>
    </div>
  );
}

export default App;
