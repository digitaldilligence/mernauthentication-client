import React from 'react';
import './App.css';
import AuthContextProvider from './contexts/AuthContext';
import LoginForm from './components/LoginForm'
function App() {
  return (
    <div className="main_wrapper">
      <AuthContextProvider>
        <LoginForm />
      </AuthContextProvider>
    </div>
  );
}

export default App;
