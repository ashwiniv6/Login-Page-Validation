import React from 'react'
import "./App.css";
import Main from './component/Main';
import Forgot from './component/Forgot';
import Signup from './component/Signup';
import { Routes, Route } from 'react-router-dom';
import Register from './component/Register';
import Part from './component/Part';
import Mailsent from './component/Mailsent';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/part" element={<Part />}></Route>
        {/* <Route path='/signup' element={<Signup/>}></Route> */}
        <Route path='/forgot' element={<Forgot />}></Route>
        {/* <Route path='/register' element={<Register/>}></Route> */}
        <Route path='/mailsent' element={<Mailsent />}></Route>
      </Routes>
    </div>
  )
}

export default App;
