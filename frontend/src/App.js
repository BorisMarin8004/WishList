import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
  const [itemsData, setItemsData] = useState(null);

  useEffect(() => {
    axios.get('http://0.0.0.0:8000/api/item/').then(res => {
      setItemsData(res.data)
    })
  }, []);

  if (itemsData === null) {
    return <h2>Loading items...</h2>;
  }

  return (
    <div className="App">
      {itemsData.map(data => <h2>{data.name}</h2>)}
    </div>
  );
}

export default App;
