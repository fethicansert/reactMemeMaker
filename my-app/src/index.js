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

  let isYes = true;
  const [title, setTitle] = React.useState("0");
  
  function increase(){
    const strNum = title;
    const intNum = parseInt(title) + 1;
    setTitle(intNum);
  }

  function decrease(){
    const strNum = title;
    if(title != '0'){
      const intNum = parseInt(title) - 1;
      setTitle(intNum)
    }else{
      alert('I cant go to negative numbers')
    }
   
  }
  
  
  
  return (
    <div className='app-container'>
      <div className='state'>
        <div className='state-value'>
          <h1  className='title'> { title } </h1>
        </div>
        <button onClick={ decrease } className='button-left'>-</button>
        <button onClick={ increase } className='button-right'>+</button>
      </div>
    </div>
  );
}





  {/* <Header></Header>
      <UserInput/>  */}

// function greetings(name){

//   const date = new Date();
//   const hours = date.getHours();

//   let timeOfDay;
//   console.log(hours);
//   if(hours >= 4 && hours < 12){
//     timeOfDay = 'morning';
//   }else if(hours >= 12 && hours < 17){
//     timeOfDay = 'afternoon';
//   }else if(hours >= 17 && hours < 20){
//     timeOfDay = 'evening';
//   }else{
//     timeOfDay = 'night';
//   }

//   return `Good ${timeOfDay} ${name}`;

  
// }

// const greetingMsg = greetings('Fethi')
// console.log(greetingMsg);

// setThings(prevState => {
//   console.log(prevState);
//   return [...prevState, newThingElement]
// });


   {/* <Header></Header>
        <UserInput /> 
        */}