import './App.css';
import { useState } from 'react';
import axios from 'axios';




function App() {//main component

  const [users, setUsers] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("")

  function getUser() {
    axios.get('http://localhost:8080/users')
      .then(function (response) {
        setUsers(response.data);
      })
      .catch(function (error) {
        console.log(error); 
      })
  }

  function handleUserName(event) {
    setUsername(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function createUser(event) {
   event.preventDefault();

    const data = {
      username: username,
      password: password,
      email: email
    }

    axios.post("http://localhost:8080/user", data)
      .then(function (result) {
        getUser();
        console.log(result);
      })
      .catch(function (error) {
        console.log(error);
      })

  }
  // const [count, setCount] = useState(0)

  // function increaseCounter() {
  //   setCount(count-1);
  //   console.log(count);
  // }

  return (
    <div className="App">
      {/* <ListItem itemName = "java"/>
     <ListItem itemName = "spring boot"/>
     <ListItem itemName = "javascript"/>

     <h1>Counter : {count}</h1>
     <button type='button' onClick={increaseCounter}>Increase</button> */}

      <button type='button' onClick={getUser}>Get User</button>

      {
        users && users.map((row) => {
          return (
            <div key={row.id}>
              {row.username} - {row.email}
            </div>
          );
        })
      }

      <h2>Create User</h2>
      <form onSubmit={createUser}>
        <div>
          <label>User Name : </label>
          <input type='text' required onChange={handleUserName} />
        </div>
        <br />
        <div>
          <label>Password : </label>
          <input type='text' required onChange={handlePassword} />
        </div>
        <br />
        <div>
          <label>User Email : </label>
          <input type='text' required onChange={handleEmail} />
        </div>

        <br />

        <button type='submit'>Create username</button>

      </form>

    </div>
  );
}

// function  ListItem({itemName,itemID}){//sub component
//   return (
//     <div>
//       {itemName}
//       <Child/>
//     </div>
//   );
// }

// function Child(){
//   return (
//     <div>
//       Child
//     </div>
//   )
// }

export default App;
