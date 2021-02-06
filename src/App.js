import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./Components/Register/Register";
import Login from './Components/Login/login';
import ForgotPassword from './Components/Login/ForgotPassword';
import UserList from './Components/UserList/UserList';
import UpdateUser from './Components/UserList/UpdateUser';
import Footer from './Components/Footer/footer';

function App() {
  return (
    <div>
      <Router>
        <div >
          <Switch>

            <Route path="/" exact component={Login}></Route>

            <Route path="/register" component={Register}></Route>

            <Route path="/UserList" component={UserList}></Route>

            <Route path="/ForgotPassword" component={ForgotPassword}></Route>

            <Route path="/update-user" component={UpdateUser}></Route>

          </Switch>
        </div>
      </Router>

    </div>
  );
}

export default App;
