import React from "react";

function Box(props){

    console.log(props.id + ' box created');
    const style = {
        background : props.on ? 'green' : 'red'
    }
    
    return (
        <div 
            style={style}  
            onClick={ () => { props.handleClick(props.id)} }  
            className="box"> { props.id } 
        </div>
    );
}   

export default Box;