import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Redux-Component/Routes';


function App() {
  return (
    <Router>
      <div>
        <Routes />
      </div>
    </Router>

  );
}

export default App;
