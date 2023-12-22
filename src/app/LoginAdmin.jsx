import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Button, TextField, Alert } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import PublicProvider from './providers/PublicProvider';

const RegisterContainerStyled = styled.div`
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

// Styled component for success message
const SuccessMessage = styled.div`
  color: green;
  font-weight: bold;
  margin-bottom: 10px;
`;

export default function LoginAdmin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // useNavigate hook

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:8000/api/v1/login-superadmin',
        { email, password }
      );
      // After a successful login
      localStorage.setItem('token', response?.data?.data?.token);
      localStorage.setItem('userRole', response?.data?.data?.role); // Set the user role

      // Display success message
      setLoginSuccess(true);

      // Navigate to /dashboard after 3 seconds
      setTimeout(() => {
        navigate('/dashboard');
      }, 3000);
    } catch (error) {
      setLoginSuccess(false);
      setError(error?.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <PublicProvider>
      <RegisterContainerStyled>
        <Form onSubmit={handleSubmit}>
          <div
            style={{
              width: '50%',
            }}
          >
            {loginSuccess && (
              <SuccessMessage>Login successful! Redirecting...</SuccessMessage>
            )}

            {error && <Alert severity="error">{error}</Alert>}

            <h3>Car Rental BInar</h3>
            <h4>Login as admin/superadmin</h4>
            <TextField
              label="Email"
              name="email"
              id="email"
              type="email"
              placeholder="Type your email"
              sx={{ width: '100%', mb: 3 }}
              onChange={(e) => setEmail(e.target.value)}
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
              sx={{ width: '100%', mt: 1, mb: 4 }}
            >
              Login Account
            </Button>
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
      </RegisterContainerStyled>
    </PublicProvider>
  );
}
