import React from 'react'
import {NavLink} from 'react-router-dom'
import { Container as DIV,Card,CardContent,Button,ButtonGroup } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import Tooltip from '@mui/material/Tooltip';
import Badge from '@mui/material/Badge';

/// Main navbar

export const Navbar = ({setScreen}) => {
    const [value, setValue] = React.useState(0);

    // Se cambia el estado screen, para renderizar dicho screen en el espacio de trabajo
    const handleClick  = (e) =>{
        setScreen(e.target.value);  
    }

  return (
    // <div  className='navBar'>
    // <div className='navBar'>
    <Box sx={{ 
        width: '100%',
        marginRight: '10%',
        // boxShadow: 5,
        // borderRadius: 1
        }}>
        <BottomNavigation
          showLabels
          value={value}
          sx={{bgcolor: 'text.disabled'}}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
        <Tooltip title='Ir a mensajería'>
            
             <BottomNavigationAction  onClick={()=>setScreen('Mensajes')} label="" icon={
             <>
                <Badge badgeContent={4} color="error">
                    <EmailIcon />
                </Badge>
             </>            
             } 
            />
            
        </Tooltip>
        <Tooltip title='Notificaciones'>
          <BottomNavigationAction onClick={()=>setScreen('Notificaciones')} label="" icon={
        <>
                <Badge badgeContent={2} color="error">
                    <NotificationsIcon />
                </Badge>
             </>        
          } 
        />
        </Tooltip>
        <Tooltip title='Usuario'>
          <BottomNavigationAction onClick={()=>setScreen('Perfil')} label="" icon={<PersonIcon />} />
          </Tooltip>
        </BottomNavigation>
    </Box>
    // </div>
      
  )
}
