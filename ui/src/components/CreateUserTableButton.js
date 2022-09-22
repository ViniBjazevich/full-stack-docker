import axios from 'axios'

export default function CreateUserTableButton() {
    async function createUserTable() {
      try {
        await axios.post("http://localhost:8080/createUserTable");
      } catch (error) {
        console.log(error);
      }
    }

  return <button onClick={createUserTable}>Create User Table</button>;
}
