import {useState} from 'react';
import './App.css';
import Axios from 'axios';
import * as React from 'react';
import Button from '@mui/material/Button';


function App() {
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
  const[foodName, setFoodName] = useState('')
  const[days, setDays] = useState(0)

  const addToList=()=>{
    console.log(foodName + days);
    Axios.post("http://localhost:5001/insert",{foodName: foodName, days : days,})
  };
  return (
    <div className="App">
      
      <h1>CRUD APP WITH MERN</h1>

      <label>Food name</label>
      <input type="text" onChange ={(event) => {setFoodName(event.target.value);
      }}/>
      <label>Days since you Ate It</label>
      <input type="number" onChange ={(event) =>{setDays(event.target.value);
      }}/>
      <Button onClick={addToList} variant="contained">Add to list</Bnutton>
        
        
            </div>
  );
}

export default App;
