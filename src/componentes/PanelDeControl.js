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
import Drawer from '@mui/material/Drawer';
import { panelDeControlItems } from './panelControlItems';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
export const PanelDeControl = ({setScreen}) => {

    // Se cambia el estado screen, para renderizar dicho screen en el espacio de trabajo
    const handleClick  = (e) =>{
        setScreen(e); 
        
    }

    
    const drawerWidth = '15%';

    const drawer = (
        <List>
            {panelDeControlItems.map((item, index) => (
                <ListItem 
                    onClick={()=>setScreen(item.route)}
                    key={item.id} 
                    disablePadding
                >
                    {console.log(item.route)}
                    <ListItemButton>
                    <ListItemIcon sx={{
                        color:  'rgba(255, 255, 255, 0.7)'    
                    }}>
                        {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.label} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    );

  return (
    <Drawer
        variant="permanent"
        sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { 
                boxSizing: 'border-box', 
                width: drawerWidth,
                backgroundColor: '#081628',
                color:  'rgba(255, 255, 255, 0.7)'  
                },            
        }}
        >
        {drawer}
    </Drawer>
  )
}
