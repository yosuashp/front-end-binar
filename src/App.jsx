import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './app/Home';
import Dashboard from './layout/Dashboard'
import Search from './app/Search';
import Login from './app/Login';
import LoginAdmin from './app/LoginAdmin';
import ErrorPage from './app/ErrorPage';
import Register from './app/Register'; // Import Register component
import List from './app/components/cars/list';
import Create from './app/components/cars/create';
import CarDetail from './app/components/cars/detail';
import Update from './app/components/cars/update';
import PrivateProvider from './app/providers/PrivateProvider';
import PublicProvider from './app/providers/PublicProvider';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicProvider>
              <Login />
            </PublicProvider>
          }
        />
        <Route
          path="/register"
          element={
            <PublicProvider>
              <Register />
            </PublicProvider>
          }
        />
        <Route
          path="/loginAdmin"
          element={
            <PublicProvider>
              <LoginAdmin/>
            </PublicProvider>
          }
        />
        <Route
          path="/cars"
          element={
            <PrivateProvider>
              {/* Menggunakan komponen Search sebagai child Route */}
              <Search />
            </PrivateProvider>
          }
        />
        <Route
          path="/"
          element={
            <PrivateProvider>
              {/* Menggunakan komponen Search sebagai child Route */}
              <Home />
            </PrivateProvider>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateProvider>
              {/* Menggunakan komponen Search sebagai child Route */}
              <List/>
              <Dashboard />
              
            </PrivateProvider>
          }
        />
         <Route
          path="/create"
          element={
            <PrivateProvider>
              {/* Menggunakan komponen Search sebagai child Route */}
              <Create/>
            </PrivateProvider>
          }
        />
         <Route
          path="/update/:id"
          element={
            <PrivateProvider>
              {/* Menggunakan komponen Search sebagai child Route */}
              <Update/>
            </PrivateProvider>
          }
        />
        <Route
          path="/detail/:id"
          element={
            <PrivateProvider>
              {/* Menggunakan komponen Search sebagai child Route */}
              <CarDetail/>
            </PrivateProvider>
          }
        />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
