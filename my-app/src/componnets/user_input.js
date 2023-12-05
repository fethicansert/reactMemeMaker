import { memeData } from "../data/memeData";
import React from "react";

function UserInput(probs){

    //BODY of Function

    const [image, setImage] = React.useState(memeData[getRandomNum()].url)
    const [meme, setMeme] = React.useState({
        topText: "Top Text",
        bottomText: "Bottom Text",
    });

    function setText(){
        setMeme()
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
            }}>GET NEW MEME IMAGE</button>

            <button onClick={ setText }>ADD TEXT TO IMAGE</button>
            <div className="img-container">
                <p className="top-text">{ meme.topText }</p>
                <img style={{marginTop:'20px'}} width={'600px'} height={'500px'} className="meme-image" src={ image }></img>
                <p className="bottom-text">{ meme.bottomText }</p>
            </div>
        </div>
    );
}

export default UserInput;