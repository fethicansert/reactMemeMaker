import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './componnets/header';
import UserInput from './componnets/user_input';
import User from './componnets/user';
import Count from './componnets/count';
import box from './data/boxData.js';
import Box from './componnets/box';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App  />
);


function App(props){
 
  

  return (
    <div className='app-container'>
       <Form />
    </div>
  );
}

function Form(){

  //With putting user data in state eveery updating to state with onChange event we don't need take data at the end with state stle when I press
  //The submit i already have to data
  
  const [userState, setUserState] = useState({email: '', password: '', passwordConfirm: '', isNewSteller : false});

  function handleInput(event){
    const {name , type , value, checked } = event.target;
    setUserState(prevState => ({...prevState,[name]: type === 'checkbox' ? checked : value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(userState.password !== userState.passwordConfirm){
        alert('Passwords shuld match braza');
        return;
    }
    apiPost(userState);
  }

  const apiPost = (stateData) => {
    console.log(stateData);
  }
  return (
    <form onSubmit={ handleSubmit }>
      <input type='text' value={ userState.email } name='email'  onChange={ handleInput} placeholder='Email' required/>
      <input type='password' value={ userState.password } name='password' onChange={ handleInput} placeholder='Password' required/>
      <input type='password' value={ userState.passwordConfirm } name='passwordConfirm'  onChange={ handleInput} placeholder='ConfirmPassword' required/>

      <label>
        <input type='checkbox' checked={ userState.isNewSteller } onChange={ handleInput } name='isNewSteller'/>
        I want to join the newsletter
      </label>

      <button>Submit</button>
    </form>
  );


}





{/* <Header />
<UserInput /> */}