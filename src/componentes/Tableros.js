import React from 'react'
import { CartaEnProceso } from './CartaEnProceso'
import { CartaPorHacer } from './CartaPorHacer'

export const Tableros = () => { //Este componente  se encarga de posicionar los subcomponentes de cartas por hacer, en proceso, en revisión y finalizado
    
  return (
    <div className='tableros'>
        <h1> Tableros</h1>
        <div className='cartasEstados'>
            <CartaPorHacer />
            <CartaEnProceso />        
        </div>
        
    </div>
  )
}
