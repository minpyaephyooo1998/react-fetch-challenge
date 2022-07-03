import "./App.css";
import { useState, useEffect } from "react";
import Form from "./Form";
import List from "./List";

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com/";
  const [reqType, setReqType] = useState("users");
  const [items, setItems] = useState([]);
  const [ loading, setLoading ] = useState('Loading')

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`);
        const result = await response.json();
        setItems(result);
      } catch (err) {
        console.log(err);
      }
    };

    fetchItems();
  }, [reqType]);
  return (
    <div className="App">
    
      <Form reqType={reqType} setReqType={setReqType} />
      <List items={items} />
    </div>
  );
}

export default App;
