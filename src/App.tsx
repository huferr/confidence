import React, { useEffect } from 'react';
import './App.css';
import { getLocations } from './services/locations.service';

function App() {
  useEffect(() => {
   (async () => {
    const res = await getLocations()
    console.log(res.data.locations)
   })()
  }, [])
  return (
    <div className="App">
      Confidence System
    </div>
  );
}

export default App;
