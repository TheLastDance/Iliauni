import './Form.css'
import Navbar from '../Navbar/Navbar';
import NotAuthentificated from '../../hocs/NotAuthentificated';

const Form = NotAuthentificated(() => {

  return (
    <>
      <Navbar />
    </>
  )
})

export default Form;