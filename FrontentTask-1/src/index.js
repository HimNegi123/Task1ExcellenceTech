import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import App from './App';
import LoginForm from './components/LoginForm';
import reportWebVitals from './reportWebVitals';
import HomeScreen from './components/HomeScreen';
import RegisterForm from './components/RegisterForm';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    
    path: "/home",
    element: <HomeScreen />,
  },
  {
    path: "/register",
    element: <RegisterForm />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
