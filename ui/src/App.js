import { useState, useEffect } from "react";
import { User } from "./components/User";
import axios from "axios";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUserData();
  }, []);

  async function getUserData() {
    try {
      const { data } = await axios.get("http://localhost:8080/users");
      console.log(data)
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <h1>Users list:</h1>
      {users.map((user) => (
        <User user={user} />
      ))}
    </div>
  );
}

export default App;
