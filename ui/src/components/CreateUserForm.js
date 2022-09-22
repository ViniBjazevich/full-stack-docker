import { useState } from "react";
import axios from "axios";

export default function CreateUserForm({ getUserData }) {
  const [name, setName] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    await addUser();
    await getUserData();
    setName("")
  }

  async function addUser() {
    try {
      await axios.post("http://localhost:8080/createUser", { name });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="First name"
        type="text"
        name="name"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}
