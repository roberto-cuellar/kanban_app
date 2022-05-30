import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link
} from "react-router-dom";
import { Calendario } from './componentes/Calendario';
import { Configuracion } from './componentes/Configuracion';
import { Mensajes } from './componentes/Mensajes';
import { Navbar } from './componentes/Navbar'
import { PanelDeControl } from './componentes/PanelDeControl'
import { Perfil } from './componentes/Perfil';
import { Reportes } from './componentes/Reportes';
import { Tableros } from './componentes/Tableros';

export const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <PanelDeControl />
        <Routes>
            <Route exact path="/" element={<Tableros />}/>
            <Route exact path="/tableros" element={<Tableros />}/>
            <Route exact path="/reportes" element={<Reportes />}/>
            <Route exact path="/perfil" element={<Perfil />}/>
            <Route exact path="/mensajes" element={<Mensajes />}/>
            <Route exact path="/configuracion" element={<Configuracion />}/>
            <Route exact path="/calendario" element={<Calendario />}/>
        </Routes>
      </div>
    </Router>
    
  )
}
