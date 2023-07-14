import './App.css';
import Create from './components/Create';
import Navbar from './components/Navbar';
import Main from './components/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Update from './components/Update';
import Home from './components/Home';
import Display from './components/Display';


function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Main/>}></Route>
        <Route exact path='/home' element={<Home />}></Route>
        <Route exact path='/create' element={<Create/>}></Route>
        <Route path='/edit/:id' element={<Update />}></Route>
        <Route path='/display' element={<Display />}></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
