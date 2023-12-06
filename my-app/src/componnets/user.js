import userImage from '../images/user_img.png'

import React from 'react';
import Start from './star';

function User(){
 
    const [contact, setContact] = React.useState({
      fisrtName: 'John',
      lastName: 'max',
      phone: '+23 4244 2424 411',
      email: 'exampleJohn@mail.com',
      isFavorite: false
    });
  
    function changeFaV(){
        setContact(prevContact => {
            return {...prevContact, isFavorite: !prevContact.isFavorite}
        });
    }

    return (
        <div className='user-container'>
            <div className='user-image-container'>
                <img className='user-img' src={userImage} width={'170px'} ></img>
            </div>
            <Start handleClick={ changeFaV } isFavorite={ contact.isFavorite } />
            <h1>{ contact.fisrtName }</h1>
            <p>{ contact.phone }</p>
            <p> { contact.email } </p>
        </div>
    ); 
}

export default User;