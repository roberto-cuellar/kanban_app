import React from 'react'
import {NavLink} from 'react-router-dom'
import { Card,CardContent,Button,ButtonGroup } from '@mui/material';

export const PanelDeControl = ({setScreen}) => {

    // Se cambia el estado screen, para renderizar dicho screen en el espacio de trabajo
    const handleClick  = (e) =>{
        setScreen(e.target.value);  
    }

  return (
    <div className='panelDeControl'>
        <ButtonGroup fullWidth variant="outlined" orientation="vertical" aria-label="vertical outlined button group">
            <Button size="medium" value='Mensajes' onClick={(e)=>handleClick(e)}>
                Mensajes
            </Button>
            <Button  size="medium" value='Tableros' onClick={(e)=>handleClick(e)}>
                Tableros
            </Button>
            <Button size="medium" value='Calendario' onClick={(e)=>handleClick(e)}>
                Calendario
            </Button>
            <Button size="medium" value='Reportes' onClick={(e)=>handleClick(e)}>
                Reportes
            </Button>
            <Button size="medium" value='Configuracion' onClick={(e)=>handleClick(e)}>
                Configuración
            </Button>
        </ButtonGroup>
    </div>
  )
}
