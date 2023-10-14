import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Pages/Home';
import Gifts from "./Pages/Gifts";
import { Routes, Route, BrowserRouter} from "react-router-dom";

export default function App() {
  return (
    <>
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gifts" element={<Gifts />} />
      </Routes>
       </BrowserRouter>
    </>
  )
}
