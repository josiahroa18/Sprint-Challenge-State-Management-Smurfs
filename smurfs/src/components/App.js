import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getSmurfs } from '../actions/smurfActions';

import SmurfForm from './SmurfForm';
import SmurfCard from './SmurfCard';
import "./App.css";

function App() {
  const smurfs = useSelector(state => state.smurfs);
  const requestError = useSelector(state => state.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSmurfs);
  }, [dispatch])

  return (
    <div className="App">
      <h1>Add a Smurf</h1>
      {requestError && <p>{requestError}</p>}
      <SmurfForm/>
      <h1>Smurfs</h1>
      <div className='smurf-container'>
        {smurfs && smurfs.map(smurf => {
          return <SmurfCard key={smurf.id} smurf={smurf}/>
        })}
      </div>

    </div>
  );
}

export default App;
