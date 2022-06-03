import React from 'react'
import {NavLink} from 'react-router-dom'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
  } from "react-router-dom";
import { Card,CardContent,Button,ButtonGroup } from '@mui/material';
import BuildIcon from '@mui/icons-material/Build';
import EventIcon from '@mui/icons-material/Event';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import ForumIcon from '@mui/icons-material/Forum';
import SummarizeIcon from '@mui/icons-material/Summarize';
import {Grid as div,Typography,FormControl,Input} from '@mui/material';
export const PanelDeControl = ({setScreen}) => {

    // Se cambia el estado screen, para renderizar dicho screen en el espacio de trabajo
    const handleClick  = (e) =>{
        setScreen(e.target.value);  
    }

  return (
    <div className='panelDeControl'>
    
        <ButtonGroup fullWidth variant="outlined" orientation="vertical" aria-label="vertical outlined button group">
            <Button 
                startIcon={<ForumIcon />}
                size="medium" value='Mensajes' onClick={(e)=>handleClick(e)}>
                Talk
            </Button>
            <Button  
                startIcon={<DashboardCustomizeIcon />}
                size="medium" value='Tableros' onClick={(e)=>handleClick(e)}>
                Tableros
            </Button>
            <Button 
                startIcon={<EventIcon />}
                size="big" value='Calendario' onClick={(e)=>handleClick(e)}>
                Calendario
            </Button>
            <Button 
                startIcon={<SummarizeIcon />}
                size="medium" value='Reportes' onClick={(e)=>handleClick(e)}>
                Reportes
            </Button>
            <Button 
                startIcon={<BuildIcon />}
                size="medium" value='Configuracion' onClick={(e)=>handleClick(e)}>
                Configuración
            </Button>
        </ButtonGroup>
    </div>
  )
}
