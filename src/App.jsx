import React, { useState } from 'react';
import Login from './components/Login';
import MainHeader from './components/Header';
import WelcomePage from './components/WelcomePage';
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);



  const loginHandler = (email, password) => {
    if(email==='ali' && password==='123')
    setIsLoggedIn(true);
    else
    alert('نام کاربری یا رمز عبور اشتباه است')
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };  
  return (
    <div>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <WelcomePage onLogout={logoutHandler} />}
      </main>
    </div>
  );
}

export default App
