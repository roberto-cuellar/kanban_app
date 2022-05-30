import React from 'react'
import {NavLink} from 'react-router-dom'
/// Main navbar

export const Navbar = () => {
  return (
    <div className='navBar'>
        <ul>
            <li>
                <a className='navItem' href="#">Panel de Control</a>
            </li>
            <li>
                <NavLink to="/mensajes">Mensajes</NavLink>
            </li>
            <li>
                <NavLink to="/notificaciones">Notificaciones</NavLink>
            </li>
            <li>
                <NavLink to="/perfil">R.Cuellar</NavLink>
            </li>
        </ul>
    </div>
  )
}
