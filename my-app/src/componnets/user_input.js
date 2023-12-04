import { memeData } from "../data/memeData";
import React from "react";

function UserInput(probs){

    //BODY of Function

    const [image, setImage] = React.useState(memeData[getRandomNum()].url)
    const [buttonName, setName] = React.useState('get a new meme imagez');

    function changeButtonName (){
        setName('get a new memez hehe')
    }
    function getRandomNum(){
        return Math.floor(Math.random() * (memeData.length));
    }

    function getRandomImage(){
        setImage(memeData[getRandomNum()].url);
    }

   
    return (
        <div className='user-input-container'>
            <div className='input-group'>
                <input placeholder="Top text" type="text"></input>
                <input placeholder="Bottom text" type="text"></input>
            </div>

            <button onClick={()=>{
                getRandomImage()
                changeButtonName()
            }}>{ buttonName }</button>

            <img src={ image }></img>
        </div>
    );
}

export default UserInput;