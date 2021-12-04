import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/MainComponent';
import Contact from './components/ContactComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

class App extends React.Component{

render() {
    return(   
    <BrowserRouter>  
      <div>
        <Main />
      </div>
      </BrowserRouter>    
    );
  }
}

export default App;