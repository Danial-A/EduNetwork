import './App.css';
import HomePage from './pages/homepage'
import {Route, Switch} from 'react-router-dom'
import SignIn from './components/sign-in/signin'
import SignUp from './components/sign-up/signup';
import UserProfile from './pages/UserProfile';
import UserHomePage from './pages/UserHomePage';


function App() {
  return (
    <Switch>
      <Route exact path = "/" component = {HomePage}/>
      <Route exact path = "/sign-in" component = {SignIn}/>
      <Route exact path = "/users/sign-up" component = {SignUp}/>
      <Route exact path = "/profile" component = {UserProfile}/>
      <Route exact path = "/Home" component = {UserHomePage}/>
    </Switch>
  );
}

export default App;




