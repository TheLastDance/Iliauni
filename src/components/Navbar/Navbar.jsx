import './Navbar.css'
import { Link } from 'react-router-dom';
import { useToggle } from '../../customHooks/useToggle';
import Popup from './Popup/Popup';
import OutsideClickHandler from 'react-outside-click-handler';

function Navbar() {
  const [isPopupOpen, togglePopup, handleFalse] = useToggle();
  const name = localStorage.getItem('name');
  const photo = localStorage.getItem('photo');

  console.log(isPopupOpen);

  return (
    <header>
      <nav>
        <div className='container_1'>
          <p>Form</p>
          <Link to={'/api'} >API</Link>
        </div>
        <div className='container_2'>
          <p>{name}</p>
          <OutsideClickHandler onOutsideClick={handleFalse}>
            <div className='photo_container' onClick={togglePopup}>
              <img src={photo} alt="profile photo" />
            </div>
            <Popup isPopupOpen={isPopupOpen} closePopup={handleFalse} />
          </OutsideClickHandler>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;