import './Auth.css'
import { useState } from 'react';
import add_photo_icon from "../../assets/add_photo_icon.svg"
import { useNavigate } from 'react-router-dom';

function Auth() {
  const [photo, setPhoto] = useState(null);
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handlePhotoChange = (e) => {
    const profilePhoto = e.target.files[0];

    if (profilePhoto) {
      const fileReader = new FileReader();

      fileReader.onload = (e) => {
        const { result } = e.target;
        setPhoto(result);
      }

      fileReader.readAsDataURL(profilePhoto)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (photo && name) {
      localStorage.setItem('photo', photo);
      localStorage.setItem('name', name);
      navigate('/form');
    }
  }

  return (
    <main>
      <section className='auth'>
        <div className='authCard_container'>
          <h2>Get Started</h2>
          <form className='authCard_container_form' onSubmit={handleSubmit}>
            <label>
              <p>add a photo</p>
              <input type="file" accept='image/*' onChange={handlePhotoChange} />
              {photo ? <img src={photo} className='circle_image' alt="photo_icon" /> :
                <div className='circle_image'>
                  <img src={add_photo_icon} alt="photo_icon" />
                </div>}
            </label>
            <label>
              <p>fill in your name</p>
              <input type="text" maxLength={20} placeholder='your name' value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <button type='submit' disabled={!(photo && name)}>Sign in</button>
          </form>
        </div>
      </section>
    </main>
  )
}

export default Auth;