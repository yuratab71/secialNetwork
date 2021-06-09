import React from 'react';
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from './components/Profile/ProfileContainer';
import LoginPage from "./components/Login/Login";

const App = (props) => {
    
    return (
    <BrowserRouter>
      <div className="app-wrapper">
      <HeaderContainer />
      <Navbar state={props.state} />
      <div className="app-wrapper-content">
          <Route path='/dialogs' render={() => {
            return( <DialogsContainer /> );
        }}/>
        <Route path='/profile/:userId?' render={() => {
            return ( <ProfileContainer /> );
        }}/>
          <Route path='/users' render={() => {
              return ( <UsersContainer /> );
          }}/>
        <Route path='/news' component={News}/>
        <Route path='/music' component={Music}/>
        <Route path='/settings' component={Settings}/>
        <Route path='/login' component={LoginPage}/>
      </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
