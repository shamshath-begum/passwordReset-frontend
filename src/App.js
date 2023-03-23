import './App.css';
import Header from './components/Header';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Passwordreset from './components/Passwordreset';
import Forgotpassword from './components/Forgotpassword';

export const url='http://localhost:8000'


function App() {
  return <>
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<SignUp/>} />
    <Route path='/passwordreset' element={<Passwordreset/>} />
    <Route path='/forgotpassword/:id/:token' element={<Forgotpassword/>} />
    <Route path='*' element={<Navigate to='/login' />} />
  </Routes>
  </BrowserRouter>
  </>
}

export default App;
