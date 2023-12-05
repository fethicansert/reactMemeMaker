export default function Count(probs){
    console.log(probs);
    return (
        <div className='counter'>{ probs.count }</div>
    );
}