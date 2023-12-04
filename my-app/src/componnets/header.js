import memeFace from '../images/meme_face.png'

function Header(){
    return (
        <header>
            <nav  className='header-nav'>
                 <img className="meme-face-icon" src={ memeFace }></img>
                 <h1>Meme Generator</h1>
                 <p>React Course Project 3</p>
            </nav>

        </header>
    );
}

export default Header;