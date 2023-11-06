import './NotFoundPage.css'
import Navbar from '../Navbar/Navbar';

function NotFoundPage() {

  return (
    <>
      <Navbar />
      <section className='notFoundPage'>
        <h1>{"Page doesn't exist, check link address!"}</h1>
      </section>
    </>
  )
}

export default NotFoundPage;