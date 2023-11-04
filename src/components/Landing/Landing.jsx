import './Landing.css'
import { Link } from 'react-router-dom';
import notepad_img from "../../assets/notepad.png";
import Authentificated from '../../hocs/Authentificated';

const Landing = Authentificated(() => {

  return (
    <main>
      <section className='landing'>
        <div className='landing_container'>
          <img src={notepad_img} alt="notepad image" />
          <h1>Get Started Today</h1>
          <Link to='/auth'><button>Get Started</button></Link>
        </div>
      </section>
    </main>
  )
})

export default Landing;