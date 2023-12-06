import  emptyStar  from '../images/star_empty.png'
import  filledStar  from '../images/star_filled.png'

//Star resmini user da vermistim ama star resimin favirote olup olmadigin belirleyip oyle karar vermek daha iyi
function Start(probs){
    console.log(probs);
    const startIcon = probs.isFavorite ? filledStar : emptyStar; 

    return(
        <img  onClick={ probs.handleClick } src={ startIcon } width={'40px'} style={{ cursor: 'pointer' }}></img>
    );
}

export default Start;