import './App.css';
import React, { useContext, useReducer } from 'react';
import Signin from './Components/Login/login'
import Signup from './Components/Signup/signup'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Store from './store/store';
import rootReducer from './store/rootReducer';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword'
import Home from './Components/Home/Home';
import Profile from './Components/Profile/Profile';
import Logout from './Components/util/Logout';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mentor from './Components/Mentor/Mentor'
import BuynSell from './Components/BuynSell/BuynSell';
import Notification from './Components/Notification/Notification';

function App() {
  const initState = useContext(Store);
  const [state, dispatch] = useReducer(rootReducer, initState);
  return (
    <Store.Provider value={{ state, dispatch }} >
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/profile" component={Profile} />
          <Route path="/forgotpassword" component={ForgotPassword} />
          <Route path="/logout" component={Logout} />
          <Route path ="/mentor" component = {Mentor} />
          <Route path ="/sell" component = {BuynSell} />
          <Route path = "/notification" component = {Notification}/>
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </Store.Provider>
  );
}

export default App;
