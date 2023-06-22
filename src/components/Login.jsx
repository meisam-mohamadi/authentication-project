import React, { useRef} from 'react';
import styles from './Login.module.css';
import Button from './Button';

const Login = (props) => {

  const username = useRef();
  const password = useRef();



  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(username.current.value, password.current.value);
  };

  return (
    <div className={styles.mainContainer}>
      <form onSubmit={submitHandler}>
        
        <div  className={`${styles.dataContainer} `}  >
          <label htmlFor="username">نام کاربری</label>
          <input
            type="text"
            id="username"
            ref={username}
          />
        </div>

        <div
          className={`${styles.dataContainer} `} >
          <label htmlFor="password">رمز عبور</label>
          <input
            type="password"
            id="password"
            ref={password}
          />
        </div>

        <div className={styles.submit}>
          <Button type="submit"  >
            ورود
          </Button>
        </div>
        
      </form>
      </div>
  );
};

export default Login;
