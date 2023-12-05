import userImage from '../images/user_img.png'
import  emptyStar  from '../images/star_empty.png'
import  filledStar  from '../images/star_filled.png'
import React from 'react';

function User(){
 
    console.log("User Render");
    const [contact, setContact] = React.useState({
      fisrtName: 'John',
      lastName: 'max',
      phone: '+23 4244 2424 411',
      email: 'exampleJohn@mail.com',
      isFavorite: false
    });
  

    // const [star, setStar] = React.useState(emptyStar);
    // const [isFavorite, setFavorite] = React.useState(false);

    const starIcon = contact.isFavorite ? filledStar : emptyStar;
    
  
    function changeFaV(){
        // toogle in fasle true = bool = true funtion toogle() => !bool if it's tru
        setContact(prevContact => {
            return {...prevContact, isFavorite: !prevContact.isFavorite}
        });

    }

    return (
        <div>
            <div className='user-image-container'>
                <img className='user-img' src={userImage} width={'200px'} ></img>
            </div>
            <img onClick={ changeFaV } src={ starIcon } width={'40px'} style={{ cursor: 'pointer' }}></img>
            <h1>{ contact.fisrtName }</h1>
            <p>{ contact.phone }</p>
            <p> { contact.email } </p>
        </div>
    ); 
}

export default User;