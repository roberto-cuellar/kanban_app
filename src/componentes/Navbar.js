import React from 'react'
import {NavLink} from 'react-router-dom'
/// Main navbar

export const Navbar = ({setScreen}) => {

    // Se cambia el estado screen, para renderizar dicho screen en el espacio de trabajo
    const handleClick  = (e) =>{
        setScreen(e.target.value);  
    }

  return (
    <div  className='navBar'>
        <button value='Mensajes' onClick={(e)=>handleClick(e)}>
            Mensajes
        </button>
        <button value='Notificaciones' onClick={(e)=>handleClick(e)}>
            Notificaciones
        </button>
        <button value='Perfil' onClick={(e)=>handleClick(e)}>
            Usuario
        </button>
    </div>
  )
}
