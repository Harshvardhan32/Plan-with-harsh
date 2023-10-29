import React, { useState } from 'react';
import './App.css';
import Tours from './Tours';
import Data from './Data';

function App() {

  const [tours, setTours] = useState(Data);

  function removeTour(id) {
    const newTour = tours.filter(tour => tour.id !== id);
    setTours(newTour);
  }

  if (tours.length === 0) {
    return (
      <div className="refresh">
        <h2>No Tours Left</h2>
        <button className='white-btn' onClick={() => setTours(Data)}>Refresh</button>
      </div>
    );
  }

  return (
    <div>
      <div className='app'>
        <h1>Plan With Harsh</h1>
      </div>
      <div className="">
        <Tours tours={tours} removeTour={removeTour}></Tours>
      </div>
    </div>
  );
}

export default App;