import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import { subscribeToNotifications } from './messaging';
import {Button, Toast} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button onClick={() => subscribeToNotifications()}>Show Toast</Button>
      </header>


    </div>
  );
}

export default App;