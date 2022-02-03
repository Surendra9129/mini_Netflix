import logo from './logo.svg';
import './app.scss';
import Register from './components/pages/register/Register';
import Home from './components/pages/home/Home';
import Watch from './components/pages/watch/Watch';
import Login from './components/pages/login/Login'; 
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom'
import { AuthContex } from './authContext/AuthContext';
import { useContext, useState } from 'react';
function App() {
  const [user,setUser]=useState();
  // const {user}=useContext(AuthContex)
  return (
    <Router>
    <Switch>
      <Route exact path='/'>
        {/* <Home></Home> */}
       {user? <Home /> : <Redirect to='/register'/>}
      </Route>

      <Route exact path='/home'>
        <Home></Home>
      </Route>


      <Route path='/register'>
      {!user? <Register></Register>:<Redirect to='/'/> }
      </Route>

      <Route path='/login'>
        <Login></Login>
      {/* {user? <Login /> : <Redirect to='/register'/>} */}
      </Route>
     {user && (
       <>
       
      <Route exact path='/movies'>
       <Home type='movies' />
      </Route>
      <Route exact path='/series'>
       <Home type='series'/>
      </Route>

      <Route exact path='/watch'>
       <Watch/>
      </Route>
       </>
     )}

    </Switch>
    </Router>
  );
}

export default App;
