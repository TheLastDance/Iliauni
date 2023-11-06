import './App.css'
import { Route, Routes } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Auth from './components/Auth/Auth';
import Form from './components/Form/Form';
import Api from './components/Api/Api';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} ></Route>
        <Route path='/auth' element={<Auth />} ></Route>
        <Route path='/form' element={<Form />} ></Route>
        <Route path='/api' element={<Api />} ></Route>
        <Route path='/api/:num' element={<Api />} ></Route>
        <Route path='/*' element={<NotFoundPage />} ></Route>
      </Routes>
    </>
  )
}

export default App
