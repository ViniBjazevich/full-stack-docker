import axios from "axios";

export default function DeleteUserTableButton() {
  async function createUserTable() {
    try {
      await axios.delete("http://localhost:8080/deleteUserTable");
    } catch (error) {
      console.log(error);
    }
  }

  return <button onClick={createUserTable}>Delete User Table</button>;
}
