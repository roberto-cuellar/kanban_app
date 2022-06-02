import React, { useState } from 'react'
import { Navbar } from '../componentes/Navbar'
import { PanelDeControl } from '../componentes/PanelDeControl'
import { WorkSpace } from '../componentes/WorkSpace'

export const MainContainer = () => {

  const [screen, setScreen] = useState("Tableros"); 
  // Estado que permite cambiar la pantalla del workspace, la función para cambiar de estado "pantalla" se envía a los
  // componentes navbar y panel de control que tienen la capacidad de hacer un cambio de pantalla según el componente seleccionado.
  // Por último se envía el estado screen al componente workspace como parte de sus props para que renderice la pantalla adecuada
  

  return (

    <div className='mainContainer'>
        <Navbar setScreen={setScreen}/>
        <PanelDeControl setScreen={setScreen} />
        <WorkSpace screen = {screen}  />
      </div>
  )
}
