import React from 'react'
import {NavLink} from 'react-router-dom'

export const PanelDeControl = () => {
  return (
    <div className='panelDeControl'>
        <ul>
            <li>
                <NavLink to="/mensajes">Mensajes</NavLink>
            </li>
            <li>
                <NavLink to="/tableros">Tableros</NavLink>
            </li>
            <li>
                <NavLink to="/calendario">Calendario</NavLink>
            </li>
            <li>
                <NavLink to="/reportes">Reportes</NavLink>
            </li>
            <li>
                <NavLink to="/configuracion">Configuracion</NavLink>
            </li>
        </ul>
    </div>
  )
}
