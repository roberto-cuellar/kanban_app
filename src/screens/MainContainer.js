import React, { useState } from 'react'
import { Navbar } from '../componentes/Navbar'
import { PanelDeControl } from '../componentes/PanelDeControl'
import { WorkSpace } from '../componentes/WorkSpace'

export const MainContainer = () => {

  const [screen, setScreen] = useState("Tableros"); // Estado que permite cambiar el screen del workspace
  

  return (
    <div className='mainContainer'>
        <Navbar setScreen={setScreen}/>
        <PanelDeControl setScreen={setScreen} />
        <WorkSpace screen = {screen}  />
      </div>
  )
}
