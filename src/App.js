import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { MainContainer } from './screens/MainContainer';

export const App = () => {
  return (
    //
    
    <>    
      <Router>
        <Routes>
            {/* la ruta principal apunta al contenedor principal para efectos de la grilla de diseño */}
            <Route exact path="/" element={<MainContainer />}/> 
        </Routes>
      </Router>
    </>    
    
  )
}
