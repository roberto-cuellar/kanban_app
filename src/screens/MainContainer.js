import React, { useState } from 'react'
import { Navbar } from '../componentes/Navbar'
import { PanelDeControl } from '../componentes/PanelDeControl'
import { WorkSpace } from '../componentes/WorkSpace'
import {Grid} from '@mui/material';
export const MainContainer = () => {

  const [screen, setScreen] = useState("Tableros"); 
  // Estado que permite cambiar la pantalla del workspace, la función para cambiar de estado "pantalla" se envía a los
  // componentes navbar y panel de control que tienen la capacidad de hacer un cambio de pantalla según el componente seleccionado.
  // Por último se envía el estado screen al componente workspace como parte de sus props para que renderice la pantalla adecuada
  

  return (
    <Grid container spacing={0} >
      <Grid container spacing={0} justifyContent='flex-end' sx={{ bgcolor: 'text.disabled'}} >
        <Grid item >
            <Navbar setScreen={setScreen}/>     
        </Grid>
      </Grid>
      
      <Grid item xs={1}>
        <PanelDeControl setScreen={setScreen} />
      </Grid>
      <Grid item xs={11}>
        <WorkSpace screen = {screen} />
      </Grid>


    </Grid>
  )
}
