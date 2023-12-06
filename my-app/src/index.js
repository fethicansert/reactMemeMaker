import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './componnets/header';
import UserInput from './componnets/user_input';
import User from './componnets/user';
import Count from './componnets/count';
import box from './data/boxData.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);


function App(){

  const [boxState, setBoxState ] = useState(box);

  // console.log(...box); //When I Loop on box with ... it's log my object like side by side

  // for(const x of box){ //When I Loop on box with for of forEach it's log object uneder each other
  //   console.log(x);
  // }

  
  const boxElements = boxState.map(box => (<div style={{  }} className='box' key={ box.id }>{box.id}</div>));
  
  console.log(0 == ''); // burda sagdakini Number('') a cevirerek 0 degerini aliriz onemli olan value dur 0 = 0
  console.log('0' == 0);// burda da sagdakini toString(0) e cevirerek '0' degerini aliriz '0' = '0' olur

  return (
    <div className='app-container'>
        { boxElements }
    </div>
  );
}

//React element takes style value object => style:{} first bracles for entering js codde to jsx ract element than one more {{}} to add style object

{/* <Header />
<UserInput /> */}