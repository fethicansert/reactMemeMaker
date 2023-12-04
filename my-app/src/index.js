import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './componnets/header';
import UserInput from './componnets/user_input';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);



function App(){
  return (
    <div className='app-container'>
        <Header></Header>
        <UserInput />
    </div>
  );
}
