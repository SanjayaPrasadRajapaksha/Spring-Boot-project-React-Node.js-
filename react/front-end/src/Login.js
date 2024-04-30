import React from 'react'
import { useAuth } from './utils/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [userName, setUserName] = React.useState('');
    const [password, setPassword] = React.useState('');

    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const data = {
            username: userName,
            password: password
        }
        axios.post('http://localhost:8080/auth/login', data)
            .then(function (response) {
                login(response.data);
                navigate('/');
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <div>
                    <label>User Name</label>
                    <input type='text' required onChange={(e) => {
                        setUserName(e.target.value);
                    }} />

                    <label>Password</label>
                    <input type='text' required onChange={(e) => {
                        setPassword(e.target.value);
                    }} />

                    <button type='submit'>Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login