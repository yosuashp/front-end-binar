import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Button, TextField, Alert } from '@mui/material';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import PublicProvider from './providers/PublicProvider';

const LoginContainerStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  height: 100vh;
`;

const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Background = styled.div`
  flex: 1;
`;

export default function Login() {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:8000/api/v1/login',
        { email, password }
      );

      // After a successful login
      localStorage.setItem('token', response?.data?.data?.token);
      localStorage.setItem('userRole', response?.data?.data?.role);

      if (response?.data?.data?.role === 'member') {
        // Redirect member to /
        navigate('/', { replace: true });
      } else {
        // Redirect other roles accordingly
        navigate('/dashboard', { replace: true });
      }

      setAlert({
        message: 'Login success!',
        severity: 'success',
      });
    } catch (error) {
      // Handle login failure
      if (error.response) {
        setAlert({
          message: error?.response?.data?.message,
          severity: 'error',
        });
      } else {
        setAlert({
          message: 'Failed',
          severity: 'error',
        });
      }
    }
  };


  return (
    <PublicProvider>
      <LoginContainerStyled>
        <Form onSubmit={handleSubmit}>
          <div
            style={{
              width: '50%',
            }}
          >
            {alert && alert.message && (
              <Alert severity={alert.severity}>{alert.message}</Alert>
            )}

            <h3>Car Rental Binar</h3>
            <h4>Selamat Datang!</h4>
            <TextField
              label="Email"
              name="email"
              id="username"
              placeholder="Type your email"
              sx={{ width: '100%', mb: 3 }}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              label="Password"
              name="password"
              id="password"
              placeholder="Type your password"
              type="password"
              sx={{ width: '100%', mb: 3 }}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{ width: '100%', mt:1, mb:4 }}
            >
              Go to My Account
            </Button>
            {/* Tambahkan Link ke halaman register */}
            <span
              style={{
                fontSize: '20px',
                display: 'flex',
                marginBottom: '2%',
                fontWeight: '600',
                color: 'grey'
              }}
            >
              Are you admin or superadmin?{' '}
              <Link style={{ color: 'black', textDecorationLine:'none', paddingLeft: '0.5%', }} to="/loginAdmin">Login Here</Link>
            </span>
            <span
              style={{
                fontSize: '20px',
                marginTop: '20%',
                fontWeight: '600',
                color: 'grey',
              }}
            >
              Don't have an account?{' '}
              <Link style={{ color: 'black', textDecorationLine:'none', paddingLeft: '0.5%', }}  to="/register">Register here</Link>
            </span>
          </div>
        </Form>
        <Background>
          <img
            src="https://picsum.photos/id/119/3264/2176"
            alt="bg"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </Background>
      </LoginContainerStyled>
    </PublicProvider>
  );
}

