import React from 'react'
import {NavLink} from 'react-router-dom'
import { Container as DIV,Card,CardContent,Button,ButtonGroup } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
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
            <Button 
                startIcon={<EmailIcon />}
                color="primary" size="medium" value='Mensajes' onClick={(e)=>handleClick(e)}>Mensajes</Button>
            <Button 
                startIcon={<NotificationsIcon />}
                size="medium" value='Notificaciones' onClick={(e)=>handleClick(e)}>
                    Notificaciones
                </Button>
            <Button 
                startIcon={<PersonIcon />}
                size="medium" value='Perfil' onClick={(e)=>handleClick(e)}>
                Usuario
            </Button>
        </ButtonGroup>
    // </div>
      
  )
}
