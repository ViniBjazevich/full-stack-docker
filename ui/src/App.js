import { useState, useEffect } from "react";
import { User } from "./components/User";
import axios from "axios";
import "./App.css";
import CreateUserForm from "./components/CreateUserForm";
import CreateUserTableButton from "./components/CreateUserTableButton";
import DeleteUserTableButton from "./components/DeleteUserTableButton";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUserData();
  }, []);

  async function getUserData() {
    try {
      const { data } = await axios.get("http://localhost:8080/users");

      if (Array.isArray(data)) {
        console.log(data)
        setUsers(data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="app">
      <h1>Users list:</h1>
      <span>
        <CreateUserTableButton />
        <DeleteUserTableButton />
      </span>
      <CreateUserForm getUserData={getUserData} />
      {users.map((user) => (
        <User user={user} key={user.user_id} />
      ))}
    </div>
  );
}

export default App;
