//import './App.css';
import './ListApp.css'
import data from './data';
import List from './List';
import React, { useState } from 'react';

const ListApp = () => {
  const [array, setArray] = useState(data);
  return(
    <div className="Container">
      <h1>There are {array.length} Birthdays Today</h1>
      <List arr={array}/>
      <button type="button" onClick={() => setArray([])}>Clear</button>
    </div>
  );
};

export default ListApp;