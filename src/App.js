import logo from './logo.svg';
import './App.css';
import Signin from './Components/Login/login'
import Signup from './Components/Signup/signup'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/login" component={Signin}/>
      <Route path="/signup" component={Signup}/>

    </Switch>
    </BrowserRouter>
  );
}

export default App;
