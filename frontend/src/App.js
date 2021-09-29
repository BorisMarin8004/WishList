import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
  const [itemData, setItemData] = useState("EmptyProjectName");

  useEffect(() => {
    let data = null
    axios.get('http://0.0.0.0:8000/').then(res => {
      data = res.data
      // console.log(data)
      setItemData(data)
    })
  }, []);


  return (
    <div className="App">
      <h1>{itemData.name}, {itemData.price}</h1>
    </div>

  );
}

export default App;
