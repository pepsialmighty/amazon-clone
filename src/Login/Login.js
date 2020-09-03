import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import "./Login.css";
import { auth } from "../firebase";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();

    // do a login logic
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //logged in, redirect to home page
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  const register = (e) => {
    e.preventDefault();

    // do register logic...
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //created a user and log in
        history.push("/");
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className='login'>
      <Link to='/'>
        <img
          className='login__logo'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
          alt=''
        />
      </Link>

      <div className='login__container'>
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type='email'
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type='password'
          />
          <button onClick={login} type='submit' className='login__signinButton'>
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button onClick={register} className='login__registerButton'>
          Create your amazon account
        </button>
      </div>
    </div>
  );
};

export default Login;
