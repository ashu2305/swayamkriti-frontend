import logo from './logo.svg';
import './App.css';
import React, { useContext, useReducer } from 'react';
import Signin from './Components/Login/login'
import Signup from './Components/Signup/signup'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Store from './store/store';
import rootReducer from './store/rootReducer';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword'
import Home from './Components/Home/Home';

function App() {
  const initState = useContext(Store);
  const [state, dispatch] = useReducer(rootReducer, initState);
  return (
    <Store.Provider value={{ state, dispatch }} >
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/forgotpassword" component={ForgotPassword} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </Store.Provider>
  );
}

export default App;
