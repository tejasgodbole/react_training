import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm/LoginForm'

function App() {

  const appTitle = 'MyApplication'

  return (
    <div className="App">
      <h2>Title: {appTitle}</h2>
      <LoginForm email='username@doain.com' password='****'/>
    </div>
  );
}

export default App;
