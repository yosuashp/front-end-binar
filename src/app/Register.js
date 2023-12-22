import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Button, TextField, Alert } from '@mui/material';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
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

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alert, setAlert] = useState(null);
    const navigate = useNavigate(); // useNavigate hook
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const registerResponse = await axios.post(
          'http://localhost:8000/api/v1/register',
          { name, email, password }
        );
  
        // Display success message
        setAlert({
          message: 'Registration successful!',
          severity: 'success',
        });
  
        // Redirect to home page after 5 seconds
        setTimeout(() => {
          navigate('/login');
        }, 5000);
      } catch (error) {
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
      <RegisterContainerStyled>
        <Form onSubmit={handleSubmit}>
          <div
            style={{
              width: '50%',
            }}
          >
            {alert && alert.message && (
              <Alert severity={alert.severity}>{alert.message}</Alert>
            )}

            <h3>Car Rental BInar</h3>
            <h4>Create an Account</h4>
            <TextField
              label="Name"
              name="name"
              id="name"
              placeholder="Type your name"
              sx={{ width: '100%', mb: 3 }}
              onChange={(e) => setName(e.target.value)}
            />
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
              Create Account
            </Button>
            {/* Link to login page */}
            <span style={{ fontSize: '20px', fontSize: '20px',
                display: 'flex',
                marginBottom: '2%',
                fontWeight: '600',
                color: 'grey' }}>
              Already have an account? <Link style={{ color: 'black', textDecorationLine:'none', paddingLeft: '0.5%', }} to="/login">Login here</Link>
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
      </RegisterContainerStyled>
    </PublicProvider>
  );
}
