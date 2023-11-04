import './App.css'
import { Route, Routes } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Auth from './components/Auth/Auth';
import Form from './components/Form/Form';
import Api from './components/Api/Api';
import Authentificated from './hocs/Authentificated';
import NotAuthentificated from './hocs/NotAthentificated';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Authentificated><Landing /></Authentificated>} ></Route>
        <Route path='/auth' element={<Authentificated><Auth /></Authentificated>} ></Route>
        <Route path='/form' element={<NotAuthentificated><Form /></NotAuthentificated>} ></Route>
        <Route path='/api' element={<NotAuthentificated><Api /></NotAuthentificated>} ></Route>
        <Route path='/api/:num' element={<NotAuthentificated><Api /></NotAuthentificated>} ></Route>
      </Routes>
    </>
  )
}

export default App
