import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserProvider } from './contexts/useUser';
import { TaskProvider } from './contexts/useTask';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserProvider>
    <TaskProvider>
      <App />
    </TaskProvider>
  </UserProvider>
);
