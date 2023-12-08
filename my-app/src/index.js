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

const x = 0  || 'ss';
console.log(x);
console.log(0 || 'ss');
console.log(0 && 'zz');
function App(props){


 
  return (
    <div className='app-container'>
       <Form />
    </div>
  );
}



function Form(){
  
  const [inputs,setInputs] = useState({});

  console.log(inputs);
  
  function handleInputs(e){
    const inputName = e.target.name;
    const inputValue = e.target.value;

    setInputs(preState => {
      return {...preState,[inputName]:inputValue}
    })
  }

  function handleSubmit(e){
    e.preventDefault();
    alert('Submit prevented');
  }

  return (
    <form onSubmit = { handleSubmit }>
      <input  type = 'text' 
              name = 'name'
              value = { inputs.name || '' }
              onChange = { (e) => handleInputs(e) }
      />   
      

      <input  type='text'
              name='age'
              value={inputs.age || ''}
              onChange = { (e) => handleInputs(e) }
              />


      <input type='submit' value='Submit'></input>
    </form>
  );
}




{/* <Header />
<UserInput /> */}