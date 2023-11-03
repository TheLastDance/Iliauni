import './Popup.css'
import { useNavigate } from 'react-router-dom';

function Popup({ isPopupOpen, closePopup }) {
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem('photo');
    localStorage.removeItem('name');
    navigate('/');
  }

  return (
    <div className={isPopupOpen ? "popup visible" : "popup"}>
      <button type='button' onClick={handleLogOut} >Log out</button>
      <div className='close_icon' onClick={closePopup}>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

export default Popup;