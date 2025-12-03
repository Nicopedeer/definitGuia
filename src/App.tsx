import { Route, Routes } from 'react-router-dom';
import './App.css'
import NavbarComponent from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import WelcomeComponent from './components/welcome';
import CardsContainerComponent from './components/cardsContainer';
import { servicies } from './utils/services.mock';
import { visitsMock } from './utils/visits.mock';
import { foods } from './utils/foods.mock';

function App() {
  return (
    <div className="mainContainer">
      <NavbarComponent />
      <Routes>
        <Route path='/' element={<WelcomeComponent/>}/>
        <Route path='/buys' element={<CardsContainerComponent info={servicies} title='Servicios'/>}/>
        <Route path='/visits' element={<CardsContainerComponent info={visitsMock} title='Lugares para visitar'/>}/>
        <Route path='/food' element={<CardsContainerComponent info={foods} title='Gastronomia'/>}/>
      </Routes>
      </div>
  )
}

export default App
