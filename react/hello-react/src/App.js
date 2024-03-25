import axios from 'axios';
import { useState } from 'react';
import './App.css';




function App() {

  const [users, setUsers] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [edit, setEditUser] = useState(null);

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
      .then(function (response) {
        getUser();
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })

  }
  const updateUser = (event) => {
    event.preventDefault();

    const data = {
      username: username,
      password: password,
      email: email
    }

    axios.put("http://localhost:8080/user/" + edit, data)
      .then(function (response) {
        getUser();
        setEditUser(null);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  return (
    <div className="App">
    
      <button type='button' onClick={getUser}>Get User</button>

      {
        users && users.map((row) => {
          return (
            <div key={row.id}>
              {row.username} - {row.email}
              <button type='button' onClick={() => {
                setEditUser(row.id);
                setUsername(row.username);
                setEmail(row.email);
              }}>Edit</button>

              <button type="button" onClick={() => {
                axios.delete("http://localhost:8080/user/" + row.id)
                  .then(function () {
                    getUser();
                  })
                  .catch(function (error) {
                    console.log(error);
                  })
              }}>Delete</button>
            </div>
          );
        })
      }
      {!edit &&
        <div>
          <h2>Create User</h2>
          <form onSubmit={createUser} id='form'>
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

            <button type='submit'>Create User</button>

          </form>
        </div>
      }


      {edit &&

        <div>
          <h2>Edit User</h2>
          <form onSubmit={updateUser}>
            <div>
              <label>User Name : </label>
              <input type='text' required onChange={handleUserName} value={username} />
            </div>
            <br />
            <div>
              <label>Password : </label>
              <input type='text' required onChange={handlePassword} />
            </div>
            <br />
            <div>
              <label>User Email : </label>
              <input type='text' required onChange={handleEmail} value={email} />
            </div>

            <br />
            <button type='submit'>Update User</button>
            <button type='button' onClick={() => {
              setEditUser(null);
            }}>Cancel</button>

          </form>

        </div>

      }

    </div>
  );
}

export default App;
