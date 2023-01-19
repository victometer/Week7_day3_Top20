import logo from './logo.svg';
import './App.css';
import React from 'react'
import MusicChart from './containers/MusicChart';

function App() {
  return (
    <div className="App">
      <h1>Top 20 songs UK</h1>
      <MusicChart />
    </div>
  );
}

export default App;
