import { gql, useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.scss';

const LOGIN_MUTATION = gql`
  mutation obtenerToken($email: String!, $password: String!) {
    obtenerToken(email: $email, password: $password)
  }
`;

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [login, { loading, error }] = useMutation(LOGIN_MUTATION);
  const navigate = useNavigate(); // Hook para navegar

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await login({
        variables: {
          email: username,
          password
        }
      });
      const token = response.data.obtenerToken;
      localStorage.setItem('accessToken', token);
      console.log('Login successful, token:', token);
      navigate('/home'); // Navega a la página de inicio
    } catch (err) {
      console.error('Error logging in:', err);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {loading && <p>Cargando...</p>}
          {error && <p>Error: {error.message}</p>}
          <div className="actions">
            <button type="submit">Login</button>
          </div>
          <p className="alternative-action">¿No tienes una cuenta? Registro</p>
        </form>
      </div>
    </div>
  );
}

export default Login;
