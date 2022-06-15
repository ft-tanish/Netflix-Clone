import React from 'react';
import './App.css';
import Row from './Row';
import requests from './Requests';

function App() {
  return (
    <div className="App">
      <Row title="NETDLIX ORIGNALS" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
    </div>
  );
}

export default App;
