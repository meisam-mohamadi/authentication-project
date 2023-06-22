import React from 'react';

import Navigation from './Navigation';
import styles from './Header.module.css';

const MainHeader = (props) => {
  return (
    <header className={styles['main-container']}>
      <h1>tahlildadeh.com</h1>
      <Navigation isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} />
    </header>
  );
};

export default MainHeader;
