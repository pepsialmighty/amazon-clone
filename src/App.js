import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Checkout from "./Checkout/Checkout";
import Login from "./Login/Login";
import { useStateValue } from "./StateProvider";
import { db, auth } from "./firebase";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authuser) => {
      if (authuser) {
        //the user is logged in
        dispatch({
          type: "SET_USER",
          user: authuser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      // cleanup action
      unsubscribe();
    };
  }, []);

  console.log(user);
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
