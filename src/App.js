import logo from './logo.svg';
import './App.css';
import Signin from './Components/Login/login'
import Signup from './Components/Signup/signup'
import ForgotPassword from './Components/ForgotPassword/ForgotPassword'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/login" component={Signin}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/forgotpassword" component={ForgotPassword}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
