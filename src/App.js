import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import LoginPage from './components/LoginPage/LoginPage';
import MainPage from './components/MainPage/MainPage'
import './App.css';


const Home = () => (
  <HomePage />
);

const Login = () => (
  <LoginPage />
);
const Main = () => (
  <MainPage />
);
const App = props => {
  return (
    <div className="App">
      <Router>
        <div className="App">
          
        <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/main" component={Main} />

        </div>
      </Router>
    </div>
  );
}

export default App;
