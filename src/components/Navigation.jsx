import React from 'react';

import classes from './Navigation.module.css';

const Navigation = (props) => {
  return (
    <nav className={classes.nav}>
      <ul>
        {props.isLoggedIn && (
          <li>
            <a href="/">کاربران</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <a href="/">مدیریت</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>خروج از سیستم</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
