import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './componnets/header';
import UserInput from './componnets/user_input';
import User from './componnets/user';
import Count from './componnets/count';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);


function App(){

  const [count, setCount] = React.useState({
    count: 0,
    text: 'text'
  });

  function add(){
    setCount(prevCount => {
      return {...prevCount, count:prevCount.count + 1}
    });
  }

  function minus(){
    setCount(prevCount => {
      return {...prevCount, count:prevCount.count + 1, text:'sss'}
    });
  }
  return (
    <div className='app-container'>
        <button onClick={ add } className='button'>+</button>
        <Count {...count}></Count>
        <button onClick={ minus }>-</button>
    </div>
  );
}


{/* <Header />
<UserInput /> */}