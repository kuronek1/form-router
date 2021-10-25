import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import RegistrationPage from './pages/Registration/index'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage/>
        </Route>
        <Route exact path="/login">
          <LoginPage/>
        </Route>
        <Route exact path="/registration">
          <RegistrationPage/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
