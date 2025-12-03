import myImage from '../assets/Welcome.jpg';
import { Link } from 'react-router-dom';

export default function WelcomeComponent(){
    return(
        <>
        <div className="welcomeContainer">
            <h1 className='title'>
                ¿Primera vez en Henderson?
            </h1>
            <p>
                ¡No te preocupes!
                <br/>
                Llegaste al lugar correcto
            </p>
            <div className='welcomeInfo'>
                <img className='welcomeImage' src={myImage} alt="Franco y Vicky"/>
                <p>Decidimos festejar nuestra union en este hermoso pueblito, un lugar chico y con mucha tranquilidad. Es practicamente imposible perderse, pero como a nadie le gusta andar a las vueltas sin encontrar lo que necesita, creamos esta guia para acompañarlos en su estadia.</p>
            </div>
            <button className='welcomeButton'><Link className='welcomeLink' to='/buys'>Servicios</Link></button>
            <button className='welcomeButton'><Link className='welcomeLink' to='/visits'>Lugares para conocer</Link></button>
            <button className='welcomeButton'><Link className='welcomeLink' to='/food'>Gastronomia</Link></button>
        </div>
        
        </>
        
    )
}