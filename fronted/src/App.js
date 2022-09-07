import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  MainPage  from './pages/MainPage';
import SecondMain  from './pages/SecondPage';
import {Header} from './Component/Header';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header/>
     <Routes>
            <Route path= '/SecondPage' element = {<SecondMain />} />
            <Route path='/' element={<MainPage />} />
      </Routes>

      </BrowserRouter>
    
    </div>
  );
}

export default App;
