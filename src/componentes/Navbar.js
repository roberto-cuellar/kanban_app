import React from 'react'
import {NavLink} from 'react-router-dom'
import { Container as DIV,Card,CardContent,Button,ButtonGroup } from '@mui/material';
/// Main navbar

export const Navbar = ({setScreen}) => {

    // Se cambia el estado screen, para renderizar dicho screen en el espacio de trabajo
    const handleClick  = (e) =>{
        setScreen(e.target.value);  
    }

  return (
    // <div  className='navBar'>
    // <div className='navBar'>
        <ButtonGroup variant="text" aria-label="outlined primary button group">
            <Button color="primary" size="medium" value='Mensajes' onClick={(e)=>handleClick(e)}>
                Mensajes
            </Button>
            <Button size="medium" value='Notificaciones' onClick={(e)=>handleClick(e)}>
                Notificaciones
            </Button>
            <Button size="medium" value='Perfil' onClick={(e)=>handleClick(e)}>
                Usuario
            </Button>
        </ButtonGroup>
    // </div>
      
  )
}
