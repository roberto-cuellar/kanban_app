import React from 'react'
import {NavLink} from 'react-router-dom'

export const PanelDeControl = ({setScreen}) => {

    // Se cambia el estado screen, para renderizar dicho screen en el espacio de trabajo
    const handleClick  = (e) =>{
        setScreen(e.target.value);  
    }

  return (
    <div  className='panelDeControl'>
        <button value='Mensajes' onClick={(e)=>handleClick(e)}>
            Mensajes
        </button>
        <button value='Tableros' onClick={(e)=>handleClick(e)}>
            Tableros
        </button>
        <button value='Calendario' onClick={(e)=>handleClick(e)}>
            Calendario
        </button>
        <button value='Reportes' onClick={(e)=>handleClick(e)}>
            Reportes
        </button>
        <button value='Configuracion' onClick={(e)=>handleClick(e)}>
            Configuración
        </button>
    </div>
  )
}
