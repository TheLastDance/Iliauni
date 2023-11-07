import './NotFoundPage.css'
import Navbar from '../Navbar/Navbar';

function NotFoundPage() {
  const isAuth = localStorage.getItem('name')

  return (
    <>
      {isAuth ? <Navbar /> : null}
      <section className='notFoundPage'>
        <h1>{"Page doesn't exist, check link address!"}</h1>
      </section>
    </>
  )
}

export default NotFoundPage;