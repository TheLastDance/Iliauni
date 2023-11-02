import './App.css'
import { Route, Routes } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Auth from './components/Auth/Auth';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} ></Route>
        <Route path='/auth' element={<Auth />} ></Route>
      </Routes>
    </>
  )
}

export default App
