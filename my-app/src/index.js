import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './componnets/header';
import UserInput from './componnets/user_input';
import User from './componnets/user';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);


function App(){



  return (
    <div className='app-container'>
      <Header />
      <User />  
    
    </div>
  );
}

