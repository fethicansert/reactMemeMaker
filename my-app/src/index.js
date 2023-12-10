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
  
  const [inputs, setInput] = useState({ name: '', surname: '', age: '', banana: false , favcolor: ''})

  function handleInputs(e){
      console.log(e);
      const {name, type, value, checked} = e.target;
      setInput(prevState => ({...prevState, [name] : type === 'checkbox' ? checked : value })); 
  }

  function handleSubmit(e){
    e.preventDefault();
    apiFunction(inputs);
    //if I'dont preventDefault form onSubmit event will refresh to page it's not necessary
  }

  function apiFunction(data){
    console.log(data);
  }

  console.log(inputs);

  return (
    <form onSubmit = { handleSubmit }>
     
      <input type='text' name='name' value={ inputs.name } onChange={ handleInputs} placeholder='Name'/>
      <input type='text' name='surname' value={ inputs.surname } onChange={ handleInputs} placeholder='Surname'/>
      <input type='text' name='age' value={ inputs.age } onChange={ handleInputs}  placeholder='Age' />

      <Checkbox label = 'Bananaz' name='banana' checked = { inputs.banana } onChange = { handleInputs }/>

      <fieldset>
        <legend>Current employement status</legend>
        <Radiobox label={ 'Unemployed'} id={ 'unemployed'}  value={ 'unemployed' } onChange = { handleInputs }  name={ 'employment' } stateData = {inputs.employment}/>
        <Radiobox label={ 'Part-time' } id={ 'parttime' }  value={ 'parttime' } onChange = { handleInputs } name={ 'employment' } stateData = {inputs.employment}/>
        <Radiobox label={ 'Full-time' } id={ 'fulltime' }  value={ 'fulltime' } onChange = { handleInputs } name={ 'employment' } stateData = {inputs.employment}/>
      </fieldset>

      <label htmlFor='favColor'>What is your favorite color?</label>
      <select name='favcolor' id='favColor' value={ inputs.favcolor } onChange={ handleInputs }>
        <option value={''}>-- Choose --</option>
        <option value={'Red'}>Red</option>
        <option value={'Blue'}>Blue</option>
        <option value={'Green'}>Green</option>
        <option value={'Yellow'}>Yellow</option>
        <option value={'Purple'}>Purple</option>
        <option value={'Orange'}>Orange</option>
      </select>
      {/* <input type='submit' value='Submit'></input> */}
      <button>Submit</button> 
      {/* button element form elementinin childerini oldugu icin default olarak type submittir button kullanmak daha iyi
          cunku input type arti value vermek gereksiz value ayni zamanda button texti oluyor degeri valusu degil*/}
    </form>
  );
}

//State of htmlelement shuold come from state in jsx not html state
// radio elementinde namelerin ayni olmasi tek bir radionun sadece aktif kalmasini saglar eger ayni name attirbutesini tutan 3 radio varsa sadece biri aktif kalabilir
const Radiobox = ( {label, id, onChange, name, value, stateData}) => {
  return (
    <label>
      <input type = 'radio' id = { id }  onChange = { onChange } name = { name } value={ value } checked={ stateData === value } ></input> 
      {label}
    </label>
  );
}

const Checkbox = ( { label , checked , onChange, name  } ) => {
  return (
    <label>
      <input type='checkbox' checked = { checked }  onChange = { onChange } name = { name }/>
      {label}
    </label>
  );
}
{/* <Header />
<UserInput /> */}