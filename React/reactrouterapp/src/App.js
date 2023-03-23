import logo from './logo.svg';
import './App.css';
import {  NavLink, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Support from './components/Support';
import Labs from './components/Labs';
import About from './components/About';
import NotFoundPage from './components/NotFoundPage';
import MainHeader from './components/MainHeader';

function App() {
  
  return (
    <div className="App">
    <nav>
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
      <NavLink to="/support">Support</NavLink></li>
      <li>
      <NavLink to="/about">About</NavLink></li>
      <li>
      <NavLink to="/labs">labs</NavLink></li>
    </ul>
  </nav>
      <Routes>
        <Route path='/' element={<MainHeader/>}>
        <Route index element={<Home/>}></Route>
        <Route path='/support' element={<Support/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/labs' element={<Labs/>}></Route>
        <Route path='*' element={<NotFoundPage/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
