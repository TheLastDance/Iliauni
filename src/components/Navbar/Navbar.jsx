import './Navbar.css'
import { Link } from 'react-router-dom';
import { useToggle } from '../../customHooks/useToggle';
import { useLocation } from 'react-router-dom';
import Popup from './Popup/Popup';

function Navbar() {
  const [isPopupOpen, togglePopup, handleFalse] = useToggle();
  const name = localStorage.getItem('name');
  const photo = localStorage.getItem('photo');
  const location = useLocation();

  return (
    <header>
      <nav>
        <div className='container_1'>
          {location.pathname === '/form' ? <p>Form</p> : <Link to={'/form'} >Form</Link>}
          <Link to={'/api'} >API</Link>
        </div>
        <div className='container_2'>
          <p>{name}</p>
          <div className='photo_container' onClick={togglePopup}>
            <img src={photo} alt="profile photo" />
          </div>
          <Popup isPopupOpen={isPopupOpen} closePopup={handleFalse} />
        </div>
      </nav>
    </header>
  )
}

export default Navbar;