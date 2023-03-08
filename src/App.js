import {useState,useEffect} from 'react';
import './App.css';
import Axios from 'axios';
import * as React from 'react';
import Button from '@mui/material/Button';


function App() {
  
  const[foodName, setFoodName] = useState('')
  const[days, setDays] = useState(0)
  const[newFoodName, setNewFoodName] = useState("")
  const[foodList,setFoodlist] = useState([])
  
  useEffect(()=>{
    Axios.get("http://localhost:5001/read").then((response)=>{
              setFoodlist(response.data);
    });
  },[]);
  const addToList=()=>{
    console.log(foodName + days);
    Axios.post("http://localhost:5001/insert",{foodName: foodName, days : days})
  };
  const updateFood=(id)=>{
    Axios.put("http://localhost:5001/update",{id : id, newFoodName: newFoodName})
  }
  return (
    <div className="App">
      
      <h1>CRUD APP WITH MERN</h1>

      <label>Food name</label>
      <input type="text" onChange ={(event) => {setFoodName(event.target.value);
      }}/>
      <label>Days since you Ate It</label>
      <input type="number" onChange ={(event) =>{setDays(event.target.value);
      }}/>
      <Button onClick={addToList} variant="contained" size="medium">Add to list</Button>
        
        <h1>FoodList</h1>
        {foodList.map((val,key)=>{
          return (<div key={key} className="food"><h1>{val.foodName}</h1><h1>{val.daysSinceIAte}</h1>
          <input type= "text" placeholder='new food name'onChange={(event)=>{
            setDays(event.target.value);
          }}/>
            <button onClick={()=>updateFood(val._id)}>update</button>
            <button>delete</button>
          </div>)
        }

        )};
        
            </div>
  );
}

export default App;
